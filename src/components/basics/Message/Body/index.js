/* eslint-disable react/no-danger */
import React, {
  Fragment,
  memo, useState, useMemo
} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import DOMPurify from 'dompurify';
import { GeneralCommentType } from '../../../groups/Comments/Box/types';
import { Typography, IconButton } from '@material-ui/core';
import Button from '../../Buttons/Button';
import { FontIcon } from '../../Icon';
import TextEditor from '../../../../containers/groups/TextEditor';
import styles from './bodyMessage.module.scss';

// Component
const BodyMessage = (props) => {
  const {
    isEdited, canEdit, onEdit, canReact, onReact, reactions, message, onClick,
    toolbarHidden, confirmCancel, highlightHover, canSave
  } = props;
  const commentBodyClassnames = useMemo(() => classNames(
    styles.commentContainer,
    {
      [styles.historyComment]: isEdited,
      [styles.mainComment]: !isEdited,
      [styles.highlightHover]: highlightHover
    }
  ), [isEdited]);

  const [isEditing, setIsEditing] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const onStartEdit = () => {
    setIsEditing(true);
  };

  const onCancelEditing = () => {
    setIsEditing(false);
  };

  const handleReact = () => {
    if (canReact && onReact) {
      onReact({ message });
    }
  };

  const onEditSubmit = (data) => {
    if (!data.body || data.body === message.body) {
      setIsEditing(false);
      return;
    }

    setIsLoading(true);
    onEdit(
      {
        ...message,
        body: data.body
      },
      message
    );
    setIsEditing(false);
    setIsLoading(false);
  };

  if (isEditing) {
    return (
      <TextEditor
        body={message.body}
        onSubmit={onEditSubmit}
        isLoading={isLoading}
        onCancelCustom={onCancelEditing}
        hideOptions
        toolbarHidden={toolbarHidden}
        confirmCancel={confirmCancel}
        canSave={canSave}
      />
    );
  }
  const config = { KEEP_CONTENT: false, ADD_ATTR: ['target'] };
  const clean = DOMPurify.sanitize(message.body, config);

  const content = (
    <Fragment>
      <div className={styles.message}>
        <Typography
          variant="body1"
          classes={{ root: styles.content }}
          dangerouslySetInnerHTML={{ __html: clean }}
        />
      </div>
      { (!isEdited && canEdit) && (
        <IconButton
          className={classNames(styles.messageButton, styles.highlightButtonHover)}
          onClick={onStartEdit}
        >
          <FontIcon name="icon-pencil" />
        </IconButton>
      )}
      {
        canReact && (
          <IconButton
            className={classNames(
              styles.messageButton,
              {
                [styles.inactiveReactions]: (!reactions || reactions === 'inactive'),
                [styles.semiActiveReactions]: (reactions === 'semiActive'),
                [styles.activeReactions]: (reactions === 'active'),
                [styles.highlightButtonHover]: canReact
              },
            )}
            onClick={handleReact}
          >
            <FontIcon className={classNames(styles.reaction)} name="icon-smiley" />

          </IconButton>
        )
      }
    </Fragment>
  );

  if (onClick) {
    return (
      <Button
        fullWidth
        component="div"
        classes={{ root: styles.button }}
        onClick={onClick}
      >
        { content }
      </Button>
    );
  }

  return (
    <div className={commentBodyClassnames}>{ content }</div>
  );
};

// Props
BodyMessage.defaultProps = {
  isEdited: false,
  canEdit: true,
  onEdit: () => {},
  canReact: false,
  onReact: () => {},
  reactions: null,
  toolbarHidden: false,
  confirmCancel: false,
  onClick: undefined,
  highlightHover: true,
  canSave: () => true
};

BodyMessage.propTypes = {
  message: GeneralCommentType.isRequired,
  isEdited: PropTypes.bool,
  canEdit: PropTypes.bool,
  onEdit: PropTypes.func,
  canReact: PropTypes.bool,
  onReact: PropTypes.func,
  reactions: PropTypes.string,
  toolbarHidden: PropTypes.bool,
  confirmCancel: PropTypes.bool,
  onClick: PropTypes.func,
  highlightHover: PropTypes.bool,
  canSave: PropTypes.func
};

export default memo(BodyMessage);

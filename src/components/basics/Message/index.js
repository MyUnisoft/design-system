import React from 'react';
import PropTypes from 'prop-types';
import MessageHeader from './Header';
import JistyMessageBody from './JistyMessageBody';
import MessageBody from './Body';
import classNames from 'classnames';
import MessageAttachments from './Attachments';
import { GeneralCommentType } from './types';
import styles from './message.module.scss';

const Message = ({
  message,
  canEdit,
  onEdit,
  canReact,
  onReact,
  historyState,
  toolbarHidden,
  confirmCancel,
  classes,
  reactions,
  attachments,
  onAttachmentDelete,
  bodyProps,
  ...others
}) => {
  const {
    avatarImgSrc,
    initials,
    name,
    date,
    jisty
  } = message;
  return (
    <div className={classNames(styles.container, classes)} {...others}>
      <div className={styles.header}>
        <MessageHeader
          initials={initials}
          name={name}
          isEdited={historyState}
          avatarImgSrc={avatarImgSrc}
          date={date}
        />
      </div>
      {jisty ? (
        <JistyMessageBody
          message={message}
        />
      )
        : (
          <MessageBody
            message={message}
            canEdit={canEdit}
            onEdit={onEdit}
            isEdited={historyState}
            canReact={canReact}
            onReact={onReact}
            reactions={reactions}
            toolbarHidden={toolbarHidden}
            confirmCancel={confirmCancel}
            {...bodyProps}
          />
        )
      }

      {attachments.length > 0 && (
        <MessageAttachments
          attachments={attachments}
          onDelete={onAttachmentDelete}
        />
      )
      }

    </div>
  );};

Message.propTypes = {
  message: GeneralCommentType.isRequired,
  historyState: PropTypes.bool,
  canEdit: PropTypes.bool,
  onEdit: PropTypes.func,
  canReact: PropTypes.bool,
  onReact: PropTypes.func,
  reactions: PropTypes.string,
  toolbarHidden: PropTypes.bool,
  confirmCancel: PropTypes.bool,
  classes: PropTypes.string,
  attachments: PropTypes.arrayOf(
    PropTypes.shape({
      id_document: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      nom_original: PropTypes.string,
      size: PropTypes.number
    })
  ),
  onAttachmentDelete: PropTypes.func,
  bodyProps: PropTypes.object
};

Message.defaultProps = {
  historyState: false,
  canEdit: true,
  onEdit: () => {},
  canReact: false,
  onReact: () => {},
  toolbarHidden: false,
  confirmCancel: true,
  reactions: null,
  classes: null,
  attachments: [],
  onAttachmentDelete: () => {},
  bodyProps: {}
};

export default Message;

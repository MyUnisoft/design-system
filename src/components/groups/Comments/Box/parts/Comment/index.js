import React from 'react';
import PropTypes from 'prop-types';
import Message from '../../../../../basics/Message';
import CommentHistory from './CommentHistory';

import styles from './Comment.module.scss';

class Comment extends React.PureComponent {
  render() {
    const {
      comment,
      onEdit,
      canEdit,
      hasHistory
    } = this.props;

    const {
      history,
      ...mainCommentProps
    } = comment;

    return (
      <div className={styles.container}>
        <Message
          message={mainCommentProps}
          onEdit={onEdit}
          canEdit={canEdit}
        />
        {hasHistory && <CommentHistory history={history}/>}
      </div>
    );
  }
}

Comment.propTypes = {
  comment: PropTypes.object,
  onEdit: PropTypes.func,
  canEdit: PropTypes.bool,
  hasHistory: PropTypes.bool
};

Comment.defaultProps = {
  onEdit: () => {},
  comment: {},
  canEdit: true,
  hasHistory: true
};

export default Comment;

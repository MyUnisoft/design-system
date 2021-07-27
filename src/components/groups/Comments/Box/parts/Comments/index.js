import React from 'react';
import PropTypes from 'prop-types';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import Loader from '../../../../../basics/Loader';
import { Box } from '@material-ui/core';
import Comment from '../Comment';
import styles from './Comments.module.scss';

const Comments = React.memo((props) => {
  const {
    comments,
    onEdit,
    commentsLoading
  } = props;

  if (commentsLoading) {
    return <Box spacing={3}><Loader size={50} /></Box>;
  }

  if (!comments.length) {
    return null;
  }

  return (
    <div className={styles.container}>
      {comments.map(comment => (
        <Comment
          comment={comment}
          onEdit={onEdit}
          key={comment.id}
        />
      ))}
    </div>
  );
});

Comments.defaultProps = {
  comments: []
};

Comments.propTypes = {
  // comments: CommentsType,
  comments: PropTypes.array,
  onEdit: PropTypes.func.isRequired,
  commentsLoading: PropTypes.bool.isRequired
};

export default Comments;

import React, { memo, useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import I18n from '../../../../../../../assets/I18n';
import Message from '../../../../../../basics/Message';
import { GeneralCommentType } from '../../../types';
import styles from './CommentHistory.module.scss';


const ownStyle = makeStyles(({ palette: { primary } }) => ({
  showHistory: {
    cursor: 'pointer',
    color: primary.main,
    fontWeight: 'bold'
  }
}));

const CommentHistory = memo(({ history }) => {
  const [historyOpen, setHistoryOpen] = useState(false);
  const classes = ownStyle();

  const onToggleShowHistory = () => {
    setHistoryOpen(!historyOpen);
  };

  const getActionButtonText = () => useMemo(() => (historyOpen
    ? I18n.t('commentBox.hideHistory')
    : I18n.t('commentBox.showHistory')), [historyOpen]);

  return (
    <div className={styles.container}>
      <Typography
        onClick={onToggleShowHistory}
        classes={{ root: classes.showHistory }}
      >
        {getActionButtonText()}
      </Typography>
      {historyOpen && (
        <div className={styles.commentListContainer}>
          {history.map((comment, i) => (
            <div className={styles.commentWrapper} key={i}>
              <Message
                message={comment}
                historyState
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
});

CommentHistory.propTypes = {
  history: PropTypes.arrayOf(GeneralCommentType)
};

CommentHistory.defaultProps = {
  history: []
};

export default CommentHistory;

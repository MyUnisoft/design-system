import React, { memo, Fragment } from 'react';
import PropTypes from 'prop-types';
import I18n from '../../../../assets/I18n';
import { Avatar, Typography, withStyles } from '@material-ui/core';
import { fromNow } from '../../../../helpers/date';
import { generateColorWithName } from '../../../../helpers/colors';
import styles from './messageHeader.module.scss';

const MessageHeader = memo((props) => {
  const {
    initials,
    name,
    isEdited,
    date,
    avatarImgSrc, // TODO: See if user avatar will be one v1
    classes
  } = props;

  return (
    <Fragment>
      <div className={styles.avatarImage}>
        <Avatar
          src={avatarImgSrc}
          alt={initials}
          style={!avatarImgSrc ? { backgroundColor: generateColorWithName(name) } : null}
        >
          {initials}
        </Avatar>
      </div>
      <div className={styles.avatarInfo}>
        <Typography classes={{ root: classes.name }} variant="body1" display="inline">
          {name}
        </Typography>
        {isEdited && (
          <Typography classes={{ root: classes.test }} display="inline">
            {` ${I18n.t('commentBox.historyCommentSuffix')}`}
          </Typography>
        )}
        <Typography
          classes={{ root: classes.date }}
          variant="subtitle2"
        >
          {fromNow(date)}
        </Typography>
      </div>
    </Fragment>
  );
});

const customTheme = () => ({
  name: {
    fontWeight: 'bold',
    lineHeight: 1,
    marginBottom: 5
  },
  date: {
    color: '#9b9b9b'
  }
});

MessageHeader.defaultProps = {
  avatarImgSrc: '',
  isEdited: false
};

MessageHeader.propTypes = {
  name: PropTypes.string.isRequired,
  avatarImgSrc: PropTypes.string,
  initials: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  isEdited: PropTypes.bool
};

export default withStyles(customTheme)(MessageHeader);

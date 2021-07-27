import React from 'react';
import PropTypes from 'prop-types';
import useStyles from './styles.js';
import { MAX_COUNT_NOTIFY } from "../../../constants/data";
import cx from 'classnames';
import { FontIcon } from "../Icon";
import { BADGE_STATUS } from "../../../constants/badgeStatus";

function BadgeStatus({ status, value }) {
  const classes = useStyles();

  switch (status) {
  case BADGE_STATUS.OK_MANUEL.value:
    return (
      <div
        className={cx(classes.badge, classes.validBackground)}
      >OK</div>
    );
  case BADGE_STATUS.OK.value:
    return (
      <div
        className={classes.badgeOk}
      >OK</div>
    );
  case BADGE_STATUS.TIME_OUT.value:
    return (
      <div
        className={cx(classes.badge, classes.errorBackground)}
      />
    );
  case BADGE_STATUS.ERROR_MANUEL.value:
    return (
      <div
        className={cx(classes.badge, classes.errorBackground)}
      >KO</div>
    );
  case BADGE_STATUS.IN_PROGRESS.value:
    return (
      <div
        className={cx(classes.badge, classes.inProgressBackground)}>
        {(value !== -1) ? value > MAX_COUNT_NOTIFY ? '+99' : value : ''}
      </div>
    );
  case BADGE_STATUS.ERROR.value:
    return (
      <div className={cx(classes.badge)}>
        <FontIcon name="icon-alert" className={classes.badgeAlert}/>
      </div>
    );
  default:
    return <div className={classes.emptyDiv} />;
  }
}

BadgeStatus.propTypes = {
  status: PropTypes.string.isRequired,
  value: PropTypes.number
};

BadgeStatus.defaultProps = {
  value: -1
};

export default BadgeStatus;


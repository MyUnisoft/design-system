import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import styles from '../numberCell.module.scss';

const ViewNumberCell = ({ data }) => (
  <div className={cx(styles.numberCell)}>
    {data?.toString()}
  </div>
);

ViewNumberCell.propTypes = {
  data: PropTypes.object
};

ViewNumberCell.defaultProps = {
  data: {}
};

export default ViewNumberCell;

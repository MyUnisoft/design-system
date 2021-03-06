import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import styles from '../stringCell.module.scss';

const ViewStringCell = ({ data }) => (
  <div className={cx(styles.stringCell)}>
    {data?.toString()}
  </div>
);

ViewStringCell.propTypes = {
  data: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ])
};

ViewStringCell.defaultProps = {
  data: ''
};

export default ViewStringCell;

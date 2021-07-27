import React from 'react';
import PropTypes from 'prop-types';

import { FontIcon } from '../../../../../Icon';
import useStyles from './styles';

const HeaderSortable = ({
  children,
  column,
  order,
  onOrderChange
}) => {

  const styles = useStyles({ key: column.key, order });
  return (
    <button
      onClick={() => onOrderChange(column.key)}
      className={styles.button}
    >
      {children}
      <FontIcon
        name="icon-tri"
        size={24}
        color="inherit"
      />
    </button>
  );
};

HeaderSortable.propTypes = {
  children: PropTypes.node.isRequired,
  column: PropTypes.object.isRequired,
  order: PropTypes.string.isRequired,
  onOrderChange: PropTypes.func.isRequired
};

export default HeaderSortable;
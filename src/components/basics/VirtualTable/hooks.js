import { useState } from 'react';
import { SORTABLE_DIRECTIONS } from './utils';

const useSortable = () => {
  const [order, setOrder] = useState('');
  const [orderDirection, setOrderDirection] = useState();

  const onOrderChange = (key) => {
    if (key === order) {
      setOrderDirection(state => state === SORTABLE_DIRECTIONS.ASC ? SORTABLE_DIRECTIONS.DESC : SORTABLE_DIRECTIONS.ASC);
    } else {
      setOrder(key);
      setOrderDirection(SORTABLE_DIRECTIONS.ASC);
    }
  };

  return {
    order,
    orderDirection,
    onOrderChange
  };
};

export {
  useSortable
};
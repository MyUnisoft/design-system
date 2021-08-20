import { useState } from 'react';
import { ROW_TYPE, SORTABLE_DIRECTIONS } from './utils';

const useSortable = () => {
  const [order, setOrder] = useState('');
  const [orderDirection, setOrderDirection] = useState();

  const onOrderChange = (key) => {
    if (key === order) {
      setOrderDirection((state) =>
        state === SORTABLE_DIRECTIONS.ASC
          ? SORTABLE_DIRECTIONS.DESC
          : SORTABLE_DIRECTIONS.ASC
      );
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

const useDataManager = (defaultData = []) => {
  const [data, setData] = useState(defaultData);

  const onAdd = (rows, index) => {
    const tmpData = [...data];
    tmpData.splice(
      index,
      0,
      ...rows.map((r) => ({ ...r, rowType: ROW_TYPE.VIEW }))
    );
    setData(tmpData);
  };

  return {
    data,
    setData,
    onAdd
  };
};

export { useSortable, useDataManager };

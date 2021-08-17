import React, { memo, useContext } from 'react';
import PropTypes from 'prop-types';
import VirtualTableContext from '../../../context';

const AutocompleteView = memo(function AutocompleteView({ data, columnIndex }) {
  const { config } = useContext(VirtualTableContext);
  const { columns = [] } = config;
  const { optionList = [] } = columns[columnIndex];

  const _options = typeof optionList === 'function'
    ? optionList()
    : optionList;

  const currentOption = _options.find(({ value }) => value === data);
  
  return (
    <div>{currentOption?.label}</div>
  );
});

AutocompleteView.propTypes = {
  data: PropTypes.string.isRequired,
  columnIndex: PropTypes.number.isRequired
};

export default AutocompleteView;

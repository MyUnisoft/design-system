import React, { useContext, useState } from 'react';
import PropTypes from "prop-types";
import _get from 'lodash/get';
import VirtualTableContext from "../../context";
import { Menu, MenuItem } from "@material-ui/core";

const StatusCell = ({ data, dataKey, columnIndex }) => {


  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const {
    send,
    config
  } = useContext(VirtualTableContext);
  const {
    selectableRowKey = 'id',
    columns = []
  } = config;
  const keyId = data[selectableRowKey];

  const { listStatus } = columns[columnIndex];
  const selectedStatus = listStatus.find(status => status.status === _get(data, dataKey));

  const changeInput = (valueInput) => {
    send('input', {
      key: dataKey,
      selectableRowKey,
      keyId,
      data: valueInput
    });
  };
  const handleChangeValue = (newValue) => {
    changeInput(newValue);
    handleClose();
  };
  const listOptions = listStatus.filter(status => status.showMenu?.includes(_get(data, dataKey)));

  return <>
    <div style={selectedStatus?.styles} onClick={handleClick}>{selectedStatus?.value}</div>
    {listOptions.length > 0 && <Menu
      id="simple-menu"
      anchorEl={anchorEl}
      keepMounted
      open={Boolean(anchorEl)}
      onClose={handleClose}
    >
      {listOptions.map(
        (status, i) => (<MenuItem key={i} onClick={() => handleChangeValue(status.status)}>{status.value}</MenuItem>)
      )}
    </Menu>
    }
  </>;


};

StatusCell.propTypes = {
  data: PropTypes.object.isRequired,
  columnIndex: PropTypes.number.isRequired,
  dataKey: PropTypes.string.isRequired
};

export default StatusCell;

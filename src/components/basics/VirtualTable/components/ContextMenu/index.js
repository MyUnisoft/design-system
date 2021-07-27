import React, { useState, useMemo, memo } from 'react';

import PropTypes from 'prop-types';
import { Menu, MenuItem } from '@material-ui/core';
import useStyles from './styles';

function ContextMenu({ children, listAction, canClick, data }) {

  if (!canClick) {
    return children;
  }

  const classes = useStyles();

  const [anchorEl, setAnchorEl] = useState(null);

  const _listRender = useMemo(() => listAction.map(
    ({ label, action }, i) => (<MenuItem key={i} onClick={_handleAction.bind(null, action)}>{label}</MenuItem>)
  ), [listAction]);

  function _handleClick(event) {
    event.preventDefault();
    setAnchorEl(event.currentTarget);
  }

  function _handleClose(event) {
    event.preventDefault();
    setAnchorEl(null);
  }

  function _handleAction(action) {
    if(data) {
      action(data);
    } else {
      action();
    }
    setAnchorEl(null);
  }

  return (
    <div className={classes.contextMenuCell}>
      <span onContextMenu={_handleClick}> 
        {children}
      </span>
      <Menu
        id="context-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={_handleClose}
        onContextMenu={_handleClose}
      >
        {_listRender}
      </Menu>
    </div>
  );
}

ContextMenu.propTypes = {
  children: PropTypes.node.isRequired,
  listAction: PropTypes.array.isRequired,
  canClick: PropTypes.bool.isRequired,
  data: PropTypes.object
};

ContextMenu.defaultProps = {
  data: null
};

export default memo(ContextMenu);


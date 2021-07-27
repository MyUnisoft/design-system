import React from 'react';
import { FontIcon } from '../../Icon';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';

const ITEM_HEIGHT = 48;

const DropdownBtn = (props) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  const {
    children, options, classes, onClick
  } = props;
  return (
    <React.Fragment>
      { React.cloneElement(children, { onClick: handleClick }) }
      <Menu
        id="long-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5
          }
        }}
      >
        {options.map((option, index) => (option.options
          ? (
            <DropdownBtn {...props} options={option.options} key={`${option.label}-${index}`}>
              <MenuItem
                key={option.value}
                onClick={() => { onClick(option.value); handleClose(); }}
                classes={{ root: classes.menuItem }}
              >
                {option.label}
              </MenuItem>
            </DropdownBtn>
          )
          : (
            <MenuItem
              key={option.value}
              onClick={() => {
                onClick(option.value);
                handleClose();
              }}
              classes={{ root: classes.menuItem }}
            >
              {option.label}
            </MenuItem>
          )
        ))}
      </Menu>
    </React.Fragment>
  );
};

DropdownBtn.defaultProps = {
  children: () => (<FontIcon name="icon-options" color="#464545" />)
};

DropdownBtn.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.shape()).isRequired
};

const materialStyles = () => ({
  menuItem: {
    'padding-top': '6px',
    'padding-bottom': '6px',
    'font-size': '13px'
  }
});

export default withStyles(materialStyles)(DropdownBtn);

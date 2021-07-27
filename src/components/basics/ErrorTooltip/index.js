import React from 'react';
import Tooltip from '@material-ui/core/Tooltip';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';

const ErrorTooltip = ({ children, title, classes }) => (
  <Tooltip
    title={title}
    placement="top"
    arrow
    classes={{
      tooltip: (title !== '') ? classes.tooltip : classes.tooltipDisplayNone,
      arrow: classes.arrow
    }}
  >
    {children}
  </Tooltip>
);

const styles = () => ({
  tooltip: {
    backgroundColor: '#dd0000',
    color: 'white',
    padding: 6,
    borderRadius: 5,
    border: 'none'
  },
  arrow: {
    color: '#dd0000'
  },
  tooltipDisplayNone: {
    display: 'none'
  }
});

ErrorTooltip.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired
};

export default withStyles(styles)(ErrorTooltip);

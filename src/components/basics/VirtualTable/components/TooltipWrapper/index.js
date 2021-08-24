/* eslint-disable react/prop-types */
import React from 'react';

import Tooltip from '@material-ui/core/Tooltip';
import DOMPurify from 'dompurify';
import PropTypes from 'prop-types';

import useStyles from './styles';

const TooltipWrapper = (
  titleInfoBulle = '',
  { htmlContent = false, ...tooltipProps } = {}
) => {
  const styles = useStyles();
  return function TooltipWrapper({ children }) {
    return (
      <Tooltip
        title={
          htmlContent ? (
            <div
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(titleInfoBulle)
              }}
            />
          ) : (
            titleInfoBulle
          )
        }
        placement="left-end"
        classes={{ tooltip: styles.tooltip }}
        {...tooltipProps}
      >
        {/* Tooltip won't display without div on cell. */}
        <div>{children}</div>
      </Tooltip>
    );
  };
};

TooltipWrapper.propTypes = {
  children: PropTypes.node.isRequired
};

export default TooltipWrapper;

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Button as MaterialButton } from '@material-ui/core';

import styles from './Button.module.scss';

// Component
const Button = props => {
  const { className, color, disabled, variant, buttonRef, ...others } = props;
  return (
    <>
      <MaterialButton
        {...others}
        focusRipple
        disableRipple={false}
        buttonRef={buttonRef}
        className={classNames(className, styles[variant], {
          [styles.error]: !disabled && color === 'error'
        })}
        color={color === 'error' ? undefined : color}
        variant={variant}
        disabled={disabled}
      />
    </>
  );
};

// Props
Button.propTypes = {
  color: PropTypes.oneOf([
    'primary',
    'secondary',
    'error',
    'default',
    'inherit'
  ]),
  disabled: PropTypes.bool,
  className: PropTypes.string,
  variant: PropTypes.oneOf(['text', 'outlined', 'contained']),
  buttonRef: PropTypes.object
};

Button.defaultProps = {
  className: '',
  color: 'default',
  disabled: false,
  variant: 'text',
  buttonRef: undefined
};

export default memo(Button);

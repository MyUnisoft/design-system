import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import useStyles from './styles';

const Checkbox = ({ id, name, checked, disabled, onChange, variant }) => {
  const classes = useStyles();
  return (
    <div className={classes.checkbox}>
      <label htmlFor={id} className={classes.container}>
        <input
          type="checkbox"
          id={id}
          name={name}
          checked={checked}
          disabled={disabled}
          onChange={onChange}
        />
        <span className={cx(classes.checkmark, (variant === 'error' ? 'checkmarkError' : 'checkmarkPrimary'))} />
      </label>
    </div>
  );
};

Checkbox.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  onChange: PropTypes.func
};

Checkbox.defaultProps = {
  checked: false,
  disabled: false,
  onChange: () => {}
};

export default Checkbox;
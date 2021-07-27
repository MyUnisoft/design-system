import React from 'react';
import I18n from '../../../../../assets/I18n';
import PropTypes from 'prop-types';
import {
  FormGroup,
  withStyles,
  FormLabel,
  FormControl,
  FormControlLabel,
  Checkbox
} from '@material-ui/core';

const attachToOptions = [
  'attachToNotes',
  'attachToInternalNotes',
  'attachToAccount',
  'attachToOther',
  'attachToDiligence',
  'attachToConfirmationLetter'
];

const FormControlLabelElement = (props) => {
  const {
    // eslint-disable-next-line react/prop-types
    name, checked, handleChange, className
  } = props;

  return (
    <FormControlLabel
      control={(
        <Checkbox
          checked={!!checked}
          onChange={handleChange(name)}
          value={name}
          disabled={name !== 'attachToNotes'}
          color="primary"
        />
      )}
      label={I18n.t(`commentBox.${name}`)}
      className={className}
    />
  );
};

const AttachTo = (({ onChange, classes, state }) => {
  const handleChange = name => (event) => {
    onChange(name, event.target.checked);
  };

  return (
    <FormControl component="fieldset">
      <FormLabel
        component="legend"
        className={classes.labelRoot}
        focused={false}
      >
        {I18n.t('commentBox.attachToTitle')}
      </FormLabel>
      <FormGroup row>
        {attachToOptions.map(name => (
          <FormControlLabelElement
            className={classes.formControlLabel}
            checked={state[name]}
            name={name}
            handleChange={handleChange}
            key={name}
          />
        ))}
      </FormGroup>
    </FormControl>
  );
});

AttachTo.propTypes = {
  onChange: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
  /*
  state: PropTypes.shape({
    attachToNotes: PropTypes.bool,
    attachToInternalNotes: PropTypes.bool,
    attachToAccount: PropTypes.bool,
    attachToOther: PropTypes.bool,
    attachToDiligence: PropTypes.bool,
    attachToConfirmationLetter: PropTypes.bool
  }).isRequired
  */
  state: PropTypes.object.isRequired
};

const styles = () => ({
  labelRoot: {
    color: '#000',
    marginBottom: 10
  },
  formControlLabel: {
    marginBottom: 5
  }
});

export default withStyles(styles)(AttachTo);

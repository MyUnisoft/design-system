import React, {
  useState, useEffect, useCallback, useRef
} from 'react';
import PropTypes from 'prop-types';
import {
  InputLabel,
  FormControl,
  Select,
  MenuItem,
  withStyles
} from '@material-ui/core';
import I18n from '../../../../../../assets/I18n';
import { getTemplateComments } from '../../../../../../redux/comments';


const PreformattedCommentSelector = ({ onChange, classes, isVisible }) => {
  const [value, setValue] = useState('');
  const [templatesState, setTemplates] = useState([]);
  const _isMounted = useRef(true);

  const handleChange = (event) => {
    setValue(event.target.value);
    onChange(event.target.value);
  };

  const getTemplates = useCallback(async () => {
    // TODO: Using mock that is actually failing, is this used somewhere?
    const templates = await getTemplateComments();
    if (_isMounted.current) {
      setTemplates(templates);
    }
  });

  useEffect(() => {
    getTemplates();

    return () => {
      _isMounted.current = false;
    };
  }, []);

  if (!isVisible) {
    return null;
  }

  return (
    <FormControl classes={{ root: classes.formControlRoot }}>
      <InputLabel htmlFor="template">{I18n.t('commentBox.templateCommentLabel')}</InputLabel>
      <Select
        value={value}
        onChange={handleChange}
        inputProps={{
          name: 'addTemplateComment',
          id: 'template'
        }}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        {templatesState.map(({ value, label }, i) => (
          <MenuItem value={value} key={i}>
            {label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

PreformattedCommentSelector.propTypes = {
  onChange: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
  isVisible: PropTypes.bool.isRequired
};

const theme = () => ({
  formControlRoot: {
    width: '100%'
  }
});

export default withStyles(theme)(PreformattedCommentSelector);

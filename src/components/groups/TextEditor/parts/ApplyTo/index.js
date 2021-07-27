// FIXME: Not used currently, but might be in TextEditor options
// Ask @Jandix or @Regis

import React from 'react';
import PropTypes from 'prop-types';
import I18n from '../../../../../assets/I18n';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { Field } from 'redux-form';
import { ReduxRadio } from '../../../../reduxForm/Selections';

import styles from './ApplyTo.module.scss';

const ApplyTo = React.memo(({ onChange }) => (
  <div className={styles.container}>
    <span>{I18n.t('commentBox.applyToTitle')}</span>
    <Field
      name="applyTo"
      color="primary"
      onCustomChange={onChange}
      component={ReduxRadio}
      list={[
        {
          id: 0,
          label: I18n.t('commentBox.applyTo.all'),
          value: 'all'
        },
        {
          id: 1,
          label: I18n.t('commentBox.applyTo.line'),
          value: 'line'
        }
      ]}
      row
    />
  </div>
));

ApplyTo.propTypes = {
  onChange: PropTypes.func.isRequired
};

export default ApplyTo;

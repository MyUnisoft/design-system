import React from 'react';
import PropTypes from 'prop-types';
import I18n from '../../../../../assets/I18n';
import { InlineButton } from '../../../../basics/Buttons';

import styles from './CommentBoxButtons.module.scss';

const CommentBoxButtons = React.memo(({ onCancel, onSubmit, disabled }) => {
  const buttons = [
    {
      _type: 'string',
      color: 'default',
      variant: 'outlined',
      text: I18n.t('commentBox.buttons.cancel'),
      onClick: onCancel
    },
    {
      _type: 'string',
      color: 'primary',
      text: I18n.t('commentBox.buttons.submit'),
      onClick: onSubmit,
      disabled
    }
  ];

  return (
    <div className={styles.container}>
      <InlineButton buttons={buttons} />
    </div>
  );
});

CommentBoxButtons.defaultProps = {
  disabled: false
};

CommentBoxButtons.propTypes = {
  onCancel: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  disabled: PropTypes.bool
};

export default CommentBoxButtons;

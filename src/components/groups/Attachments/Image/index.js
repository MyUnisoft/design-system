import React, { useState } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import I18n from '../../../../assets/I18n';

import FontIcon from '../../../basics/Icon/Font';
import Loader from '../../../basics/Loader';

import styles from './Image.module.scss';

// Component
const Image = (props) => {
  const {
    className,
    src, alt, hidden,
    onClick,
    onUnload
  } = props;

  // State
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  // Handlers
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      if (onClick) onClick();
    }
  };

  // Rendering
  return (
    <div
      className={classNames(styles.container, className, {
        [styles.loading]: loading, [styles.error]: error
      })}

      role="button"
      tabIndex={0}
      onClick={onClick}
      onKeyPress={handleKeyPress}
    >
      { (!hidden || !loading) && (
        <img
          src={src}
          alt={alt}
          onUnload={onUnload}
          onLoad={() => setLoading(false)}
          onError={() => {
            setLoading(false);
            setError(true);
          }}
        />
      )}
      { (!hidden && loading) && (
        <Loader className={styles.loader} size={20} />
      ) }
      { error && (
        <div className={styles.errorMessage}>
          <FontIcon name="icon-close1" className={styles.icon} size={20} />
          <span className={styles.label}>{ I18n.t('attachments.error') }</span>
        </div>
      ) }
    </div>
  );
};

// Props
Image.propTypes = {
  className: PropTypes.string,
  src: PropTypes.string.isRequired,
  hidden: PropTypes.bool,
  alt: PropTypes.string,
  onClick: PropTypes.func,
  onUnload: PropTypes.func.isRequired
};

Image.defaultProps = {
  className: undefined,
  hidden: false,
  alt: '',

  onClick: null

};

export default Image;

import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import { ClipLoader } from 'react-spinners';
import { useTheme } from '@material-ui/core/styles';
import styles from './loader.module.scss';

const Loader = ({
  className,
  sizeUnit, size, color,
  inline
}) => {
  const { palette: { primary } } = useTheme();
  return (
    <>
      {
        inline
          ? (
            <>
            &nbsp; &nbsp;
              <ClipLoader
                sizeUnit={sizeUnit}
                size={size}
                color={color || primary.main}
              />
            </>
          )
          : (
            <div className={classnames(styles.container, className)}>
              <ClipLoader
                sizeUnit={sizeUnit}
                size={size}
                color={color || primary.main}
              />
            </div>
          )
      }
    </>
  );
};

Loader.propTypes = {
  className: PropTypes.string,
  sizeUnit: PropTypes.string,
  size: PropTypes.number,
  color: PropTypes.string,
  inline: PropTypes.bool
};

Loader.defaultProps = {
  className: '',
  sizeUnit: 'px',
  size: 70,
  color: undefined,
  inline: false
};

export default Loader;

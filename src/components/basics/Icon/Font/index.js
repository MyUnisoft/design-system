import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { getColorByName } from '../../../../helpers/style';
import styles from './styles.module.scss';

const ownStyle = makeStyles(theme => ({
  infoBulle: {
    border: 'none',
    heigth: 15,
    width: 'auto',
    padding: '4px 10px',
    borderRadius: 2,
    fontWeight: 500,
    boxShadow: '1px 5px 7px 0 rgba(0, 0, 0, 0.08)',
    backgroundColor: '#ffffff',
    color: theme.palette.grey[800],
    fontFamily: 'basier_circlemedium'
  },
  label: {
    whiteSpace: 'pre-line'
  }
}));

const FontIcon = (props) => {
  const {
    name,
    size,
    color,
    titleInfoBulle,
    marginRight,
    className,
    iconChar,
    iconCharStyle,
    tooltipProps,
    ...otherProps
  } = props;

  const classes = ownStyle();
  const theme = useTheme();
  const formattedColor = useMemo(() => getColorByName(color, theme), [color, theme]);

  const renderTitle = (title) => {
    if(typeof title === 'string'){
      return title;
    }
    if(Array.isArray(title)){
      return (
        <div className={styles.multiTitleContainer}>
          {
            title.map((title, index) => <div key={`titleInfo_${title}_${index}`} className={styles.multiTitle}>{title}</div>)
          }
        </div>
      );
    }
  };

  if (titleInfoBulle) {
    return (
      <Tooltip
        title={(
          <Typography classes={{ root: classes.label }}>
            {renderTitle(titleInfoBulle)}
          </Typography>
        )}
        placement="left-end"
        disableFocusListener
        disableTouchListener
        classes={{ tooltip: classes.infoBulle }}
        {...tooltipProps}
      >
        <span
          className={classNames(name, className, styles.fontIcon)}
          style={{ fontSize: size, color: formattedColor }}
          {...otherProps}
        />
      </Tooltip>

    );
  }
  return (
    <span
      className={classNames(
        name,
        className,
        styles.fontIcon,
        iconChar && styles.dataIconChar,
        iconCharStyle
      )}
      style={{ fontSize: size, color: formattedColor, marginRight }}
      data-icon-char={iconChar}
      {...otherProps}
    />
  );
};


FontIcon.propTypes = {
  name: PropTypes.string,
  className: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  color: PropTypes.string,
  titleInfoBulle: PropTypes.string,
  marginRight: PropTypes.number,
  classes: PropTypes.object,
  iconChar: PropTypes.string,
  iconCharStyle: PropTypes.string,
  tooltipProps: PropTypes.object
};

FontIcon.defaultProps = {
  name: null,
  size: undefined,
  color: undefined,
  titleInfoBulle: '',
  classes: {},
  className: '',
  iconChar: null,
  iconCharStyle: null,
  marginRight: 0,
  tooltipProps: undefined
};

export default FontIcon;

import React, { Fragment, useState, useEffect, useRef } from 'react';
import { smallButtonNoPadding } from '../../../../assets/theme/styles';
import { withStyles, Badge } from '@material-ui/core';
import classNames from 'classnames';
import IconButton from '@material-ui/core/IconButton';
import PropTypes from 'prop-types';
import { FontIcon } from '../../Icon';
import Button from '../Button';
import Loader from '../../Loader';
import { DropdownBtn } from '../';
import _deburr from 'lodash/deburr';
import { ButtonProps } from '../types';

const WrapperIcon = props => {
  const {
    badgeContent, // eslint-disable-line
    badgeColor, // eslint-disable-line
    children // eslint-disable-line
  } = props;

  if (badgeContent) {
    return (
      <Badge badgeContent={badgeContent} color={badgeColor || 'primary'}>
        {children}
      </Badge>
    );
  }

  return <>{children}</>;
};

const InlineButton = props => {
  const { buttons, marginDirection, classes } = props;

  const [isLoading, setIsLoading] = useState({});
  const [disableAllOnLoad, setDisableAllOnLoad] = useState(false);
  const _isMounted = useRef(true);

  useEffect(
    () => () => {
      _isMounted.current = false;
    },
    []
  );

  const marginClassesMap = {
    left: classes.marginLeft,
    right: classes.marginRight,
    none: ''
  };

  const marginClassname = marginClassesMap[marginDirection];

  const onClick = async (e, button) => {
    if (button.onClick) {
      try {
        setIsLoading({ [button.text]: true });
        setDisableAllOnLoad(true);
        await button.onClick(e);
      } finally {
        if (_isMounted.current) {
          // Fix the bug memory leaks on an Unmounted Component
          setIsLoading({ [button.text]: false });
          setDisableAllOnLoad(false);
        }
      }
    }
  };

  return (
    buttons &&
    buttons.map((button, index) =>
      button ? (
        <Fragment
          key={
            button.text
              ? `${index}-${_deburr(button.text.replace(/ /g, '-'))}`
              : index
          }
        >
          {button._type === 'icon-link' && (
            <Button
              className={marginClassname}
              classes={{
                root: classNames(classes.noPadding, button.className)
              }}
              size={button.size || 'small'}
              variant={button.variant || 'contained'}
              color={
                button.color || (button.colorError && 'secondary') || 'primary'
              }
              onClick={e => onClick(e, button)}
              disabled={button.disabled || disableAllOnLoad}
            >
              <a href={button.href}>
                <FontIcon
                  titleInfoBulle={button.titleInfoBulle}
                  name={button.iconName}
                  size={button.iconSize || '40px'}
                  color={button.iconColor || 'white'}
                />
              </a>
            </Button>
          )}
          {button._type === 'icon' && (
            <Button
              className={marginClassname}
              classes={{
                root: classNames(classes.noPadding, button.className)
              }}
              size={button.size || 'small'}
              variant={button.variant || 'contained'}
              color={
                button.color || (button.colorError && 'secondary') || 'primary'
              }
              onClick={e => onClick(e, button)}
              disabled={button.disabled || disableAllOnLoad}
              type={button.type || 'button'}
            >
              <WrapperIcon {...button}>
                <FontIcon
                  titleInfoBulle={button.titleInfoBulle}
                  name={button.iconName}
                  size={button.iconSize || '40px'}
                  color={button.iconColor || 'white'}
                />
                {isLoading[button.text] && (
                  <>
                    &nbsp;
                    <Loader size={12} />
                  </>
                )}
              </WrapperIcon>
            </Button>
          )}
          {button._type === 'string' && (
            <Badge color={button.badgeColor} badgeContent={button.badgeContent}>
              <Button
                buttonRef={button.buttonRef}
                className={classNames(marginClassname, button.className)}
                size={button.size || 'small'}
                variant={button.variant || 'contained'}
                color={
                  button.color ||
                  (button.colorError && 'secondary') ||
                  'primary'
                }
                onClick={e => onClick(e, button)}
                disabled={button.disabled || disableAllOnLoad}
                style={button.style}
                id={button.id}
                type={button.type}
              >
                {button.text}
                {isLoading[button.text] && (
                  <>
                    &nbsp;
                    <Loader size={12} />
                  </>
                )}
              </Button>
            </Badge>
          )}
          {button._type === 'dropdown' && (
            <DropdownBtn
              className={marginClassname}
              size={button.size || 'small'}
              tabIndex='-1'
              variant={button.variant || 'contained'}
              color={
                button.color || (button.colorError && 'secondary') || 'primary'
              }
              onClick={e => onClick(e, button)}
              disabled={button.disabled || disableAllOnLoad}
              options={button.options || []}
            >
              <IconButton aria-label='More' aria-haspopup='true'>
                <FontIcon
                  titleInfoBulle={button.titleInfoBulle}
                  name={button.iconName}
                  size={button.iconSize || '40px'}
                  color={button.iconColor || 'white'}
                />
              </IconButton>
            </DropdownBtn>
          )}
          {button._type === 'component' && (
            <Badge color={button.badgeColor} badgeContent={button.badgeContent}>
              <Button
                className={classNames(marginClassname, button.className)}
                size={button.size || 'small'}
                variant={button.variant || 'contained'}
                color={
                  button.color ||
                  (button.colorError && 'secondary') ||
                  'primary'
                }
                onClick={e => onClick(e, button)}
                disabled={button.disabled || disableAllOnLoad}
                style={button.style}
                id={button.id}
              >
                {button.component}
                {isLoading[button.component] && (
                  <>
                    &nbsp;
                    <Loader size={12} />
                  </>
                )}
              </Button>
            </Badge>
          )}
        </Fragment>
      ) : null
    )
  );
};

InlineButton.defaultProps = {
  marginDirection: 'left'
};

InlineButton.propTypes = {
  buttons: PropTypes.arrayOf(ButtonProps).isRequired,
  marginDirection: PropTypes.oneOf(['left', 'right', 'none']),
  classes: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.object])
  )
};

const themeStyles = () => ({
  ...smallButtonNoPadding(),
  marginLeft: {
    marginLeft: '10px'
  },
  marginRight: {
    marginRight: '10px'
  },
  infoBulle: {
    border: 'none',
    height: 15,
    width: 'auto',
    padding: '4px 10px',
    borderRadius: 2,
    fontSize: 10,
    fontWeight: 500,
    boxShadow: '1px 5px 7px 0 rgba(0, 0, 0, 0.08)',
    backgroundColor: '#ffffff',
    color: '#464545',
    fontFamily: 'basier_circlemedium'
  }
});

export default withStyles(themeStyles)(InlineButton);

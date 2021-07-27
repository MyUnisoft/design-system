import PropTypes from 'prop-types';

export const ButtonProps = PropTypes.shape({
  _type: PropTypes.string.isRequired,
  iconName: PropTypes.string,
  className: PropTypes.string,
  text: PropTypes.string,
  onClick: PropTypes.func,
  color: PropTypes.string,
  iconSize: PropTypes.number,
  iconColor: PropTypes.string,
  disabled: PropTypes.bool,
  variant: PropTypes.string,
  titleInfoBulle: PropTypes.string
});

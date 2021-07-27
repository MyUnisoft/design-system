import React from 'react';
import PropTypes from 'prop-types';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { BlockPicker } from 'react-color';
import { COLOR_PICKER_ICON } from './utils';
import styles from './ColorPicker.module.scss';

class ColorPicker extends React.PureComponent {
  stopPropagation = (event) => {
    event.stopPropagation();
  };

  onChange = (color) => {
    const { onChange } = this.props;
    onChange('color', color.hex);
  }

  renderModal = () => {
    const { currentState: { color } } = this.props;
    return (
      <div
        onClick={this.stopPropagation}
        className={styles.colorPickerContainer}
      >
        <BlockPicker color={color} onChangeComplete={this.onChange} />
      </div>
    );
  };

  render() {
    const { expanded, onExpandEvent } = this.props;

    return (
      <div
        aria-haspopup="true"
        aria-expanded={expanded}
        aria-label="rdw-color-picker"
        className={styles.container}
      >
        <div
          onClick={onExpandEvent}
          role="button"
          tabIndex="0"
          className={styles.iconContainer}
        >
          <img
            className={styles.iconImg}
            src={COLOR_PICKER_ICON}
            alt="Color picker icon"
          />
        </div>
        {expanded && this.renderModal()}
      </div>
    );
  }
}

ColorPicker.defaultProps = {
  expanded: undefined
};

ColorPicker.propTypes = {
  expanded: PropTypes.bool,
  onExpandEvent: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  /*
  currentState: PropTypes.shape({
    color: PropTypes.string,
    bgColor: PropTypes.string
  }).isRequired,
  */
  currentState: PropTypes.object.isRequired
  /*
  config: PropTypes.shape({
    className: PropTypes.string,
    colors: PropTypes.arrayOf(PropTypes.string),
    component: PropTypes.element,
    icon: PropTypes.string,
    popupClassName: PropTypes.string,
    title: PropTypes.string
  })
  */
};

export default ColorPicker;

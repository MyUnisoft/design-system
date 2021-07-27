import { compose } from 'redux';
import { PureComponent } from 'react';
import PropTypes from 'prop-types';

import _ from 'lodash';

import { windowWrap, windowShape } from '../../../context/WindowContext';

// Component
class Window extends PureComponent {
  // Lifecycle
  componentWillMount() {
    const {
      open,
      window_id, path,
      onOpen,
      windowState: {
        ref: child,

        openedWindow
      }
    } = this.props;

    // Open if not opened
    if (child == null && open) {
      openedWindow(window.open(path, window_id, `width=${window.innerWidth},height=${window.innerHeight}`));
    }

    // Check if already opened
    if (child != null && !open) {
      onOpen();
    }

    // Messages
    window.addEventListener('message', this.onMessage, false);
    this.sendMessage();
  }

  componentDidUpdate(prevProps) {
    const {
      open, focusing,
      window_id, path, message,
      onOpen, onLoaded, onFocusChanged, onClose,
      windowState: {
        ref: child,
        loading,
        focused,

        openedWindow, closeWindow
      }
    } = this.props;

    const {
      windowState: {
        ref: prevChild,
        loading: prevLoading,
        focused: prevFocused
      }
    } = prevProps;
    // Check if already opened
    if (child != null && !open) {
      onOpen();
    }

    // Continue window opening if it was closed before component initialization and user opened it one more time
    if(child?.closed) {
      openedWindow(window.open(path, window_id, `width=${window.innerWidth},height=${window.innerHeight}`));
    }

    // Ask to open the window
    if (open !== prevProps.open) {
      if (open) {
        // Open a new one
        if (child == null) {
          openedWindow(window.open(path, window_id, `width=${window.innerWidth},height=${window.innerHeight}`));
        }
      } else {
        // Close previous tab
        closeWindow();
      }
    }

    // on loaded
    if (loading !== prevLoading) {
      onLoaded();
    }

    // on focus changed
    if (focused !== prevFocused) {
      onFocusChanged();
    }

    // on close
    if (child == null && prevChild != null) {
      onClose();
    }

    // just loaded / new message => send last message
    if (loading !== prevLoading || !_.isEqual(message, prevProps.message)) {
      this.sendMessage();
    }

    // make the child ask for the focus
    if (child != null && focusing && !prevProps.focusing) {
      child.focus();
    }
  }

  componentWillUnmount() {
    window.removeEventListener('message', this.onMessage);
  }

  // Events
  onMessage = (e) => {
    const { data, origin } = e;
    const {
      window_id: id,
      onMessage
    } = this.props;

    // Refuse messages from another origin
    if (origin !== window.location.origin) return;

    // Parse message if is from child
    if (data.from === id && data.to === 'opener' && data.type === 'message') {
      onMessage(data.payload);
    }
  };

  // Methods
  sendMessage() {
    const { open, message } = this.props;

    if (open && message) {
      const { windowState: { sendMessage } } = this.props;

      sendMessage(message);
    }
  }

  // Rendering
  render() {
    return null;
  }
}

// Props
Window.propTypes = {
  path: PropTypes.string.isRequired, /** child's path */
  open: PropTypes.bool.isRequired, /** if the window should be opened or not */
  focusing: PropTypes.bool, /** make the child ask for the focus */
  message: PropTypes.object, /** message to send to the window */

  window_id: PropTypes.string.isRequired, /** child window's id */
  windowState: windowShape.isRequired, /** from the context */

  onOpen: PropTypes.func.isRequired, /** called when the child window is opened */
  onLoaded: PropTypes.func, /** called when the child window is fully loaded */
  onMessage: PropTypes.func, /** called when receiving a message from the window */
  onFocusChanged: PropTypes.func, /** called when child's focus state changed */
  onClose: PropTypes.func.isRequired /** called when the child window is closed */
};

Window.defaultProps = {
  focusing: false,
  message: undefined,

  onLoaded: () => {},
  onMessage: () => {},
  onFocusChanged: () => {}
};

// Enhance
const enhance = compose(
  windowWrap()
);

export default enhance(Window);

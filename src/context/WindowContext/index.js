import React, { useContext } from 'react';
import PropTypes from 'prop-types';

// Default values
const windowDefaults = {
  ref: null,
  loading: false,
  focused: false
};

// Context
const WindowContext = React.createContext({
  openedWindow: () => {},
  sendAction: () => {},
  sendMessage: () => {},
  closeWindow: () => {}
});

// Hook
const useWindowCtx = (id) => {
  const {
    [id]: windowState,

    openedWindow, sendAction, sendMessage, closeWindow
  } = useContext(WindowContext);

  return {
    ...windowDefaults,
    ...windowState,

    openedWindow: ref => openedWindow(id, ref),
    sendAction: action => sendAction(id, action),
    sendMessage: payload => sendMessage(id, payload),
    closeWindow: () => closeWindow(id)
  };
};

// HOC
const windowWrap = window_id => (WrappedComponent) => {
  // Component
  const wrapper = (props) => {
    const { window_id } = props;
    const windowState = useWindowCtx(window_id);

    return (
      <WrappedComponent {...props} windowState={windowState} />
    );
  };

  const wrappedName = WrappedComponent.displayName || WrappedComponent.name || 'Component';
  wrapper.displayName = `WindowWrap(${wrappedName})`;

  // Props
  wrapper.propTypes = {
    window_id: PropTypes.string
  };

  wrapper.defaultProps = { window_id };

  return wrapper;
};

// Shape
const windowShape = PropTypes.shape({
  ref: PropTypes.object, /** ref to the child window or null */
  loading: PropTypes.bool.isRequired, /** is the child window loading ? */
  focused: PropTypes.bool.isRequired, /** does the child have the focus ? */

  openedWindow: PropTypes.func.isRequired, /** call to register a new window */
  sendMessage: PropTypes.func.isRequired, /** call to send a message to the window */
  closeWindow: PropTypes.func.isRequired /** call to close the window */
});

export default WindowContext;
export {
  windowDefaults,
  useWindowCtx, windowWrap, windowShape
};

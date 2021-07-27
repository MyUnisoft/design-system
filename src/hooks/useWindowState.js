import { useDebugValue, useState } from "react";

export const useWindowState = (props = {}) => {
  const [win, setWin] = useState({ open: false, focusing: false });

  useDebugValue(props.open || win.open ? "Opened" : "Closed");

  return {
    open: (message, focus = false) =>
      setWin((old) => ({
        ...old,
        message,
        open: true,
        focusing: focus
      })),
    send: (message, focus = false) =>
      setWin((old) => ({
        ...old,
        message,
        focusing: focus
      })),
    focus: () => setWin((old) => ({ ...old, focusing: true })),
    close: () => setWin((old) => ({ ...old, open: false })),

    props: {
      ...props,
      open: props.open || win.open,
      focusing: win.focusing,
      message: win.message,

      onOpen: () => {
        if (props.open === undefined) {
          setWin((old) => ({ ...old, open: true }));
          if (props.onOpen) props.onOpen();
        } else {
          props.onOpen();
        }
      },
      onFocusChanged: () => {
        setWin((old) => ({ ...old, focusing: false }));
        if (props.onFocusChanged) props.onFocusChanged();
      },
      onClose: () => {
        if (props.open === undefined) {
          setWin((old) => ({ ...old, open: false, focusing: false }));
          if (props.onClose) props.onClose();
        } else {
          props.onClose();
        }
      }
    }
  };
};

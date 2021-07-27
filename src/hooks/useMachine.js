import { useCallback, useRef, useState } from 'react';
import { interpret } from 'robot3';


export function useMachine(machine, initialContext = {}) {
  // A new instance of the machine is created
  const ref = useRef(null);
  if (ref.current === null) {
    ref.current = interpret(
      machine,
      () => {
        // eslint-disable-next-line no-use-before-define
        setState(service.machine.current);
        // eslint-disable-next-line no-use-before-define
        setContext(service.context);
      },
      initialContext
    );
  }
  const service = ref.current;

  // We store the context & state of the machine in the react state.
  const [state, setState] = useState(service.machine.current);
  const [context, setContext] = useState(service.context);

  // Allows you to request a transition
  const send = useCallback(
    (type, params = {}) => {
      service.send({ type, ...params });
    },
    [service]
  );

  // Checks if a transition is possible from the current state
  const can = useCallback(
    (transitionName) => {
      // eslint-disable-next-line prefer-destructuring
      const transitions = service.machine.state.value.transitions;
      if (!transitions.has(transitionName)) {
        return false;
      }
      const transitionsForName = transitions.get(transitionName);
      // eslint-disable-next-line no-restricted-syntax
      for (const t of transitionsForName) {
        if ((t.guards && t.guards(service.context)) || !t.guards) {
          return true;
        }
      }
      return false;
    },
    [service.context, service.machine.state.value.transitions]
  );
  return [state, context, send, can];
}

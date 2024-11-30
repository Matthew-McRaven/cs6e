import { useEffect, useRef } from "react";

/* eslint-disable  @typescript-eslint/no-explicit-any */
type CustomEventHandler<T = any> = (event: CustomEvent<T>) => void;

interface UseCustomEventListenerOptions {
  target?: EventTarget;
  options?: boolean | AddEventListenerOptions;
}

/* eslint-disable  @typescript-eslint/no-explicit-any */
export const useCustomEventListener = <T = any>(
  eventType: string,
  handler: CustomEventHandler<T>,
  options: UseCustomEventListenerOptions = {}
) => {
  const savedHandler = useRef<CustomEventHandler<T>>();
  const { options: listenerOptions = false } = options;

  const isBrowser = typeof window !== "undefined";
  const target = options.target || (isBrowser ? window : null);

  useEffect(() => {
    if (!(target && target.addEventListener)) {
      return;
    }

    savedHandler.current = handler;

    const eventListener = (event: Event) => {
      if (savedHandler.current && event instanceof CustomEvent) {
        savedHandler.current(event as CustomEvent<T>);
      }
    };

    target.addEventListener(eventType, eventListener, listenerOptions);

    return () => {
      target.removeEventListener(eventType, eventListener, listenerOptions);
    };
    /* eslint-disable  react-hooks/exhaustive-deps */
  }, [eventType, target, listenerOptions]);
};

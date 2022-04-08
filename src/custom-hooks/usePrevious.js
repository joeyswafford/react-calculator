import { useEffect, useRef } from "react";

function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value; // Assigns the value of the ref to the argument.
  }, [value]); // Whenever the value of "value" changes then this code will run.
  return ref.current; // Ultimately, return the current ref value.
}

export default usePrevious;

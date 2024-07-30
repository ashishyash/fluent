import { useState, useEffect } from "react";
const useDebounce = (callback, delay) => {
    const [timer, setTimer] = useState(null);
  
    useEffect(() => {
      if (timer) {
        clearTimeout(timer);
      }
      setTimer(setTimeout(callback, delay));
    }, [callback, delay, timer]);
  
    return () => clearTimeout(timer);
  };

  export default useDebounce;
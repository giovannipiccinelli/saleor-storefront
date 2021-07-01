import React, { useRef, useEffect } from "react";
import LoadingBar from "react-top-loading-bar";

const LoadingBarLine: React.FC = () => {
  const ref = useRef(null);

  useEffect(() => {
    ref.current.complete();
  }, []);
  return <LoadingBar color="#0D233F" ref={ref} loaderSpeed={500} />;
};

export default LoadingBarLine;

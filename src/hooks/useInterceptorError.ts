import { useState } from "react";

export const useInterceptorError = () => {
  const [err, setError] = useState("");

  function interceptorError(err: string) {
    setError(err);
  }

  return { err,  interceptorError };
}
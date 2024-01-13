import { useEffect, useState } from "react";

let useCustomHook = (url) => {
  let [user, setUser] = useState(null);
  let [status, setStatus] = useState(true);
  let [error, setError] = useState(false);

  useEffect(() => {
    let fetchDataFun = async () => {
      try {
        let result = await fetch(url);
        if (!result.ok) {
          setError(true);
          setStatus(false);
          return;
        }
        let data = await result.json();
        setUser(data);
      } catch (error) {
        setError(true);
        console.log(error);
      }
      setStatus(false);
    };
    fetchDataFun();
  }, []);
  return [user, status, error];
};

export default useCustomHook;

import { useEffect, useState } from "react";

let useCustomHook = (url) => {
  let [data, setUser] = useState(null);
  let [loading, setLoading] = useState(true);
  let [error, setError] = useState(false);

  useEffect(() => {
    let fetchData = async () => {
      try {
        let result = await fetch(url);
        if (!result.ok) {
          setError(true);
          setLoading(false);
          return;
        }
        let data = await result.json();
        setUser(data);
      } catch (error) {
        setError(true);
        console.log(error);
      }
      setLoading(false);
    };
    fetchData();
  }, []);
  return [data, loading, error];
};

export default useCustomHook;

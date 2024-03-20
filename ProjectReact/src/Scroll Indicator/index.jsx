import { useEffect, useState } from "react";
import "./style.css";
const ScrollIndicator = () => {
  let [data, setData] = useState(null);
  let [loading, setLoading] = useState(false);
  let [scrollPerc, setScrollPerc] = useState(0);
  useEffect(() => {
    let fetchData = async () => {
      setLoading(true);
      let result = await fetch("https://dummyjson.com/products?limit=100");
      let resultData = await result.json();
      if (resultData && resultData.products.length && resultData.products) {
        setData(resultData.products);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      let scrolled = document.documentElement.scrollTop;
      let maxHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      let percentage = (scrolled / maxHeight) * 100;
      setScrollPerc(percentage);
    });
  });
  if (loading) return <h1>Loading...</h1>;
  return (
    <div>
      <div className="container">
        <div className="scrollbar" style={{ width: `${scrollPerc}%` }}></div>
      </div>
      {data && data.length
        ? data.map((value, index) => {
            return <h5 key={index}>{value.title}</h5>;
          })
        : null}
    </div>
  );
};
export default ScrollIndicator;

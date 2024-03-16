import { useEffect, useState } from "react";

const LoadMore = () => {
  let [loading, setLoading] = useState(true);
  let [products, setProducts] = useState([]);
  let [count, setCount] = useState(0);
  let [disable, setDisable] = useState(false);

  useEffect(() => {
    let loadFunction = async () => {
      try {
        setLoading(true);
        let response = await fetch(
          `https://dummyjson.com/products?limit=20&skip=${
            count ? 0 : count * 20
          }`
        );
        let data = await response.json();

        if (data && data.products && data.products.length) {
          setProducts(data.products);
          setLoading(false);
        }
      } catch (e) {
        console.log(e);
        setLoading(false);
      }
    };
    loadFunction();
  }, [count]);

  if (loading) return <h1>Loading...</h1>;
  return (
    <div>
      {products && products.length
        ? products.map((product) => (
            <div>
              <img src={product.thumbnail} alt={product.title} />
              <h4>{product.title}</h4>
            </div>
          ))
        : null}
    </div>
  );
};
export default LoadMore;

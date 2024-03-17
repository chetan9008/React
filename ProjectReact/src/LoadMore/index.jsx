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
            count === 0 ? 0 : count * 20
          }`
        );
        let data = await response.json();

        if (data && data.products && data.products.length) {
          if (count === 0) {
            setProducts(data.products);
            setLoading(false);
            return;
          }
          setProducts((previous) => [...previous, ...data.products]);
          setLoading(false);
        }
      } catch (e) {
        console.log(e);
        setLoading(false);
      }
    };
    loadFunction();
  }, [count]);

  useEffect(() => {
    if (products.length === 100) setDisable(true);
    console.log(products);
  }, [products]);

  if (loading) return <h1>Loading...</h1>;
  return (
    <div>
      {products && products.length
        ? products.map((product, index) => (
            <div key={index}>
              <img src={product.thumbnail} alt={product.title} />
              <h4>{product.title}</h4>
              <p>{product.id}</p>
            </div>
          ))
        : null}
      <button disabled={disable} onClick={() => setCount(count + 1)}>
        Load more
      </button>
      {disable && <p>You reach your limit</p>}
    </div>
  );
};
export default LoadMore;

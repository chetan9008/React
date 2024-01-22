import { useState, useTransition } from "react";
import { lazy, Suspense } from "react";

let SlowComponent = lazy(() =>
  import("../../Chapter-4(AdvanceReact)/Suspence API/SlowComponent")
);

const LatestReact = () => {
  const [text, setText] = useState("");
  const [items, setItems] = useState([]);
  let [status, setStatus] = useState(false);
  let [isPending, startTrantition] = useTransition();
  const handleChange = (e) => {
    setText(e.target.value);

    // slow down CPU
    startTrantition(() => {
      const newItems = Array.from({ length: 5000 }, (_, index) => {
        return (
          <div key={index}>
            <img src="/vite.svg" alt="" />
          </div>
        );
      });
      setItems(newItems);
    });
  };
  return (
    <section>
      <form className="form">
        <input
          type="text"
          className="form-input"
          value={text}
          onChange={handleChange}
        />
      </form>
      <h4>Items Below</h4>
      {isPending ? (
        <h2>Loading...</h2>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            marginTop: "2rem",
          }}
        >
          {items}
        </div>
      )}
      <button onClick={() => setStatus(!status)}>Toggle</button>
      <br></br>
      {status && (
        <Suspense fallback={<h4>Loading...</h4>}>
          <SlowComponent />
        </Suspense>
      )}
    </section>
  );
};
export default LatestReact;

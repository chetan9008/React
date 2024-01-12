import useToggle from "./useToggle";

const Component = () => {
  let [state, setState] = useToggle(false);
  return (
    <div>
      <h1>custom Hook</h1>
      <button onClick={setState}>Toggle</button>
      {state && <h1>Show me</h1>}
    </div>
  );
};
export default Component;

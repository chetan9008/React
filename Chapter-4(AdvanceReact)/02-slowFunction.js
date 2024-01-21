let value = 0;
let slowFunction = () => {
  for (let i = 0; i < 10000000; i++) value += i;
  return value;
};
export default slowFunction;

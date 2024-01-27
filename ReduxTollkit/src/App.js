import CartContainer from "./Components/CartContainer";
import Navbar from "./Components/Navbar";
import { useSelector,useDispatch } from "react-redux";
import { calculateTotals } from "./features/cart/cartSlice";
import { useEffect } from "react";
function App() {
  let { cartItems } = useSelector((state) => state.cart);
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems]);
  return (
    <main>
      <Navbar></Navbar>
      <CartContainer />
    </main>
  );
}
export default App;

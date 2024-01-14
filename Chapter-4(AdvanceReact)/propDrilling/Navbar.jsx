import Navlink from "./Navlink";
import { useState } from "react";
const Navbar = () => {
  let [user, setUser] = useState({
    name: "chetan",
  });
  let logout = () => {
    setUser(null);
  };
  return (
    <>
      <nav>
        <h1>Context API</h1>
        <Navlink user={user} logout={logout} />
      </nav>
    </>
  );
};
export default Navbar;

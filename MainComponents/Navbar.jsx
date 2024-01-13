import { useState } from "react";
import Navlink from "./Navlink";
let Navbar = () => {
  let [user, setUser] = useState({
    name: "chetan",
  });
  let logOut = () => {
    setUser(null);
  };

  return (
    <>
      <Navlink user={user} logOut={logOut} />
    </>
  );
};

export default Navbar;

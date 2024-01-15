import Navlink from "./Navlink";
import { useState, createContext, useContext } from "react";

const NavbarContext = createContext();

export const useAppContext = () => useContext(NavbarContext);
const Navbar = () => {
  let [user, setUser] = useState({
    name: "chetan",
  });
  let logout = () => {
    setUser(null);
  };
  return (
    <NavbarContext.Provider value={{ user, logout }}>
      <>
        <nav>
          <h1>Context API</h1>
          <Navlink />
        </nav>
      </>
    </NavbarContext.Provider>
  );
};

export default Navbar;

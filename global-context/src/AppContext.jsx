import { createContext, useContext, useState } from "react";

const GlobalContext = createContext();

export const useGlobalContext = ()=> useContext(GlobalContext);

const AppContext = ({ children }) => {
  let [name, setName] = useState({ name: "chetan" });
  return (
    <GlobalContext.Provider value={{ name, setName }}>
      {children}
    </GlobalContext.Provider>
  );
};
export default AppContext;

// CountContext.js
import { createContext, useContext, useState } from "react";

const CountContext = createContext();

export const useCount = () => useContext(CountContext);

export const CountProvider = ({ children }) => {
  const [count, setCount] = useState(1);

  const incrementCount = () => setCount((prevCount) => prevCount + 1);

  const decrementCount = () => setCount((prevCount) => (prevCount > 0 ? prevCount - 1 : prevCount));

  return (
    <CountContext.Provider value={{ count, incrementCount, decrementCount }}>
      {children}
    </CountContext.Provider>
  );
};

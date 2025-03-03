import { createContext } from "react";
import { useState } from "react";
export const BankContext = createContext();

export default function BankContextProvider({ children }) {
  const [bank, setBank] = useState("");

  const switchBank = (name) => {
    setBank(name);
  };

  return (
    <BankContext.Provider value={{ bank, switchBank }}>
      {children}
    </BankContext.Provider>
  );
}

import React from "react";
import { useContext } from "react";
import { BankContext } from "../context/BankContext";
const SwitchBank = () => {
  const { bank, switchBank } = useContext(BankContext);
  console.log(bank, "bank");
  return (
    <div className="flex mt-10 flex-col gap-4 justify-center items-center">
      <div>
        <button
          className="px-4 py-4 bg-red-500 text-white cursor-pointer"
          onClick={() => {
            switchBank("Bank of Hyderabad");
          }}
        >
          Bank of Hyderabad
        </button>
      </div>
      <div>
        <button className="px-4 py-4 bg-blue-900 text-white cursor-pointer">
          Bank of Chennai
        </button>
      </div>
    </div>
  );
};

export default SwitchBank;

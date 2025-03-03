import { useState, useEffect } from "react";
import { useContext } from "react";
import { BankContext } from "../context/BankContext";

const BankSelectionModal = () => {
  const [selectedBank, setSelectedBank] = useState("");
  const [isLoading, setIsloading] = useState(false);
  const { bank, switchBank } = useContext(BankContext);
  if (bank) {
    return;
  }
  const onContinue = () => {
    if (selectedBank) {
      setIsloading(true);
      setTimeout(() => {
        switchBank(selectedBank);
        setIsloading(false);
      }, 2000);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-300 bg-opacity-50 backdrop-blur-xl">
      {!isLoading ? (
        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-xl font-semibold mb-4">Select Your Bank</h2>
          <form onSubmit={onContinue} className="space-y-4">
            <div>
              <label className="block text-sm font-medium">Choose a Bank</label>
              <select
                onChange={(e) => {
                  setSelectedBank(e.target.value);
                }}
                required
                className="w-full mt-1 p-2 border rounded-md"
              >
                <option value="">Select a Bank</option>
                <option value="Bank Of Hyderabad">Bank of Hyderabad</option>
                <option value="Bank Of Chennai">Bank of Chennai</option>
              </select>
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white rounded-md"
              >
                Continue
              </button>
            </div>
          </form>
        </div>
      ) : (
        <div className="w-16 h-16 border-4 border-green-500 rounded-full animate-spin"></div>
      )}
    </div>
  );
};

export default BankSelectionModal;

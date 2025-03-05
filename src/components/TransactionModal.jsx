import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import axios from "axios";
import { useAuth } from "../context/AuthContext";
import { parseTransferData } from "../utils/parser";
import { useState } from "react";
export const TransactionModal = ({ isOpen, onClose }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [isloading, setIsloading] = useState(false);

  const navigate = useNavigate();
  const { user, onRefresh } = useAuth();

  const saveTranferDetails = async (data) => {
    const transferParsePayload = parseTransferData(data);
    const transferPayload = {
      ...transferParsePayload,
      fromAccountId: user.accountNumber,
    };
    console.log("payload", transferPayload);
    try {
      setIsloading(true);
      const response = await axios.post(
        "/api/transactions/transfer",
        transferPayload
      );
      console.log("response", response.data);
      if (response.status === 200) {
        setIsloading(false);
        alert("Transfer Successful");
        // navigate("/dashboard");
        onRefresh(user?.email);
        onClose();
      }
    } catch (error) {
      setIsloading(false);
      console.error("Transfer failed", error);
      alert("Transfer failed");
    }
  };

  return (
    <div className="fixed inset-0 w-full flex items-center justify-center z-50 bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-[40%]">
        <h2 className="text-xl text-center font-semibold mb-4">
          Transfer Money
        </h2>
        <form
          onSubmit={handleSubmit(saveTranferDetails)}
          className="space-y-4 max-w-[80%] mx-auto"
        >
          <div>
            <label className="block text-sm font-medium">Country Id</label>
            <input
              type="text"
              {...register("countryId", { required: true })}
              className="w-full mt-1 p-2 border rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Account Id</label>
            <input
              type="text"
              {...register("accountId", { required: true })}
              className="w-full mt-1 p-2 border rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Bank Id</label>
            <input
              type="text"
              {...register("bankId", { required: true })}
              className="w-full mt-1 p-2 border rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Amount</label>
            <input
              type="number"
              {...register("amount", { required: true })}
              className="w-full mt-1 p-2 border rounded-md"
            />
          </div>
          <div>
            <label className="font-semibold">From Currency </label>
            <select
              className="border p-2 rounded w-full mt-1"
              {...register("fromCurrency")}
            >
              <option>GPB</option>
              <option>EURO</option>
              <option>INR</option>
              <option>USD</option>
            </select>
          </div>

          <div>
            <label className="font-semibold">To Currency </label>
            <select
              className="border p-2 rounded w-full mt-1"
              {...register("toCurrency")}
            >
              <option>GPB</option>
              <option>EURO</option>
              <option>INR</option>
              <option>USD</option>
            </select>
          </div>

          <div className="flex justify-end gap-4 mt-10">
            <button
              type="button"
              className="px-4 py-2 border rounded-md"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isloading}
              className={`px-4 py-2 rounded-md ${
                isloading
                  ? "bg-gray-400 text-gray-700 cursor-not-allowed"
                  : "bg-blue-600 text-white"
              }`}
            >
              {isloading ? (
                <span className="inline-block w-5 h-5 border-4 border-t-4 border-t-transparent border-white rounded-full animate-spin" />
              ) : (
                "Transfer"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TransactionModal;

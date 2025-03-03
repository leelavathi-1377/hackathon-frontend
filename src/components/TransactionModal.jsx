import { useState } from "react";
import { useForm } from "react-hook-form";
export const TransactionModal = ({ isOpen, onClose }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();



  return (
    <div className="fixed inset-0 w-full flex items-center justify-center z-50 bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-[40%]">
        <h2 className="text-xl text-center font-semibold mb-4">Transfer Money</h2>
        <form onSubmit={handleSubmit} className="space-y-4 max-w-[80%] mx-auto">
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
          <div className="flex justify-end gap-4 mt-10">
            <button type="button" className="px-4 py-2 border rounded-md" onClick={onClose}>
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-md"
            >
              Transfer
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TransactionModal;

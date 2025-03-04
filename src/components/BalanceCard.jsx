import React, { use, useState } from "react";
import TransactionModal from "./TransactionModal";
import { useAuth } from "../context/AuthContext";
const BalanceCard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { user } = useAuth();
  console.log("user", user);
  // console.log(user.accountNumber, "LLLLLLLLLLLLLLLLLLLL")

  const onClose = () => {
    setIsModalOpen(false);
  };
  if (!user) {
    return;
  }
  return (
    <>
      <section className="mt-10 flex justify-center">
        <div className="w-[500px] shadow-lg rounded-xl  py-8 px-10 space-y-4 text-white">
          <h2 className="text-black text-center font-bold text-2xl">
            Account Details
          </h2>
          <div className="text-left ml-2">
            <p className="text-2xl text-gray-500">
              Account No:{" "}
              <span className="font-medium">
                {String(user?.accountNumber).slice(0, 5) + "*".repeat(6)}
              </span>
            </p>
            <p className="text-2xl  text-gray-500">
              Account Type: <span className="font-medium">Saving</span>
            </p>
          </div>

          <div className="text-center bg-white  text-[#11b67a]">
            <h1 className="text-xl font-bold">
              Current Balance{" "}
              <span className="text-3xl font-medium">{user?.balance}</span>
            </h1>
          </div>

          <div className="flex justify-between w-full gap-4">
            <button
              onClick={() => setIsModalOpen(true)}
              className="w-1/2 py-3 rounded-lg bg-[#0e8c5f] hover:bg-[#0b6a47] text-white font-medium transition"
            >
              Transfer
            </button>
            <button
              onClick={() => setIsModalOpen(true)}
              className="w-1/2 py-3 rounded-lg bg-[#0e8c5f] hover:bg-[#0b6a47] text-white font-medium transition"
              disabled={true}
            >
              Withdraw
            </button>
          </div>
        </div>
      </section>
      {isModalOpen && <TransactionModal onClose={onClose} />}
    </>
  );
};

export default BalanceCard;

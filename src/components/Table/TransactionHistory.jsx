import React from "react";
import transactions from "../mock/transactionhistory.json";
import axios from "axios";
import { Link } from "react-router";
import { useState, useEffect } from "react";
import { useAuth } from "../../context/AuthContext";
const TransactionTable = () => {
  const [transactions, setTransactions] = useState([]);
  const { user } = useAuth();
  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const response = await axios.get(
          "/api/transactions/getAllTransactions"
        );
        console.log("resp", response);
        if (response.status == 200) {
          setTransactions(response.data);
        }
      } catch (err) {
        console.error("error occurred fetching transactions", err.message);
      }
    };
    fetchTransactions();
  }, [user]);

  console.log(transactions);

  return (
    <section className="mt-10 w-[85%] mx-auto">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
        Transactions History
      </h2>
      <div className="overflow-x-auto shadow-lg rounded-lg">
        <table className="min-w-full bg-white border border-gray-200 rounded-md">
          <thead className="bg-[#11b67a] text-white">
            <tr>
              <th className="py-3 px-6 text-left">From Account</th>
              <th className="py-3 px-6 text-left">To Account</th>
              <th className="py-3 px-6 text-left">Transaction ID</th>
              <th className="py-3 px-6 text-left">Amount</th>
              <th className="py-3 px-6 text-left">Sender Acct Info</th>
              <th className="py-3 px-6 text-left">Receiver Acct Info</th>
              <th className="py-3 px-6 text-left">Stable Coin</th>
              <th className="py-3 px-6 text-left">Transaction Type</th>
            </tr>
          </thead>
          <tbody>
            {transactions && transactions.length > 0 ? (
              transactions.map((transaction, index) => (
                <tr
                  key={index}
                  className={`border-b ${index % 2 === 0 ? "bg-gray-50" : ""}`}
                >
                  <td className="py-4 px-6">{transaction.fromAccountId}</td>
                  <td className="py-4 px-6">{transaction.toAccountId}</td>
                  <Link
                    to={`./${transaction.transactionId}`}
                    className="block py-4 px-6 text-blue-600 hover:text-blue-800 hover:underline cursor-pointer transition duration-300"
                  >
                    <td className="py-4 px-6">{transaction.transactionId}</td>
                  </Link>
                  <td className="py-4 px-6 font-bold text-blue-600">
                    £{transaction.amount}
                  </td>
                  <td className="py-4 px-6 font-bold text-blue-400 text-sm">
                    <a href={transaction.blockChainSenderLink} target="_blank">
                      Sender Details
                    </a>
                  </td>
                  <td className="py-4 px-6 font-bold text-blue-400 text-sm">
                    <a
                      href={transaction.blockChainReceiverLink}
                      target="_blank"
                    >
                      Receiver Details
                    </a>
                  </td>
                  <td className="py-4 px-6 font-bold text-blue-400 text-sm">
                    <a
                      href={transaction.blockChaonStableCoinLink}
                      target="_blank"
                    >
                      Stable Coin Details
                    </a>
                  </td>
                  <td
                    className={`py-4 px-6 ${
                      transaction?.transactionType === "Credit"
                        ? "text-green-600"
                        : "text-red-600"
                    } font-medium`}
                  >
                    {transaction?.transactionType ?? "transfer"}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center py-6 text-gray-500">
                  No transactions found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default TransactionTable;

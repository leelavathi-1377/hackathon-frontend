import React from "react";

import { useAuth } from "../context/AuthContext";

const HomePage = () => {
  const { isAuthenticated } = useAuth();

  return (
    <div className="bg-gray-50 min-h-screen">
      <section className="text-center py-10">
        <h1 className="text-5xl font-bold mb-4">Welcome to LTC Bank</h1>
        <p className="text-lg mb-6">
          Your Trust, Our Commitment. Banking Made Simple!
        </p>
      </section>

      {/* Banking Features */}
      <section className="p-2">
        <h2 className="text-3xl font-bold text-center mb-6 text-[#11b67a]">
          What We Offer
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {["Online Banking", "24/7 Support", "Easy Loans"].map((feature) => (
            <div
              key={feature}
              className="bg-white shadow-lg rounded-lg p-6 text-center"
            >
              <h3 className="text-xl font-semibold mb-3">{feature}</h3>
              <p className="text-gray-600">
                Experience seamless banking anytime, anywhere!
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Quick Services */}
      {isAuthenticated && (
        <section className="bg-blue-100 p-10 text-center">
          <h2 className="text-3xl font-bold mb-4">Quick Services</h2>
          <div className="flex flex-wrap justify-center gap-6">
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              Check Balance
            </button>
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              Apply for Loan
            </button>
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              Transfer Money
            </button>
          </div>
        </section>
      )}

      {/* Contact Us */}
      <section className="p-10 text-center">
        <h2 className="text-3xl font-bold text-[#11b67a] mb-6">Need Help?</h2>
        {/* <button className="bg-[#11b67a] hover:bg-[#0e8c5f] text-white px-6 py-2 rounded flex items-center justify-center gap-2">
          Contact Us <PhoneCall size={20} />
        </button> */}
      </section>
    </div>
  );
};

export default HomePage;

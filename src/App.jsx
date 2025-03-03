import { useState } from "react";
import HeaderMenu from "./components/HeaderMenu";
import LoginForm from "./components/LoginForm";
import RegistrationForm from "./components/RegistrationForm";
import { Routes, Route } from "react-router";
import SwitchBank from "./components/switchBank";
import BalanceCard from "./components/BalanceCard";
import { useContext } from "react";
import { BankContext } from "./context/BankContext";
import BankSelectionModal from "./components/BankSelectionModal";

import TransactionModal from "./components/TransactionModal";
import Dashboard from "./components/Dashboard";
import HomePage from "./components/HomePage";

function App() {

  
  
  return (
    <>
      <HeaderMenu />
      {/* <SwitchBank /> */}
      {/* <BalanceCard /> */}
      {/* <TransactionModal /> */}
      <Routes>
      <Route path="/" element={<HomePage/>} />
        <Route path="/register" element={<RegistrationForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/dashboard" element={<Dashboard/>} />
      </Routes>
      {/* <LoginForm /> */}
      {/* <RegistrationForm /> */}
    </>
  );
}

export default App;

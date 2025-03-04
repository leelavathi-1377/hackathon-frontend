import React from "react";
import BalanceCard from "./BalanceCard";
import TransactionTable from "./Table/TransactionHistory";
import { useAuth } from "../context/AuthContext";
import { useEffect, useState } from "react";
import { redirect } from "react-router";
import { useNavigate } from "react-router";

const Dashboard = () => {
  const { isAuthenticated, setIsAuthenticated, setUser, user, loading } =
    useAuth();
  const navigate = useNavigate();
  console.log("isAuthenticated dashboard", isAuthenticated);
  useEffect(() => {
    if (!loading && !isAuthenticated) {
      navigate("/"); // Redirect to login if not authenticated
    }
  }, [isAuthenticated, navigate, user, loading]);

  if (!loading && !isAuthenticated) {
    return null; // Prevent rendering the dashboard while redirecting
  }

  return (
    <>
      <BalanceCard />
      <TransactionTable />
    </>
  );
};

export default Dashboard;

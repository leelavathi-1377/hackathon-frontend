import React from 'react'
import BalanceCard from './BalanceCard';
import TransactionTable from './Table/TransactionHistory';
const Dashboard = () => {
  return (
    <>
    <BalanceCard/>
    <TransactionTable/>
    </>
  )
}

export default Dashboard
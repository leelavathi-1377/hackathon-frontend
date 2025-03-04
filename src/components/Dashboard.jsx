import React from 'react'
import BalanceCard from './BalanceCard';
import TransactionTable from './Table/TransactionHistory';
import { useAuth } from '../context/AuthContext';
import { redirect } from 'react-router';
import { useNavigate } from 'react-router';
import { Link } from 'react-router';
import { useEffect } from 'react';
import axios from 'axios';
const Dashboard = () => {
  const { isAuthenticated,setIsAuthenticated,setUser,user } = useAuth();
  const navigate = useNavigate()
  console.log("isAuthenticated", isAuthenticated)
  // if (!isAuthenticated) {
  //   return (
  //     <>

  //       <Link to="/login"><button className='text-center flex justify-center px-4 py-2 cursor-pointer bg-blue-600'>Please login to Continue </button></Link>
  //     </>
  //   )

  // }

   const getUserDetails = async (email) => {
          const Url = `http://ec2-3-7-71-6.ap-south-1.compute.amazonaws.com:8080/api/users/getUser/${email}`;
          
          try {
              const result = await axios.get(Url);
              console.log(result.data);
              setUser(result.data);
              setIsAuthenticated(true);
              return result.data;
          } catch (err) {
              console.log(err, "Error occurred while calling the API");
          }
      };
  
      console.log(isAuthenticated)
  
      useEffect(() => {
          const fetchUserDetails = async () => {
              const email = localStorage.getItem("email");
              console.log(email, ": Email Found in LocalStorage");
              if (email) {
                  await getUserDetails(email);
              }
          };
          fetchUserDetails();
      }, []);
  
  return (
    <>
      <BalanceCard />
      <TransactionTable />
    </>
  )
}

export default Dashboard
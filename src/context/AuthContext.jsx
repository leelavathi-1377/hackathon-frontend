import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { createContext } from "react";
import { useNavigate } from "react-router";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setIsLoading] = useState(true);

  const getUserDetails = async (email) => {
    const Url = `/api/users/getUser/${email}`;

    try {
      const result = await axios.get(Url);
      console.log(result.data);
      setUser(result.data);
      setIsAuthenticated(true);
      return result.data;
    } catch (err) {
      console.log(err, "Error occurred while calling the API");
    } finally {
      setIsLoading(false);
    }
  };

  console.log(isAuthenticated);

  useEffect(() => {
    const fetchUserDetails = async () => {
      const email = localStorage.getItem("email");
      console.log(email, ": Email Found in LocalStorage");
      if (email) {
        await getUserDetails(email);
      } else {
        setIsLoading(false);
      }
    };
    fetchUserDetails();
  }, []);

  const onRefresh = (email) => {
    getUserDetails(email);
  };

  const logout = () => {
    console.log("calling");
    localStorage.removeItem("email");
    setIsAuthenticated(false);
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        user,
        setUser,
        setIsAuthenticated,
        logout,
        loading,
        onRefresh,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);

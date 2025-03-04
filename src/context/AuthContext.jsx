import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { createContext } from "react";
import { useNavigate } from "react-router";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {;
    const navigate=useNavigate()
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState(null);

    const logout=()=>{
        console.log("calling")
        localStorage.removeItem("email")
        // setIsAuthenticated(false);
        // setUser(null)
        // navigate('/login')
    }

   
    return (
        <AuthContext.Provider value={{ isAuthenticated, user, setUser ,setIsAuthenticated,logout}}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => useContext(AuthContext);

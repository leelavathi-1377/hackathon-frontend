import { useContext } from "react";
import { createContext } from "react";
import { useState } from "react";
export const AuthContext=createContext();

export default function AuthProvider({children}){
    const [isAuthenticated,setIsAuthenticated]=useState(false);
    const [user,setUser]=useState(null);
    
    return (
        <AuthContext.Provider value={{isAuthenticated,user}}>
            {children}

        </AuthContext.Provider>
    )
}

export const useAuth=()=>useContext(AuthContext)
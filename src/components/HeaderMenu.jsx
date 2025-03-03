import React from "react";
import { LogIn } from "lucide-react";
import { useContext } from "react";
import { BankContext } from "../context/BankContext";
import { Link } from "react-router";
import { useAuth } from "../context/AuthContext";
import { useLocation } from "react-router";
const HeaderMenu = () => {

  const location = useLocation()

  const { isAuthenticated } = useAuth();

  const showLogin = !isAuthenticated && location.pathname !== "/login" && location.pathname !== "/register" && location.pathname !== "/dashboard";
  const showLogout=location.pathname=="/dashboard"

  console.log(window.location)
  return (
    <header className="bg-[#11b67a] min-h-[100px]">
      <div className="max-w-[90%] p-4 flex justify-between items-center">
        <div>
          <h2 className="text-white text-4xl p-4">Bank of Bengal</h2>
        </div>
        <div>
          <h3 className="text-white text-4xl">Welcome !!! </h3>
        </div>
        <nav>
          {showLogin && (
            <Link
              to="/login"
              className="px-4 py-2 bg-blue-600 cursor-pointer text-white rounded-md flex items-center gap-1"
            >
              Login{" "}
              <span>
                <LogIn size={20} />
              </span>
            </Link>

          )}
          {showLogout && (
            <Link
              to="/login"
              className="px-4 py-2 bg-blue-600 cursor-pointer text-white rounded-md flex items-center gap-1"
            >
              Logout{" "}
              <span>
                <LogIn size={20} />
              </span>
            </Link>

          )}

        </nav>
      </div>
    </header>
  );
};

export default HeaderMenu;

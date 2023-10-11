import React, { useEffect, useState } from "react";
import Login from "./components/Login.jsx";
import Signup from "./components/Signup.jsx";
import Dashboard from "./components/Dashboard.jsx";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider, useAuth } from "./AuthContext.js";
import ModeToggle from "./components/ModeToggle.jsx";
import { BsFillMoonStarsFill } from "react-icons/bs";


function ProtectedRoute({ element, ...rest }) {
  const { authenticated } = useAuth();

  return authenticated ? element : <Navigate to="/login" />;
}

function App() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleChange = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="relative bg-[#F0E7DC] dark:bg-[#202023] h-screen">
      <div className="fixed z-[99999] md:top-5 md:right-10 left-2 md:left-auto top-2">
        {theme === "light" ? (
          <ModeToggle handleChange={handleChange} />
        ) : (
          <button
            className="p-2 text-white rounded-lg bg-[#e9c69c]"
            onClick={handleChange}
          >
            <BsFillMoonStarsFill />
          </button>
        )}
      </div>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="login" element={<Login />} />
          {/* <Route path="dashboard" element={<Dashboard />} /> */}
          <Route
              path="dashboard"
              element={<ProtectedRoute element={<Dashboard />} />}
            />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default function AuthWrappedApp() {
  return (
    <AuthProvider>
      <App />
    </AuthProvider>
  );
}

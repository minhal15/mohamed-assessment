import React, { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const storedFirstName = localStorage.getItem("firstName");
    const storedPassword = localStorage.getItem("password");
    const userIsAuthenticated = storedFirstName && storedPassword;
    console.log(storedFirstName && storedPassword, "ss");
    setAuthenticated(userIsAuthenticated);
  }, []);

  return (
    <AuthContext.Provider value={{ authenticated, setAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}

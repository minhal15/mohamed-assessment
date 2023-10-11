import Login from "./components/Login.jsx";
import Signup from "./components/Signup.jsx";
import Dashboard from "./components/Dashboard.jsx";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider, useAuth } from "./AuthContext.js";
function ProtectedRoute({ element, ...rest }) {
  const { authenticated } = useAuth();

  return authenticated ? element : <Navigate to="/login" />;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="login" element={<Login />} />
        <Route
            path="dashboard"
            element={<ProtectedRoute element={<Dashboard />} />}
          />
      </Routes>
    </BrowserRouter>
  );
}

export default function AuthWrappedApp() {
  return (
    <AuthProvider>
      <App />
    </AuthProvider>
  );
}

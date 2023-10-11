  import React, { useEffect, useState } from "react";
  import Navbar from "./Navbar";
  import { Link , useNavigate } from "react-router-dom";

  const Login = () => {
    const [firstName, setFirstName] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleFirstNameChange = (event) => {
      setFirstName(event.target.value);
    };

    const handlePasswordChange = (event) => {
      setPassword(event.target.value);
    };

    // check from localstorage in browser for saved email and password (use Context)
    const handleSubmit = (event) => {
      event.preventDefault();

      const storedFirstName = localStorage.getItem("firstName");
      const storedPassword = localStorage.getItem("password");

      if (storedFirstName === firstName && storedPassword === password) {
        navigate("/dashboard");
      } else {
        setError("Invalid credentials. Please try again.");
      }
    };
    

    return (
      <>
        <div className="h-screen w-screen">
          <Navbar />
          <div className="flex justify-center items-center mt-10 h-5/6">
            <div className="w-5/12 h-5/6  px-2 py-2 ">
              <h3 className="font-semibold text-sm text-[#349795]">LOGIN</h3>
              <h2 className="mt-2 text-xl font-bold ">
                Simplify Contact Management
              </h2>
              <form onSubmit={handleSubmit}>
              <input
                  className="mt-6 py-1.5 w-5/6 border-b-2 border-black"
                  type="text"
                  placeholder="First Name"
                  value={firstName}
                  onChange={handleFirstNameChange}
                />

          <input
            className="mt-4 py-1.5 w-5/6 border-b-2 border-black"
            type="password"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
          />

          {error && <div className="text-red-500">{error}</div>}
          <button className="w-5/6 bg-[#349795] rounded mt-8 py-1.5 text-white" type="submit">
            Login
          </button>
        </form>
              <div className="flex text-xs mt-4">
                <p>Don't have an account yet?</p>
                <Link to={"/"} className="text-[#349795] ml-1">
                  Sign Up{" "}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };

  export default React.memo(Login);





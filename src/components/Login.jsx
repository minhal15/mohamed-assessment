import React, { useState } from "react";
import Navbar from "./Navbar";
import { Link , useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleFirstNameChange = (event) => {

  };

  const handlePasswordChange = (event) => {
   
  };

  const handleSubmit = (event) => {

  };
  
  return (
    <>
      <div className="h-screen w-screen bg-[#F0E7DC]">
        <Navbar />
        <div className="flex justify-center items-center mt-10 h-5/6">
          <div className="w-5/12 h-5/6  px-2 py-2 ">
            <h3 className="font-semibold text-sm text-[#349795]">Login</h3>
            <h2 className="font-bold text-xl mt-2 ">
              Simplify Contact Management
            </h2>
            <form onSubmit={handleSubmit}>
        <input
          className="bg-[#F0E7DC] mt-6 py-1.5 w-5/6 border-b-2 border-black"
          type="text"
          placeholder="First Name"
        />

        <input
          className="bg-[#F0E7DC] mt-4 py-1.5 w-5/6 border-b-2 border-black"
          type="password"
          placeholder="Password"
        />
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

export default Login;





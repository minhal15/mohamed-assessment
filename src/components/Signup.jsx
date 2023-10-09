import React, { useState } from "react";
import Navbar from "./Navbar.jsx";
import { Link } from "react-router-dom";

const Signup = () => {
    //state variables
  const [initialValue, setInitialValue] = useState({
    firstName: "",
    lastName : "",
    email : "",
    password: "",
  });
  const [formValue, setFormValue] = useState([]);

  // use browser local storage, figure out the protected routes later
  const handleSubmit = () => {
    console.log(initialValue, "initial");
    setFormValue((prevFormValues) => [...prevFormValues, initialValue]);
    localStorage.setItem("formValues", JSON.stringify(initialValue));
  };

  return (
    <>
  <div className="h-screen w-screen bg-[#F0E7DC]">
    <Navbar/>
     <div className="flex justify-center items-center h-5/6">
        <div className="w-5/12 h-5/6  px-2 py-2 ">
          <h3 className="font-semibold text-sm text-[#349795]">SIGN UP</h3>
          <h2 className="font-bold text-xl mt-2 ">
            Simplify Contact Management
          </h2>
          <input
            className=" bg-[#F0E7DC] mt-6 py-1.5 w-5/6 border-b-2 border-black"
            type="text"
            placeholder="First Name"
            value={initialValue?.firstName}
            onChange={(e) =>
                  setInitialValue({ ...initialValue, firstName: e.target.value })
                }
          />
          <input
            className=" bg-[#F0E7DC] mt-4 py-1.5 w-5/6 border-b-2 border-black"
            type="text"
            placeholder="Last Name"
            value={initialValue?.lastName}
            onChange={(e)=> setInitialValue({...initialValue , lastName : e.target.value })}
          />
          <input
            className=" bg-[#F0E7DC] mt-4 py-1.5 w-5/6 border-b-2 border-black"
            type="text"
            placeholder="E-mail"
            value={initialValue.email}
            onChange={(e) => setInitialValue({...initialValue , email : e.target.value})}
          />
          <input
            className=" bg-[#F0E7DC] mt-4 py-1.5 w-5/6 border-b-2 border-black"
            type="text"
            placeholder="Password"
            value={initialValue?.password}
            onChange={(e) => setInitialValue({...initialValue , password : e.target.value})}
          />
          <button onClick={handleSubmit} className="w-5/6 bg-[#349795] rounded mt-8 py-1.5 text-white">
            Sign Up
          </button>
        <div className="flex text-xs mt-4">
        <p>Already have an account?</p><Link to={"/login"} className="text-[#349795] ml-1">Login</Link>
        </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default Signup;

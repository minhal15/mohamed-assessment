import React, { useState, useMemo } from "react";
import Navbar from "../components/Navbar.jsx";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
    //state variables
  const [initialValue, setInitialValue] = useState({
    firstName: "",
    lastName : "",
    email : "",
    password: "",
  });
  const [formErrors, setFormErrors] = useState({});

  const validateForm = () => {
    const errors = {};

    if (!initialValue.firstName) {
      errors.firstName = "First name is required";
    }
    if (!initialValue.lastName) {
      errors.lastName = "Last name is required";
    }
    if (!initialValue.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(initialValue.email)) {
      errors.email = "Email is invalid";
    }
    if (!initialValue.password) {
      errors.password = "Password is required";
    } else if (!/^(?=.*[A-Z])(?=.*\d).{8,}$/.test(initialValue.password)) {
      errors.password =
        "Password must be 8 characters including 1 number and 1 uppercase";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      localStorage.setItem("firstName", initialValue.firstName);
      localStorage.setItem("password", initialValue.password);
      navigate("/login");
      window.location.reload(true);
    }
  };

  const errorDisplays = useMemo(
    () => ({
      firstName: formErrors.firstName && (
        <div className="text-red-500">{formErrors.firstName}</div>
      ),
      lastName: formErrors.lastName && (
        <div className="text-red-500">{formErrors.lastName}</div>
      ),
      email: formErrors.email && (
        <div className="text-red-500">{formErrors.email}</div>
      ),
      password: formErrors.password && (
        <div className="text-red-500">{formErrors.password}</div>
      ),
    }),
    [formErrors]
  );

  return (
    <>
    <div className="h-screen w-screen">
      <Navbar/>
      <div className="flex justify-center items-center h-5/6">
          <div className="w-5/12 h-5/6  px-2 py-2 ">
            <h3 className="font-black text-base text-[#349795] dark:text-[#83E6D9] uppercase">SIGN UP</h3>
            <h2 className="mt-2 tablet:text-[32px] text-[24px] font-bold ">
              Simplify Contact Management
            </h2>
            <form className="mt-4 py-1.5 w-5/6">
              <div className="w-full">
                <input
                  className=""
                  type="text"
                  placeholder="First Name"
                  value={initialValue.firstName}
                  onChange={(e) =>
                    setInitialValue({
                      ...initialValue,
                      firstName: e.target.value,
                    })
                  }
                />
                {errorDisplays?.firstName}
              </div>
              <div className="w-full">
                <input
                  className=""
                  type="text"
                  placeholder="Last Name"
                  value={initialValue.lastName}
                  onChange={(e) =>
                    setInitialValue({
                      ...initialValue,
                      lastName: e.target.value,
                    })
                  }
                />
                {errorDisplays?.lastName}
              </div>
              <div className="w-full">
                <input
                  className=""
                  type="email"
                  placeholder="E-mail"
                  value={initialValue.email}
                  onChange={(e) =>
                    setInitialValue({
                      ...initialValue,
                      email: e.target.value,
                    })
                  }
                />
                {errorDisplays?.email}
              </div>
              <div className="w-full">
                <input
                  className=""
                  type="text"
                  placeholder="Password"
                  value={initialValue.password}
                  onChange={(e) =>
                    setInitialValue({
                      ...initialValue,
                      password: e.target.value,
                    })
                  }
                />
                {errorDisplays?.password}
              </div>

              <button
                onClick={handleSubmit}
                className="w-full bg-[#349795] rounded mt-8 py-1.5 text-white" type="submit"
              >
                Sign Up
              </button>
            </form>
          <div className="flex text-xs mt-4">
          <p>Already have an account?</p><Link to={"/login"} className="text-[#349795] dark:text-[#E95EB2] ml-1">Login</Link>
          </div>
          </div>
        </div>
        </div>
    </>
  );
};

export default Signup;

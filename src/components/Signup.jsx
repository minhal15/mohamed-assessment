import React, { useState } from "react";
import Navbar from "./Navbar.jsx";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [initialValue, setInitialValue] = useState({
    firstName: "",
    lastName: "",
    email: "",
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
      console.log(initialValue, "initial");
      localStorage.setItem("firstName", initialValue.firstName);
      localStorage.setItem("password", initialValue.password);
      navigate("/login");
    }
  };

  return (
    <>
      <div className="">
        <div className="container">
          <Navbar />
          <div className="flex items-center justify-center ">
            <div className="w-[531px] px-2 py-2">
              <h3 className="font-black text-base text-[#349795] dark:text-[#83E6D9] uppercase">
                SIGN UP
              </h3>
              <h2 className="mt-2 tablet:text-[32px] text-[24px] font-bold ">
                Simplify Contact Management
              </h2>

              <form className="flex flex-col items-center justify-center gap-6 mt-5">
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
                {formErrors.firstName && (
                  <div className="text-red-500">{formErrors.firstName}</div>
                )}
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
                {formErrors.lastName && (
                  <div className="text-red-500">{formErrors.lastName}</div>
                )}
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
                {formErrors.email && (
                  <div className="text-red-500">{formErrors.email}</div>
                )}
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
                {formErrors.password && (
                  <div className="text-red-500">{formErrors.password}</div>
                )}
                <button
                  onClick={handleSubmit}
                  className="mt-2 text-2xl btn btn-primary"
                >
                  Sign Up
                </button>
              </form>

              <div className="flex text-base mt-[20px] font-normal">
                <p>Already have an account? </p>
                <Link
                  to={"/login"}
                  className="text-[#349795] dark:text-[#E95EB2] ml-1"
                >
                  Login
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;

//////////////////////////////

import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import GIF from "../assets/not-found.gif"; 

const NotFound = () => {

  useEffect(() => {
    // Trigger a console error with a 404 message
    console.error("Page not found: 404");
  }, []);
  
  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-white ">
      <div className="container">
        <div className="text-center">
          <h1 className="relative z-10 heading-1">404</h1>
        </div>
        <div className="text-center">
          <img
            className="mx-auto w-[600px] lg:my-[-80px] my-[-40px]"
            src={GIF} 
            alt=""
          />
          <h3 className="heading-3">Look like you're lost</h3>

          <p className="font-semibold text-black/70">
            the page you are looking for is not available!
          </p>

          <Link
            to="/"
            className="block px-8 py-3 mx-auto mt-8 font-semibold text-white bg-blue-500 center rounded-xl w-fit"
          >
            Go to Home
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NotFound;

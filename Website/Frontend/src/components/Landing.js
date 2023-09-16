import React from "react";
import landing from "../assets/landing.png";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div>
      <img className="w-full h-full" src={landing}></img>
      <Link to="/register">
        {" "}
        <button className="bg-teal-600  p-[10px] absolute text-white text-lg rounded-[10px] w-[150px] left-[1070px] top-[40px]">
          USER
        </button>
      </Link>
    </div>
  );
};

export default Landing;

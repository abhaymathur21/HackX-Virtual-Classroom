import React from "react";
import prof from "../assets/pprof.png";
import logo from "../assets/logo2.png";
const NavBar = () => {
  return (
    <div
      style={{
        height: "85px",
        width: "100%",
        // position: "fixed",
        top: 0,
        backgroundColor: "#749BC2",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0 20px",
      }}
    >
      <img
        className="absolute w-[60px] h-[60px] left-[10px] top-[10px]"
        src={logo}
        alt="logo"
      ></img>
      <p className="text-[#F6F4EB] absolute  left-[70px] top-[5px] font-[700] text-[24px] leading-[75px]">
        SkillScape
      </p>
      <span
        style={{
          color: "white",
          fontSize: "18px",
          //   fontWeight: "bold",
          color:"#F6F4EB",
          marginLeft: "1205px",
        }}
      >
        Welcome, Shruti Shah
      </span>
      <img
        src={prof} // Replace with your profile image URL
        alt="Profile"
        style={{
          width: "58px",
          height: "58px",
          borderRadius: "50%",
          border: "3px solid white",
        }}
      />
    </div>
  );
};

export default NavBar;

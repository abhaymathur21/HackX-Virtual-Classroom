import React from "react";
import prof from "../assets/pprof.png";
import ToDo from "./ToDo";

const ProfessorsSection = () => {
  return (
    <div
      style={{
        width: "20%",
        height: "830px",
        backgroundColor: "#4682A9",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <img
          src={prof} // Replace with your profile image URL
          alt="Profile"
          style={{
            width: "128px",
            height: "128px",
            borderRadius: "50%",
            border: "3px solid white",
            marginTop: "20px",
          }}
        />
        <p
          style={{
            marginTop: "20px",
            fontWeight: "bold",
            color: "#F6F4EB",
            fontFamily: "Poppins",
          }}
        >
          Prof. Shruti Shah
        </p>
        <p
          style={{
            margin: "10px 0px",
            // fontWeight: "bold",
            color: "#F6F4EB",
            fontFamily: "Poppins",
          }}
        >
          H.O.D. Mathematics
        </p>
      </div>
      <hr
        style={{
          border: "0",
          marginTop: "25px",
          borderTop: "1px solid #EAEAEA",
        }}
      />
      <div style={{
        padding:"10px 20px"
      }}>
        <ToDo></ToDo>
      </div>
    </div>
  );
};

export default ProfessorsSection;

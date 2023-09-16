import React from "react";
import NavBar from "./NavBar";
import ProfessorsSection from "./ProfSec";
import { ChartPie1 } from "./ChartPie1";
import { ChartPie2 } from "./ChartPie2";
import { BarChart } from "./BarChart";
import SmallCard from "./SmallCard";
import dropdown from "../assets/dropdown.png";

const DashBoard = () => {
  return (
    <div>
      <NavBar />
      <div
        style={{
          display: "flex",
        }}
      >
        <div
          style={{
            width: "80%",
            height: "830px",
            // height:"100%",
            backgroundColor: "#F6F4EB",
          }}
        >
          <div
            style={{
              width: "95%",
              height: "305px",
              backgroundColor: "white",
              borderRadius: "10px",
              border: "2px solid #4682A9",
              margin: "20px 20px",
              display: "flex",
              gap: "30px",
            }}
          >
            <div
              style={{
                height: "300px",
                width: "300px",
                marginLeft: "40px",
                paddingTop: "10px",
              }}
            >
              <p
                style={{
                  marginTop: "10px",
                  marginLeft: "20px",
                  fontSize: "16px",
                  paddingBottom: "20px",
                  color: "#4682A9",
                }}
              >
                Number of Lectures
              </p>
              <ChartPie1></ChartPie1>
            </div>
            <div
              style={{
                height: "300px",
                width: "300px",
                marginLeft: "40px",
                paddingTop: "10px",
              }}
            >
              <p
                style={{
                  marginTop: "10px",
                  marginLeft: "40px",
                  fontSize: "16px",
                  paddingBottom: "20px",
                  color: "#4682A9",
                }}
              >
                Class Report
              </p>
              <ChartPie2></ChartPie2>
            </div>
            <div
              style={{
                height: "380px",
                width: "400px",
                marginLeft: "40px",
                marginTop: "-10px",
              }}
            >
              <p
                style={{
                  marginTop: "30px",
                  marginLeft: "40px",
                  fontSize: "16px",
                  color: "#4682A9",
                }}
              >
                Class-wise Interaction
              </p>
              <div>
                <BarChart></BarChart>
              </div>
            </div>
          </div>
          <div
            style={{
              marginLeft: "18px",
              marginTop: "10px",
            }}
          >
            <SmallCard></SmallCard>
          </div>
          
          <img
            src={dropdown} // Replace with your profile image URL
            alt="Profile"
            style={{
              width: "95%",
              height: "305px",
              marginLeft: "20px",
            }}
          />
        </div>
        <ProfessorsSection />
      </div>
    </div>
  );
};

export default DashBoard;

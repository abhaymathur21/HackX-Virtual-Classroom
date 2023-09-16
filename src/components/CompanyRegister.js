import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import * as FormData from "form-data";
import { useNavigate } from "react-router-dom";
import { LoginContext } from "../Contexts/LoginContext";
import heros from "../assets/heros.png";
import viablelogo from "../assets/viablelogo.png";

const CompanyRegister = () => {
  const { username, setUsername } = useContext(LoginContext);

  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState("");

  const isInvalid =
    password === "" ||
    fname === "" ||
    email === "" ||
    lname === "" ||
    username === "";

  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    if (isInvalid) {
      console.log("Error");
      alert("Error! Please fill the fields");
    } else {
      var data = new FormData();
      data.append("password", password);
      data.append("First_name", fname);
      data.append("Last_name", lname);
      data.append("email", email);
      data.append("username", username);

      var config = {
        method: "post",
        maxBodyLength: Infinity,
        url: "http://thevariables.pythonanywhere.com/accounts/register/",

        //   headers: {
        //     ...data.getHeaders()
        //   },
        data: data,
      };

      axios(config)
        .then(function (response) {
          console.log(JSON.stringify(response.data));
          localStorage.setItem("email", email);
        })
        .catch(function (error) {
          console.log(error);
        });
      setUser({ fname: fname, lname: lname, email: email, password: password });
      console.log(user);
      navigate("/login");
    }
  };

  return (
    <div className="bg-[#4682A9] w-[1920px] h-[1080px] relative whitespace-nowrap overflow-auto  scrollbar-hide flex">
      <img
        className="absolute w-[250px] h-[85px] left-[65px] top-[40px]"
        src={viablelogo}
        alt="logo"
      ></img>
      <form onSubmit={handleRegister}>
        <p className="text-[#ffffff] absolute w-[1000px] h-[55px] left-[335px] top-[120px] font-[700] text-[35px] leading-[96px]">
          COMPANY SIGN-UP
        </p>

        <label className=" text-[#ffffff] absolute left-[289px] top-[210px] text-sm">
          Username
        </label>
        <input
          className=" rounded-[10px] absolute w-[400px] h-[35px] left-[289px] top-[240px] bg-[#EFFFFA]"
          placeholder="username"
          type="text"
          name="username"
          aria-label="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        ></input>

        <br />

        <label className=" text-[#ffffff]  absolute left-[289px] top-[290px] text-sm">
          Company Name
        </label>
        <input
          className="rounded-[10px] absolute w-[400px] h-[35px] left-[289px] top-[320px] bg-[#EFFFFA]"
          placeholder="company name"
          type="text"
          name="company name"
          aria-label="First Name"
          value={fname}
          onChange={(e) => setFname(e.target.value)}
        ></input>

        <br />

        <label className=" text-[#ffffff] absolute left-[289px] top-[370px] text-sm">
          Company Domain
        </label>
        <input
          className="rounded-[10px] absolute w-[400px] h-[35px] left-[289px] top-[400px] bg-[#EFFFFA]"
          placeholder="last name"
          type="text"
          name="company domain"
          aria-label="company domain"
          value={lname}
          onChange={(e) => setLname(e.target.value)}
        ></input>

        <br />

        <label className="text-[#ffffff] absolute left-[289px] top-[450px] text-sm">
          Email
        </label>
        <input
          className="rounded-[10px] absolute w-[400px] h-[35px] left-[289px] top-[480px] bg-[#EFFFFA]"
          placeholder="email id"
          type="email"
          name="email"
          aria-label="Email ID"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>

        <br />

        <label className="text-md text-[#ffffff] absolute left-[289px] top-[530px] text-sm">
          Password
        </label>
        <input
          className="rounded-[10px] absolute w-[400px] h-[35px] left-[289px] top-[560px] bg-[#EFFFFA]"
          placeholder="password"
          type="password"
          name="password"
          aria-label="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>

        <br />

        <button
          type="submit"
          className="rounded-[10px] absolute w-[400px] h-[35px] left-[289px] top-[660px] bg-[#00ADB5]"
        >
          CREATE ACCOUNT
        </button>
      </form>
      <br />

      <p className="text-[#EFFFFA] text-sm absolute left-[289px] top-[630px]">
        Already have an account?
        <Link to="/clogin">
          {" "}
          <button className="text-[#ffffff] font-medium">Login</button>
        </Link>{" "}
      </p>
      <div className="absolute w-[500px] h-[500px] left-[900px] top-[60px] rounded-[20] bg-[#EFFFFA]">
        <img src={heros}></img>
      </div>
    </div>
  );
};

export default CompanyRegister;

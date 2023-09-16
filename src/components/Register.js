import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import * as FormData from "form-data";
import { useNavigate } from "react-router-dom";
import { LoginContext } from "../Contexts/LoginContext";
import heros from "../assets/heros.png";
import logo from "../assets/logo2.png";
var config = {
  method: "post",
  maxBodyLength: Infinity,
  url: "http://thevariables.pythonanywhere.com/accounts/register/",
};
const Register = () => {
  const { username, setUsername } = useContext(LoginContext); // You may not need to store email and password here

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [Cpassword, setCPassword] = useState("");
  const [user, setUser] = useState({}); // Store user data including email and password

  const isInvalid =
    password === "" ||
    email === "" ||
    Cpassword === "" ||
    password !== Cpassword;

  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    if (isInvalid) {
      console.log("Error");
      alert("Error! Passwords don't match");
    } else {
      var data = new FormData();
      data.append("password", password);
      data.append("email", email);
      data.append("username", username);

      var config = {
        method: "post",
        maxBodyLength: Infinity,
        url: "http://thevariables.pythonanywhere.com/accounts/register/",

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

      // Store user data including email and password
      setUser({ email: email, password: password });

      // Clear the password fields for security
      setPassword("");
      setCPassword("");

      // Navigate to login page or perform any other actions as needed
      navigate("/login");
    }
  };

  return (
    <div className="bg-[#4682A9] w-[1535px] h-[739px] relative whitespace-nowrap overflow-auto  scrollbar-hide flex">
      <img
        className="absolute w-[80px] h-[80px] left-[20px] top-[20px]"
        src={logo}
        alt="logo"
      ></img>
      <p className="text-[#ffffff] absolute  left-[100px] top-[10px] font-[700] text-[30px] leading-[96px]">
        SkillScape
      </p>
      <form onSubmit={handleRegister}>
        <p className="text-[#ffffff] absolute w-[1000px] h-[55px] left-[385px] top-[100px] font-[700] text-[45px] leading-[96px]">
          SIGN-UP
        </p>

        <label className=" text-[#ffffff] absolute left-[290px] top-[210px] text-sm">
          Email
        </label>
        <input
          className=" rounded-[10px] absolute w-[400px] h-[35px] left-[289px] top-[230px] bg-[#EFFFFA]"
          type="email"
          name="email"
          aria-label="Email ID"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ color: "#183740", paddingLeft: "10px" }}
        ></input>

        <br />

        <label className=" text-[#ffffff]  absolute left-[290px] top-[290px] text-sm">
          Username
        </label>
        <input
          className="rounded-[10px] absolute w-[400px] h-[35px] left-[289px] top-[310px] bg-[#EFFFFA]"
          type="text"
          name="username"
          aria-label="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{ color: "#183740", paddingLeft: "10px" }}
        ></input>

        <br />

        <label className=" text-[#ffffff] absolute left-[290px] top-[370px] text-sm">
          Password
        </label>
        <input
          className="rounded-[10px] absolute w-[400px] h-[35px] left-[289px] top-[390px] bg-[#EFFFFA]"
          type="text"
          name="password"
          aria-label="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ color: "#183740", paddingLeft: "10px" }}
        ></input>

        <br />

        <label className="text-[#ffffff] absolute left-[290px] top-[450px] text-sm">
          Confirm Password
        </label>
        <input
          className="rounded-[10px] absolute w-[400px] h-[35px] left-[289px] top-[470px] bg-[#EFFFFA]"
          type="text"
          name="Cpassword"
          aria-label="Confirm Password"
          value={Cpassword}
          onChange={(e) => setCPassword(e.target.value)}
          style={{ color: "#183740", paddingLeft: "10px" }}
        ></input>
        <br />

        <button
          type="submit"
          className="text-[#ffffff] rounded-[10px] absolute w-[400px] h-[35px] left-[289px] top-[550px] bg-[#749BC2]"
        >
          SIGN UP
        </button>
      </form>
      <br />

      <p className="text-[#EFFFFA] text-sm absolute left-[380px] top-[520px]">
        Already have an account?
        <Link to="/login">
          {" "}
          <button className="text-[#ffffff] font-medium">Login</button>
        </Link>{" "}
      </p>
      <div className="absolute w-[500px] h-[500px] left-[900px] top-[60px] rounded-[20] bg-[#749BC2]">
        <img src={heros}></img>
      </div>
    </div>
  );
};

export default Register;

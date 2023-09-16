import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import * as FormData from "form-data";
import { LoginContext } from "../Contexts/LoginContext";
import logo from "../assets/logo2.png";
import hero from "../assets/hero.png";

const Login = () => {
  const { username, setUsername, setLogged } = useContext(LoginContext);
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // To display login errors
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(""); // Reset error message

    // Add your password validation logic here (replace "correct_password" with your actual validation)
    if (password !== "correct_password") {
      setError("The username or password entered is wrong");
      navigate("/DashBoard");
      return;
    }

    var data = new FormData();
    data.append("username", username);
    data.append("password", password);

    // Assuming this is your API endpoint for authentication
    const loginEndpoint =
      "http://thevariables.pythonanywhere.com/accounts/login/";

    try {
      // Make a POST request to your login endpoint
      const response = await axios.post(loginEndpoint, data);

      // Assuming your API returns user data and an access token
      const { username: loggedInUsername, access: accessToken } = response.data;

      // Store user data and access token in local storage
      localStorage.setItem("username", loggedInUsername);
      localStorage.setItem("accessToken", accessToken);

      // Set the user as logged in
      setLogged(true);

      // Redirect to the Admin Dashboard
      navigate("/DashBoard");
    } catch (error) {
      console.error(error);
      setError("Login failed. Please check your credentials.");
    }
  };

  return (
    <div className="bg-[#4682A9] w-[1535px] h-[739px] relative overflow-hidden scrollbar-hide flex">
      <img
        className="absolute w-[80px] h-[80px] left-[20px] top-[20px]"
        src={logo}
        alt="logo"
      ></img>
      <p className="text-[#ffffff] absolute  left-[100px] top-[10px] font-[700] text-[30px] leading-[96px]">
        SkillScape
      </p>
      <form onSubmit={handleLogin}>
        <p className="text-[#ffffff] absolute w-[1000px] h-[55px] left-[410px] top-[200px] font-[700] text-[45px] leading-[96px]">
          LOGIN
        </p>
        <label className="text-[#ffffff] absolute left-[289px] top-[310px] text-sm">
          Username
        </label>
        <input
          className="rounded-[10px] absolute w-[400px] h-[35px] left-[289px] top-[330px] bg-[#EFFFFA]"
          type="text"
          name="username"
          aria-label="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{ color: "#183740", paddingLeft: "10px" }}
        ></input>

        <br />
        <label className="text-[#ffffff] absolute left-[290px] top-[380px] text-sm">
          Password
        </label>
        <input
          className="absolute w-[400px] h-[35px] left-[290px] top-[400px] bg-[#EFFFFA] rounded-[10px]"
          type="password"
          name="password"
          aria-label="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ color: "#183740", paddingLeft: "10px" }}
        ></input>

        <button className="text-[#ffffff] text-sm absolute left-[567px] top-[440px]">
          Forgot Password?
        </button>

        <br />
        <button
          className="text-[#ffffff] rounded-[10px] absolute w-[400px] h-[35px] left-[290px] top-[510px] bg-[#749BC2]"
          type="submit"
        >
          LOGIN
        </button>

        {/* Display login error message */}
        {error && (
          <p className="text-[#ffffff] text-sm absolute left-[290px] top-[550px]">
            {error}
          </p>
        )}
      </form>
      <br />

      <p className="text-[#EFFFFA] text-sm absolute left-[380px] top-[480px]">
        Don't have an account?{" "}
        <Link to="/register">
          {" "}
          <button className="text-[#ffffff] font-medium" type="submit">
            Sign up
          </button>
        </Link>
      </p>

      <div className="absolute w-[500px] h-[500px] left-[900px] top-[60px] rounded-[20] bg-[#EFFFFA]">
        <img src={hero} alt="Hero" />
      </div>
    </div>
  );
};

export default Login;

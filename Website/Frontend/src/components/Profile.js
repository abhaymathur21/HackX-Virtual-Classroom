import React, { useContext, useEffect, useState } from "react";
import { LoginContext } from "../Contexts/LoginContext";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import home from "../assets/home.png";
import interview from "../assets/interview.png";
import profile from "../assets/profile.png";
import support from "../assets/support.png";
import explore from "../assets/explore.png";
import logo2 from "../assets/logo2.png";
import settings from "../assets/settings.png";
import neww from "../assets/neww.png";
import chat from "../assets/chat.png";
import skills from "../assets/skills.png";
import notifications from "../assets/notifications.png";
import applied from "../assets/applied.png";
import post from "../assets/post.png";
import pprof from "../assets/pprof.png";

const Profile = () => {
  const storage = localStorage.getItem("accesstoken");
  const { username, setLogged } = useContext(LoginContext);

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("accesstoken");
    localStorage.removeItem("refreshtoken");
    setLogged(false);
    navigate("/login");
  };

  const handleVerification = () => {
    var config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "http://thevariables.pythonanywhere.com/accounts/email-verification/",
      headers: {
        Authorization: `Bearer ${storage}`,
      },
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    /* Profile, hi, your username is {username} */
    /* <div> Warning! your email is not verifird. <button onClick={handleVerification}>Please click here to verify </button></div> */

    /* <button onClick={handleLogout}>Logout</button> */
    <div className="bg-[#4682A9] w-[1920px] h-[5000px]  flex scrollbar-hide">
      +
      <div className="rounded-[30px] fixed  w-[350px] h-[670px] left-[30.93px] top-[29px] bg-[#183740] shadow-2xl">
        <img
          className="absolute w-[200px] h-[70px] left-[60px] top-[40px]"
          src={logo2}
          alt="logo"
        ></img>
        <Link to="/home">
          <img
            className="absolute w-[30px] h-[25px] left-[75px] top-[190px]"
            src={home}
          ></img>
          <p className="text-md  absolute left-[140px] top-[190px] text-white ">
            Home
          </p>
        </Link>
        <Link to="/profile">
          <img
            className="absolute w-[25px] h-[25px] left-[75px] top-[250px]"
            src={profile}
          ></img>
          <p className="text-md font-bold text-white absolute left-[140px] top-[250px] ">
            My Profile
          </p>
        </Link>
        <Link to="/explore">
          {" "}
          <img
            className="absolute w-[25px] h-[25px] left-[75px] top-[310px]"
            src={explore}
          ></img>
          <p className="text-md text-white absolute left-[140px] top-[310px]">
            Explore
          </p>
        </Link>
        <img
          className="absolute w-[25px] h-[25px] left-[75px] top-[370px]"
          src={interview}
        ></img>
        <p className="text-md text-white absolute left-[140px] top-[370px] ">
          Interview
        </p>
        <br />
        {/* <hr className='absolute w-[340px] left-[5px] h-[10px] top-[430px] bg-[#183740] '></hr> */}

        <img
          className="absolute w-[25px] h-[25px] left-[75px] top-[430px]"
          src={settings}
        ></img>
        <p className="text-md text-white absolute left-[140px] top-[430px] ">
          Settings
        </p>
        <img
          className="absolute w-[25px] h-[25px] left-[75px] top-[490px]"
          src={support}
        ></img>
        <p className="text-md text-white absolute left-[140px] top-[490px] ">
          Support
        </p>
      </div>
      {/* 
          <div className='bg-[#00ADB5] w-[500px] absolute h-[40px] left-[420px] top-[20px]'><input className='bg-[#4682A9] absolute top-[20px] w-[350px] h-[30px]'></input></div> */}
      <div className="bg-[#4682A9] fixed w-[25px] h-[25px] left-[1182px] top-[20px] flex justify-between flex-row">
        <img className="w-[25px] m-[20px] h-[25px]" src={chat}></img>
        <img
          className="w-[25px] mt-[20px] ml-[5px] h-[25px]"
          src={notifications}
        ></img>
        <button
          className="text-[#ffffff] mt-[20px] ml-[15px]"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
      <div className="rounded-[20px] absolute w-[670px] h-[595px] left-[450px] top-[70px] bg-[#183740] ">
        <img src={neww}></img>
      </div>
      {/* <div className='rounded-[20px] absolute w-[700px] h-[579px] left-[420px] top-[132px] bg-[#183740] '> */}
      <img
        className="fixed w-[305px] h-[350px] top-[92px] left-[1170px] "
        src={skills}
      ></img>
      <img
        className="fixed w-[305px] h-[300px] top-[430px] left-[1170px] "
        src={applied}
      ></img>
      {/* </div> */}
      <div className="rounded-[30px] absolute w-[670px] h-[595px] left-[450px] top-[860px] bg-[#183740] shadow-2xl">
        <div className="text-white rounded-[30px] font-medium text-xl bg-[#1B4552] p-[30px]">
          {" "}
          Posts
        </div>
        <img
          className="w-[45px] relative h-[45px] top-[30px] left-[20px]"
          src={pprof}
        ></img>
        <p className="text-white top-[80px] absolute left-[50px] text-md p-[40px]">
          Hemant Singh <span className="text-white font-thin ">@hemants02</span>
        </p>

        <p className="text-white font-thin absolute top-[150px] left-[90px]">
          few minutes ago
        </p>
        <img
          className="absolute w-[500px] h-[300px] top-[200px] left-[100px]"
          src={post}
        ></img>
      </div>
    </div>
  );
};

export default Profile;

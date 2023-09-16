import React from "react";
import { Link } from "react-router-dom";
import home from "../assets/home.png";
import interview from "../assets/interview.png";
import profile from "../assets/profile.png";
import support from "../assets/support.png";
import explore from "../assets/explore.png";
import logo2 from "../assets/logo2.png";
import settings from "../assets/settings.png";
import search1 from "../assets/search1.png";
import chat from "../assets/chat.png";
import notifications from "../assets/notifications.png";
import man from "../assets/man.png";
import post from "../assets/post.png";
import pprof from "../assets/pprof.png";
import trends from "../assets/trends.png";

const Home = () => {
  return (
    <div className="bg-[#4682A9] w-[1920px] h-[1080px]  flex scrollbar-hide">
      <div className="rounded-[30px] fixed  w-[350px] h-[670px] left-[30.93px] top-[29px] bg-[#183740] shadow-2xl">
        <img
          className="absolute w-[200px] h-[70px] left-[60px] top-[40px]"
          src={logo2}
          alt="logo"
        ></img>
        <img
          className="absolute w-[30px] h-[25px] left-[75px] top-[190px]"
          src={home}
        ></img>
        <p className="text-md font-bold absolute left-[140px] top-[190px] text-white ">
          Home
        </p>
        <Link to="/profile">
          <img
            className="absolute w-[25px] h-[25px] left-[75px] top-[250px]"
            src={profile}
          ></img>
          <p className="text-md text-white absolute left-[140px] top-[250px] ">
            My Profile
          </p>{" "}
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
      <div className="flex top-[50px] flex-row items-center justify-center  ">
        <input
          className="bg-[#EFFFFA] absolute top-[70px] text-grey rounded-xl py-1 px-2 m-1 focus:outline-none left-[420px] w-[550px] capitalize placeholder:lowercase"
          placeholder="search for comanies"
        ></input>
        <img
          src={search1}
          className="w-[25px] top-[70px] h-[25px] left-[985px]  m-1 cursor-pointer absolute transition ease-out hover:scale-110"
        ></img>{" "}
      </div>
      <div className="bg-[#4682A9] fixed w-[25px] h-[25px] left-[1182px] top-[20px] flex justify-between flex-row">
        <img className="w-[25px] m-[20px] h-[25px]" src={chat}></img>
        <img
          className="w-[25px] mt-[20px] ml-[5px] h-[25px]"
          src={notifications}
        ></img>
        {/* <div className='w-[900px] mt-[20px] py-[10px] px-[20] rounded-[30px] text-white  bg-[#00ADB5] ml-[25px] h-[25px] flex items-center justify-center' src={notifications}>hemants02</div> */}
        <img className="w-[50px] h-[30px] mt-[20px] ml-[15px]" src={man}></img>
      </div>
      {/* <div className='rounded-[20px] absolute w-[720px] h-[589px] left-[420px] top-[160px] bg-[#183740] '>


      </div> */}
      <div className="rounded-[30px] absolute w-[670px] h-[565px] left-[440px] top-[160px] bg-[#183740] shadow-2xl">
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
          className="absolute w-[500px] h-[300px] top-[200px] left-[85px]"
          src={post}
        ></img>
      </div>
      <div className="rounded-[30px] fixed w-[300px] h-[595px] left-[1182px] top-[100px] bg-[#183740] shadow-2xl">
        <img src={trends}></img>
      </div>
    </div>
  );
};

export default Home;

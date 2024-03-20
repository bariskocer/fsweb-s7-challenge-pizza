import React from "react";
import Header from "../components/shared/Header";
import bg from "../assets/home-banner.png";
import {Link} from "react-router-dom";

const HomePage = () => {
  return (
    <div
      className="w-full h-screen"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Header />
      <div className="flex flex-col justfiy-center items-center  text-5xl text-white">
        <h2 className="p-2">KOD ACIKTIRIR</h2>
        <h2 className="p-2">PIZZA, DOYURUR</h2>
        <Link to='/order'><button className="text-xl py-2 px-10 mt-6 rounded-3xl bg-yellow-300 font-bold text-black ">Acıktım</button></Link>
      </div>
    </div>
  );
};

export default HomePage;

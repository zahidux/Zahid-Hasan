import React from "react";
import image from "../assets/zahid.jpg";
import { Link } from "react-router-dom";
import { Typed } from "react-typed";

const Banner = () => {
  return (
    <section className="md:flex justify-center items-center md:h-[850px] bg-slate-200 py-24 md:px-64">
      <div className="w-full text-center md:text-left">
        <p className="text-xl font-medium">Hello! I'm</p>
        <h1 className="text-4xl md:text-6xl my-4 font-bold text-slate-900 ">
          Zahid Hasan
        </h1>
        <p className="text-xl font-bold mb-4 text-sky-500">
          Front end Developer
        </p>
        <Link to={"#contact"}>
          <button className="bg-sky-600 py-2 px-3 rounded-xl font-semibold text-lg text-white shadow-md shadow-sky-500">
            Contact me
          </button>
        </Link>
      </div>
      <Link to={"/"} className="w-full grid justify-center mt-10 md:mt-0">
        <img
          className="w-[350px] md:w-[550px] rounded-full"
          src={image}
          alt="Profile"
        />
      </Link>
    </section>
  );
};

export default Banner;

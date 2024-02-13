import React from "react";
import image from "../assets/zahid.jpg";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <section
      id="/"
      className="md:flex justify-center items-center md:h-[850px] md:px-64 pt-40 pb-28 md:pb-0 md:pt-20 md:mx-32 rounded-b-2xl shadow-xl"
    >
      <div data-aos="zoom-in" className="w-full text-center md:text-left">
        <p className="text-xl md:text-3xl font-medium">Hello! I'm</p>
        <h1 className="text-4xl md:text-6xl my-3 md:my-7 font-bold text-slate-900 ">
          Zahid Hasan
        </h1>
        <p className="text-xl md:text-3xl font-bold text-sky-500">
          Front end Developer
        </p>
        <Link to={"#contact"}>
          <button className="bg-sky-600 py-2 md:py-3 px-3 rounded-xl font-bold md:text-xl text-white shadow-md shadow-sky-500 mt-7">
            Contact me
          </button>
        </Link>
      </div>
      <Link
        data-aos="zoom-in"
        to={"/"}
        className="w-full grid justify-center mt-20 md:mt-0"
      >
        <img
          className="w-[350px] md:w-[500px] rounded-full"
          src={image}
          alt="Profile"
        />
      </Link>
    </section>
  );
};

export default Banner;

import React from "react";
import logo from "../assets/logo.png";
import { HashLink as Link } from "react-router-hash-link";

const Navbar = () => {
  return (
    <nav className="md:flex items-center justify-around fixed w-full md:px-28  ">
      <div>
        <Link to={"/"}>
          <img
            className="w-[150px] md:w-[170px] rounded-md mt-5 md:mt-0 ml-5 md:ml-0"
            src={logo}
            alt=""
          />
        </Link>
      </div>
      <ul className="md:flex gap-10 my-10 text-2xl font-bold invisible md:visible text-slate-700">
        <li></li>
        <Link to={"/"}>Home</Link>
        <li>
          <Link to={"#about"}>About </Link>
        </li>
        <li>
          <Link to={"#projects"}>Projects</Link>
        </li>
        <li>
          <Link to={"#services"}>Services</Link>
        </li>
        <li>
          <Link to={"#contact"}>Contact</Link>
        </li>
      </ul>
      <Link
        target="_blank"
        rel="noreferrer"
        to={
          "https://drive.google.com/file/d/1PIJQr2kXCj_zJUfpY-sHCNYA874p2XS6/view?usp=drive_link"
        }
        className="text-white bg-sky-500 py-2 md:py-3 px-2 md:px-3 rounded-xl font-semibold text-lg md:text-xl shadow-md shadow-sky-400 absolute md:relative top-5 md:top-0 right-5 md:right-0"
      >
        Download Resume
      </Link>
    </nav>
  );
};

export default Navbar;

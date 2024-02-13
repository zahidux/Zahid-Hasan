import React from "react";
import logo from "../assets/logo.png";
import { HashLink as Link } from "react-router-hash-link";

const Navbar = () => {
  return (
    <nav className="md:flex items-center justify-around fixed w-full md:bg-[#0f0f0f70] text-white">
      <div>
        <Link to={"/"}>
          <img className="w-[170px] rounded-md" src={logo} alt="" />
        </Link>
      </div>
      <ul className="md:flex gap-10 my-10 text-lg font-semibold invisible md:visible">
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
        className="bg-sky-500 py-2 px-3 rounded-xl font-semibold text-lg shadow-md shadow-sky-400 absolute md:relative top-2 right-2"
      >
        Download Resume
      </Link>
    </nav>
  );
};

export default Navbar;

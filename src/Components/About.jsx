import React from "react";
import zahida from "../assets/zahida.jpg";
import { Link } from "react-router-dom";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";

const About = () => {
  return (
    <section
      id="about"
      className="py-24 md:py-36 rounded-2xl md:m-32 shadow-xl"
    >
      <div className="md:flex items-center gap-5 mx-8 md:mx-48">
        <div className="w-full grid justify-center">
          <img
            className="w-[300px] md:w-[550px] rounded-xl"
            src={zahida}
            alt="zahid"
          />
        </div>
        <div className="w-full mt-10 md:mt-0 text-center md:text-left">
          <h4 className="md:text-2xl font-bold text-sky-500">About Me</h4>
          <h2 className="text-3xl md:text-5xl my-3 md:my-5 font-bold">
            Front-end Developer
          </h2>
          <p className="md:text-lg font-medium text-gray">
            Hi! I'm Zahid Hasan. I'm from Bangladesh. I'm a Full-time
            professional freelancer. I truly believe that your success is my
            reason to smile!. I have good experience in React JS, Javascript,
            HTML5, CSS3, Bootstrap3, Material UI, Tailwind CSS, Font Awesome,
            React Router, React Hook Form, MongoDB Firebase, etc.
          </p>
          <div className="flex gap-6 text-3xl text-indigo-800 mt-7 justify-center md:justify-start">
            <Link
              target="_blank"
              rel="noreferrer"
              to={"https://www.linkedin.com/in/zahidux/"}
            >
              <FaLinkedin />
            </Link>
            <Link
              target="_blank"
              rel="noreferrer"
              to={"https://github.com/zahidux"}
              className="text-black"
            >
              <FaGithub />
            </Link>
            <Link
              target="_blank"
              rel="noreferrer"
              to={"https://www.instagram.com/zahidux_/"}
              className="text-pink-800"
            >
              <GrInstagram />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

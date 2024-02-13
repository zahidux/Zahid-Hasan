import React from "react";
import zahida from "../assets/zahida.jpg";
import { Link } from "react-router-dom";
import { FaLinkedin, FaGithub, FaFacebookSquare } from "react-icons/fa";

const About = () => {
  return (
    <section id="about" className="py-20 bg-sky-600 rounded-md">
      <div className="md:flex items-center mx-8 md:mx-48">
        <div className="w-full">
          <img className="w-[450px] rounded-xl" src={zahida} alt="zahid" />
        </div>
        <div className="text-white w-full mt-10 md:mt-0">
          <h4 className="text-xl my-2 font-bold ">About Me</h4>
          <h2 className="text-4xl my-2 font-bold">Front-end Developer</h2>
          <p className="my-5">
            Hi! I'm Zahid Hasan. I'm from Bangladesh. I'm a Full-time
            professional freelancer. I truly believe that your success is my
            reason to smile!. I have great experience in React JS, Javascript,
            HTML5, CSS3, Bootstrap3, Material UI, Tailwind CSS, Font Awesome,
            React Router, React Hook Form, MongoDB, and Firebase, etc.
          </p>
          <div className="flex gap-4 text-2xl">
            <Link>
              <FaLinkedin />
            </Link>
            <Link>
              <FaGithub />
            </Link>
            <Link>
              <FaFacebookSquare />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

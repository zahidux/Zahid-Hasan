import React from "react";

const Footer = () => {
  return (
    <section className="mt-12 py-20 md:mx-32 shadow-xl">
      <div data-aos="zoom-in" className="grid justify-center text-sky-300">
        <hr className="border-b-2 w-[300px] md:w-[670px]" />
      </div>
      <p
        data-aos="zoom-in-up"
        className="text-center font-semibold text-xl mt-10 text-sky-500 mx-20"
      >
        © 2024. All rights reserved by Zahid Hasan
      </p>
    </section>
  );
};

export default Footer;

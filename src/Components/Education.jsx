import SectionTitle from "./SectionTitle";

const Education = () => {
  return (
    <section className=" mb-12 py-12 md:p-12 duration-300 md:mx-32 rounded-2xl shadow-xl">
      <SectionTitle heading={"Education"} />

      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-y-10 md:gap-10 my-20 text-white mx-8">
        <div
          data-aos="fade-up"
          data-aos-duration="3000"
          className="border-r-2 border-red-600 border-dotted md:py-14 px-8"
        >
          <div className="mb-10">
            <div
              data-aos="fade-right"
              className="bg-sky-600 py-1 relative z-30 before:absolute before:h-4 before:w-4 before:bg-sky-600 before:rounded-full before:top-[9px] before:-right-10 after:absolute after:h-[2px] after:w-10 after:bg-sky-600 after:rounded-full after:top-4 after:-right-9 rounded-xl"
            >
              <h3 className="text-2xl text-center font-medium">
                December 2021 - Completed
              </h3>
              <span className="absolute block h-8 w-8 bg-sky-600 top-[9px] left-5 rotate-45 -z-[5]"></span>
            </div>
            <div
              data-aos="fade-right"
              className="bg-sky-600 mt-5 p-5 rounded-xl"
            >
              <h2 className="text-xl font-semibold">
                Honours - Bsc Honour's in CSE
              </h2>
              <p className="italic text-lg font-medium">
                Model Institute of Science and Technology
              </p>
            </div>
          </div>
          <div>
            <div
              data-aos="fade-right"
              className="bg-red-500 py-1 relative z-30 before:absolute before:h-4 before:w-4 before:bg-red-500 before:rounded-full before:top-[9px] before:-right-10 after:absolute after:h-[2px] after:w-10 after:bg-red-500 after:rounded-full after:top-4 after:-right-9 rounded-xl"
            >
              <h3 className="text-2xl text-center font-medium">
                April 2016 - Completed
              </h3>
              <span className="absolute block h-8 w-8 bg-red-500 top-[9px] left-5 rotate-45 -z-[5]"></span>
            </div>
            <div
              data-aos="fade-right"
              className="bg-red-500 mt-5 p-5 rounded-xl"
            >
              <h2 className="text-xl font-semibold">
                HSC - Higher School Certificate
              </h2>
              <p className="italic text-lg font-medium">
                Konabari Ideal College
              </p>
            </div>
          </div>
        </div>
        <div
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
          className="border-l-2 border-sky-500 border-dotted md:py-14 px-8"
        >
          <div className="mb-10">
            <div
              data-aos="fade-left"
              className="bg-green-600 py-1 relative z-30 before:absolute before:h-4 before:w-4 before:bg-green-600 before:rounded-full before:top-[9px] before:-left-10 after:absolute after:h-[2px] after:w-10 after:bg-green-600 after:rounded-full after:top-4 after:-left-9 rounded-xl"
            >
              <h3 className="text-2xl text-center font-medium">
                December 2021 - Completed
              </h3>
              <span className="absolute block h-8 w-8 bg-bg-green-500 top-[9px] right-5 rotate-45 -z-[5]"></span>
            </div>
            <div
              data-aos="fade-left"
              className="bg-green-600 mt-5 p-5 rounded-xl"
            >
              <h2 className="text-xl font-semibold">Front End Developer </h2>
              <p className="italic text-lg font-medium">Programming Hero </p>
            </div>
          </div>
          <div>
            <div
              data-aos="fade-left"
              className="bg-orange-500 py-1 relative z-30 before:absolute before:h-4 before:w-4 before:bg-orange-500 before:rounded-full before:top-[9px] before:-left-10 after:absolute after:h-[2px] after:w-10 after:bg-orange-500 after:rounded-full after:top-4 after:-left-9 rounded-xl"
            >
              <h3 className="text-2xl text-center font-medium">
                June 2013 - Completed
              </h3>
              <span className="absolute block h-8 w-8 bg-bg-green-500 top-[9px] right-5 rotate-45 -z-[5]"></span>
            </div>

            <div
              data-aos="fade-left"
              className="bg-orange-500 mt-5 p-5 rounded-xl"
            >
              <h2 className="text-xl font-semibold">
                SSC- Secondary School Certificate
              </h2>
              <p className="italic text-lg font-medium">
                Shinaboho High School
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;

const Education = () => {
  return (
    <section className="bg-dark mb-12 p-6 md:p-12 duration-300">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-y-10 md:gap-10 duration-300">
        <div className="border-r border-red border-dotted md:py-14 px-8 duration-300">
          <div className="mb-10">
            <div className="bg-red py-1 relative z-30 before:absolute before:h-4 before:w-4 before:bg-red before:rounded-full before:top-[9px] before:-right-10 after:absolute after:h-[2px] after:w-10 after:bg-red after:rounded-full after:top-4 after:-right-9">
              <h3 className="text-white text-xl text-center">
                10 Mar 2023 - Current
              </h3>
              <span className="absolute block h-8 w-8 bg-red top-[9px] left-5 rotate-45 -z-[5]"></span>
            </div>

            <div className="bg-[#733cb8] mt-5 p-3 shadow-iconShadow hover:shadow-[#733cb8]/30 duration-300">
              <div className="text-white">
                <h2 className="text-xl">Honours - Bss Honour's in Economic</h2>
                <p className="text-white italic text-sm">
                  Ins: Narail Govt. Victoriya College
                </p>
              </div>
              <p className="text-gray line-clamp-2 mt-2">
                Keep eyes on all events and try to join those what related with
                you It will help you to stay updated and learn many things
              </p>
            </div>
          </div>

          <div>
            <div className="bg-blue py-1 relative z-30 before:absolute before:h-4 before:w-4 before:bg-blue before:rounded-full before:top-[9px] before:-right-10 after:absolute after:h-[2px] after:w-10 after:bg-blue after:rounded-full after:top-4 after:-right-9">
              <h3 className="text-white text-xl text-center">
                01 July 2022 - Completed
              </h3>
              <span className="absolute block h-8 w-8 bg-blue top-[9px] left-5 rotate-45 -z-[5]"></span>
            </div>

            <div className="bg-[#2C73D2] mt-5 p-3 shadow-iconShadow hover:shadow-[#2C73D2]/30 duration-300">
              <div className="text-white">
                <h2 className="text-xl">HSC - Higher School Certificate</h2>
                <p className="text-white italic text-sm">
                  Ins: Jatir Pita Bangabandgu Govt. College
                </p>
              </div>
              <p className="text-gray line-clamp-2 mt-2">
                Keep eyes on all events and try to join those what related with
                you It will help you to stay updated and learn many things
              </p>
            </div>
          </div>
        </div>

        <div className="border-l border-red border-dotted py-14 px-8">
          <div className="mb-10">
            <div className="bg-red py-1 relative z-30 before:absolute before:h-4 before:w-4 before:bg-red before:rounded-full before:top-[9px] before:-left-10 after:absolute after:h-[2px] after:w-10 after:bg-red after:rounded-full after:top-4 after:-left-9">
              <h3 className="text-white text-xl text-center">
                20 Nov 2021 - Completed
              </h3>
              <span className="absolute block h-8 w-8 bg-red top-[9px] right-5 rotate-45 -z-[5]"></span>
            </div>

            <div className="bg-[#733cb8] mt-5 p-3 shadow-iconShadow hover:shadow-[#733cb8]/30 duration-300">
              <div className="text-white">
                <h2 className="text-xl">MERN Stack Developer</h2>
                <p className="text-white italic text-sm">
                  Ins: Programming Hero
                </p>
              </div>
              <p className="text-gray line-clamp-2 mt-2">
                Keep eyes on all events and try to join those what related with
                you It will help you to stay updated and learn many things
              </p>
            </div>
          </div>

          <div>
            <div className="bg-[#01c3da] py-1 relative z-30 before:absolute before:h-4 before:w-4 before:bg-[#01c3da] before:rounded-full before:top-[9px] before:-left-10 after:absolute after:h-[2px] after:w-10 after:bg-[#01c3da] after:rounded-full after:top-4 after:-left-9">
              <h3 className="text-white text-xl text-center">
                01 June 2020 - Completed
              </h3>
              <span className="absolute block h-8 w-8 bg-[#01c3da] top-[9px] right-5 rotate-45 -z-[5]"></span>
            </div>

            <div className="bg-[#2C73D2] mt-5 p-3 shadow-iconShadow hover:shadow-[#2C73D2]/30 duration-300">
              <div className="text-white">
                <h2 className="text-xl">React JS Developer</h2>
                <p className="text-white italic text-sm">
                  Ins: Programming Hero
                </p>
              </div>
              <p className="text-gray line-clamp-2 mt-2">
                Keep eyes on all events and try to join those what related with
                you It will help you to stay updated and learn many things
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;

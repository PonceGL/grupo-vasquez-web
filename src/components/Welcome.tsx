import React from "react";
import Header from "./Header";
import MeetingTeamWork from "./IconsSVG/MeetingTeamWork";

const Welcome = () => {
  return (
    <section
      className="w-screen h-screen flex flex-col justify-start items-start bg-linear-gradient relative overflow-hidden xl:grid xl:grid-cols-2 xl:gap-x-8"
      id="welcome"
    >
      <Header />

      <div className="w-full p-4 flex flex-col justify-start items-start relative z-10 md:w-4/5 md:mx-auto md:mt-16 xl:mt-0">
        <h2 className="font-bold text-5xl text-white leading-[4rem] md:text-7xl">
          Asesoría y soluciones en sus diferentes divisiones
        </h2>

        <div className="w-full p-4 flex justify-around items-center relative z-10">
          <a
            href="#pillars-container"
            className="py-2 px-4 border-[1px] border-white bg-white text-[#092529] font-bold rounded-lg hover:bg-[#2BE8C0] outline-[#2BE8C0] transition-all duration-300"
          >
            Conócenos
          </a>

          <a
            href="#contact-us"
            className="py-2 px-4 border-[1px] border-[#2BE8C0] text-[#2BE8C0] font-bold rounded-lg hover:border-white hover:text-white outline-white transition-all duration-300"
          >
            Contáctanos
          </a>
        </div>
      </div>

      <div className="w-[250px] absolute bottom-6 right-6 z-[1] md:w-[400px] md:bottom-14 md:right-14">
        <MeetingTeamWork />
        <div className="w-[200%] aspect-square absolute -top-1/2 -left-1/2 bg-gradient-radial z-[-1]"></div>
      </div>
    </section>
  );
};

export default Welcome;

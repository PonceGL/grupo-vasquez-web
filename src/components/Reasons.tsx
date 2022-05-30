import React from "react";
import Chart from "./IconsSVG/Chart";

const Reasons = () => {
  return (
    <section className="w-full p-4 relative md:my-16 lg:py-16">
      <div className="w-full flex flex-col justify-start items-center relative z-10 md:flex-row md:justify-between lg:grid lg:grid-cols-2 lg:gap-4">
        <div className="w-4/5 md:scale-150 md:-translate-x-16 lg:-translate-x-32 lg:w-full xl:scale-100 xl:-translate-x-0">
          <Chart />
        </div>

        <div className="w-full mt-4 flex flex-col justify-start items-center md:mt-0 md:ml-4 lg:ml-0">
          <h4 className="w-[90%] font-bold text-4xl text-[#267984] md:text-6xl lg:w-full xl:text-7xl">
            Con más de 500 proyectos realizados en más de 20 años.
          </h4>
          <p className="w-full mt-8 text-center text-[#267984] lg:text-left">
            Seguimos ofreciendo resultados y modernizándonos para ofrecer
            siempre el mejor servicio.
          </p>
        </div>
      </div>

      <div className="w-full h-full max-h-52 grid grid-cols-3 absolute top-0 left-0 right-0 z-0 md:max-h-max">
        <div className="w-full h-full bg-[#348F98]"></div>
        <div className="w-full h-full bg-[#F8FEFC]"></div>
      </div>
    </section>
  );
};

export default Reasons;

import React from "react";
import IconTest from "./IconsSVG/IconTest";

// Data
import pillars from "../../data/pillars.json";

const Submission = () => {
  return (
    <section
      className="w-full p-4 mt-10 grid grid-cols-1 gap-4 justify-items-center md:grid-cols-3 md:gap-y-16"
      id="pillars-container"
    >
      <h3 className="font-black text-[#267984] text-lg md:text-2xl md:col-span-3">
        ¿Qué es Grupo Empresarial Vásquez?
      </h3>
      {pillars.length > 0 && (
        <>
          {pillars.map(({ title, description }) => (
            <div
              key={title}
              className="w-full p-4 flex flex-col justify-start items-center md:p-0"
            >
              <div className="w-14 h-14 flex justify-center items-center">
                <IconTest />
              </div>
              <h4 className="my-4 font-black text-[#267984] text-base">
                {title}
              </h4>
              <p className="text-center">{description}</p>
            </div>
          ))}
        </>
      )}
    </section>
  );
};

export default Submission;

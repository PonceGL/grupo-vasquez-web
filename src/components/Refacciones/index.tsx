import React, { FC } from "react";

// Components
import Contact from "../../common/Contact";
import RefaccionesImage from "../../public/assets/otros/Refacciones.jpg";

const Refacciones: FC = () => {
  return (
    <section
      className="w-full max-w-screen-2xl p-8 h-screen flex flex-col justify-around items-center bg-blue-900 z-[1] relative simple-shiny lg:pl-[25%]"
      id="Refacciones"
    >
      <h2
        className={`w-full text-center tracking-[-1.2px] text-white text-4xl font-aeonik_medium relative z-[1]`}
      >
        MANTENIMIENTO Y REFACCIONES GV
      </h2>
      <img
        src={RefaccionesImage.src}
        alt="Fotografia de Mantenimiento y Refacciones Vasquez"
        className={`w-full object-contain md:w-3/4`}
      />

      <p className="w-full text-center text-white font-sans">
        Herminio Cabañas Leon #241, Col. Rafael Lucio, c.p. 91110, Xalapa, Ver.
      </p>

      <div className="w-ful ">
        <Contact phone="2288442238" textColor="text-white" />
      </div>
    </section>
  );
};

export default Refacciones;

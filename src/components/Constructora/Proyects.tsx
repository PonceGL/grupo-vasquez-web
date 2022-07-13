import React, { FC } from "react";

// Components
import RippleLink from "../../common/RippleLink";

const Proyects: FC = () => {
  return (
    <div className="w-full p-8 flex flex-col justify-center items-start flex-wrap lg:pl-[25%]">
      <h2 className="w-full pb-2 text-left tracking-[-1.2px] text-3xl text-blue-900 font-aeonik_medium border-b-2 border-blue-900 relative z-[1] transition-bezier duration-100 lg:pl-8">
        CONOCE NUESTROS NOVEDOSOS PROYECTOS <br />{" "}
        <span className="text-lg">SIN DUDA CONTAMOS CON UNO A TU MEDIDA</span>
      </h2>
      <div className="w-full flex justify-between items-start ">
        <div className="w-1/2 m-4 mx-auto flex flex-col justify-start items-center md:w-2/6 lg:w-40">
          <a
            href="https://www.inmobiliariavasquez.mx/fraccionamiento/61c377063b886a7285c2a692"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Enlace a inmobiliariavasquez al fraccionamiento OJO DE AGUA"
            className="w-full aspect-square flex flex-col justify-center items-center"
          >
            <div className="w-full h-full bg-slate-400 rounded-lg" />
          </a>

          <p className="w-full text-xl text-center font-sans font-semibold">
            OJO DE AGUA
          </p>
          <p className="w-full text-base text-center">
            Llegó el momento, eleva tu estilo de vida
          </p>
        </div>
      </div>

      <div className="w-full my-8 md:w-1/2 md:mx-auto lg:w-2/6">
        <p className="w-full text-2xl text-center text-blue-900 font-sans font-semibold underline">
          ¿Deseas vender tu casa o terreno?
        </p>
        <RippleLink
          label="HAZLO DESDE AQUÍ"
          url="https://www.inmobiliariavasquez.mx/vende-tu-propiedad"
        />
      </div>
    </div>
  );
};

export default Proyects;

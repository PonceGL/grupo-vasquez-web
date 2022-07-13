import React, { FC } from "react";

// Logotipos
import LogoTransportesTira from "../../public/assets/logos/transportes-1.png";
import hydeImage from "../../public/assets/logos/hyde.png";
import LogoMateriales from "../../public/assets/logos/materiales.png";
import LogoCivsa from "../../public/assets/logos/civsa.png";
import paqueteriaMJM from "../../public/assets/logos/paqueteria-mjm.png";

const LogoContainer: FC = () => {
  return (
    // <div className="w-full p-4 pb-8 flex flex-wrap justify-between items-start bg-zinc-200 container-welcome-logos">
    <div className="w-full p-4 pb-8 grid grid-cols-3 gap-2 place-items-center bg-zinc-200 container-welcome-logos md:p-6 lg:grid-cols-5 lg:p-8 lg:pl-[25%] xl:p-4 xl:pl-[25%]">
      <a
        href="#Transportes"
        aria-label="Enlace a la sección de transportes"
        className="col-span-2 w-full h-16 flex justify-center items-center md:h-20 lg:col-span-1 xl:h-16"
      >
        <img
          src={LogoTransportesTira.src}
          alt="Logotipo de TRANSPORTES VASQUEZ SA de CV"
          className="w-full h-full object-contain"
        />
      </a>
      <a
        href="#HydeSalon"
        aria-label="Enlace a la sección de Hyde Salon"
        className="w-full h-16 flex justify-center items-center md:h-20 xl:h-16"
      >
        <img
          src={hydeImage.src}
          alt="Logotipo de Hyde Salon"
          className="w-full h-full object-contain"
        />
      </a>
      <a
        href="#Materiales"
        aria-label="Enlace a la sección de Materiales Vasquez"
        className="w-full h-12 flex justify-center items-center md:h-16 xl:h-16"
      >
        <img
          src={LogoMateriales.src}
          alt="Logotipo de MATERIALES VÁSQUEZ HNOS SA DE CV"
          className="w-full h-full object-contain"
        />
      </a>
      <a
        href="#Constructora"
        aria-label="Enlace a la sección de las Constructoras Vazquez"
        className="w-full h-10 flex justify-center items-center md:h-12 xl:h-16"
      >
        <img
          src={LogoCivsa.src}
          alt="Logotipo de TRANSPORTES VASQUEZ SA de CV"
          className="w-full h-full object-contain"
        />
      </a>

      <a
        href="#MJMPAqueteria"
        aria-label="La selección de Transportes MJM"
        className="w-full h-12 flex justify-center items-center  md:h-16 xl:h-16"
      >
        <img
          src={paqueteriaMJM.src}
          alt="Logotipo de Transportes MJM"
          className="w-full h-full object-contain"
        />
      </a>
    </div>
  );
};

export default LogoContainer;

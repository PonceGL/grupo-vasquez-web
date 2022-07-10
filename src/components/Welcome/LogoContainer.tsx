import React, { FC } from "react";

// Logotipos
import LogoTransportesTira from "../../public/assets/logos/transportes-1.png";
import hydeImage from "../../public/assets/logos/hyde.png";
import LogoMateriales from "../../public/assets/logos/materiales.png";
import LogoCivsa from "../../public/assets/logos/civsa.png";
import paqueteriaMJM from "../../public/assets/logos/paqueteria-mjm.png";

const LogoContainer: FC = () => {
  return (
    <div className="w-full p-4 pb-8 flex flex-wrap justify-between items-start bg-zinc-200 container-welcome-logos">
      <a
        href="#Transportes"
        aria-label="Enlace a la sección de transportes"
        className="max-w-[50%] h-16 mx-3 my-1"
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
        className="max-w-[50%] h-16 mx-3 my-1"
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
        className="max-w-[30%] h-12 mx-3 my-1"
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
        className="max-w-[30%] h-10 mx-3 my-1 "
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
        className="max-w-[30%] h-12 mx-3 my-1 "
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

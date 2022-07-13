import React, { FC } from "react";

// Components
import Service from "./Service";

const Services: FC = () => {
  return (
    <div className="w-full flex flex-col justify-start items-center lg:flex-row">
      <Service
        icon="icon-container"
        translate="iconsmjm1"
        message="Envíos urgentes o programados"
        animate="animate-fadeInLeft"
      />
      <Service
        icon="icon-formas_de_pago -rotate-12"
        translate="iconsmjm2"
        message="Diferentes formas de pago"
        animate="animate-fadeInRight"
      />
      <Service
        icon="envios_todos_tamaños"
        translate="iconsmjm3"
        message="Envíos de todos los tamaños"
        animate="animate-fadeInBottom"
      />
    </div>
  );
};

export default Services;

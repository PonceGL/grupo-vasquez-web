import React, { FC } from "react";

// Components
import Service from "./Service";

const Services: FC = () => {
  return (
    <div className="w-full flex flex-col justify-start items-center">
      <Service
        icon="icon-container"
        translate="-translate-x-10"
        message="Envíos urgentes o programados"
        animate="animate-fadeInLeft"
      />
      <Service
        icon="icon-formas_de_pago -rotate-12"
        translate="translate-x-20"
        message="Diferentes formas de pago"
        animate="animate-fadeInRight"
      />
      <Service
        icon="envios_todos_tamaños"
        translate="-translate-x-4"
        message="Envíos de todos los tamaños"
        animate="animate-fadeInBottom"
      />
    </div>
  );
};

export default Services;

import React, { FC } from "react";

// Components
import VisionListItem from "./VisionListItem";

const MisionValores: FC = () => {
  return (
    <div className="w-full mt-8 p-8 flex flex-col justify-start items-start">
      <p className="mt-4 font-sans font-semibold text-white text-xl underline">
        MISIÓN
      </p>
      <p className="font-sans text-neutral-200 text-base">
        Formar un equipo de calidad porque estamos convencidos que solo gente
        profesional pueden ofrecer un servicio adecuado, soportando nuestro
        desarrollo en un proceso de mejora continua con el objetivo de brindar
        <strong className="font-normal"> EL MEJOR SERVICIO de carga</strong> a
        nivel nacional equilibrando una justa rentabilidad para garantizar un
        crecimiento solidó y continuo.
      </p>
      <p className="mt-4 font-sans font-semibold text-white text-xl underline">
        VISIÓN
      </p>
      <p className="font-sans text-neutral-200 text-base">
        Siendo el transporte de carga una necesidad fundamental de la sociedad
        requiere integrarse al cambio y crecimiento tecnológico a fin de brindar
        al cliente un servicio que proporcione:
      </p>
      <ul>
        <VisionListItem text="Seguridad: su mercancía tiene un valor económico y moral que pudiera representar su sostenimiento" />
        <VisionListItem text="Arraigo: Un cliente satisfecho, siempre será un cliente permanente" />
        <VisionListItem text="Oportunidad: brindar un servicio en el que la carga transportada llegue a su destino en el tiempo establecido" />
        <VisionListItem text="Cambio: involucrar a nuestros clientes en nuestro crecimiento y desarrollo brindándoles la oportunidad de orientarlos en nuestros sistemas actuales de trabajo." />
        <VisionListItem text="Precio Justo: El valor de un servicio lo rige el precio justo garantizando la confiabilidad y rentabilidad." />
      </ul>
    </div>
  );
};
export default MisionValores;

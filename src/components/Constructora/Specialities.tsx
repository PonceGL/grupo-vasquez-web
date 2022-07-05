import React, { FC } from "react";

const Specialities: FC = () => {
  return (
    <div className="mt-8 p-8">
      <h4 className="mt-4 font-sans font-semibold text-xl">
        SOMOS ESPECIALISTAS EN:
      </h4>
      <ul>
        <li className="my-2 text-base font-sans uppercase list-disc">
          <strong className="font-semibold">Urbanización</strong>
        </li>
        <li className="my-2 text-base font-sans uppercase list-disc">
          <strong className="font-semibold">Construcción Residencial</strong>
        </li>
        <li className="my-2 text-base font-sans uppercase list-disc">
          <strong className="font-semibold">Movimiento de Tierras</strong>
        </li>
        <li className="my-2 text-base font-sans uppercase list-disc">
          <strong className="font-semibold">
            Pavimentación concreto Asfaltico e Hidráulico
          </strong>
        </li>
        <li className="my-2 text-base font-sans uppercase list-disc">
          <strong className="font-semibold">
            Líneas de Conducción de Agua
          </strong>
        </li>
        <li className="my-2 text-base font-sans uppercase list-disc">
          <strong className="font-semibold">Tanques Elevados</strong>
        </li>
        <li className="my-2 text-base font-sans uppercase list-disc">
          <strong className="font-semibold">Drenaje Sanitario</strong>
        </li>
        <li className="my-2 text-base font-sans uppercase list-disc">
          <strong className="font-semibold">Drenaje Pluvial</strong>
        </li>
        <li className="my-2 text-base font-sans uppercase list-disc">
          <strong className="font-semibold">
            Remodelación Casa Habitación
          </strong>
        </li>
        <li className="my-2 text-base font-sans uppercase list-disc">
          <strong className="font-semibold">
            Mantenimiento Centros de Salud
          </strong>
        </li>
        <li className="my-2 text-base font-sans uppercase list-disc">
          <strong className="font-semibold">Puentes</strong>
        </li>
      </ul>
    </div>
  );
};

export default Specialities;

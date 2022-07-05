import React, { FC, RefObject } from "react";

// Components
import Logo from "../../public/assets/logos/materiales.png";

// Interface's
interface Props {
  refElement: RefObject<HTMLHeadingElement>;
  isOnScreen: boolean;
}

const imageUrl =
  "https://images.unsplash.com/photo-1653203187698-530a34a80ba5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80";

const SecondElement: FC<Props> = ({ refElement, isOnScreen }) => {
  return (
    <div className="w-full min-h-[95vh] mb-24 p-2 pb-0 flex flex-col justify-start items-start relative border-[1px] border-sky-800 border-opacity-40">
      <h2
        ref={refElement}
        className={`text-left tracking-[-1.2px] text-sky-800 text-4xl font-aeonik_medium translate-y-4 relative z-[1] opacity-0 ${
          isOnScreen && "animate-fadeInLeft"
        }`}
      >
        MATERIALES VÁSQUEZ HNOS <br /> SA DE CV
      </h2>
      <img
        src={Logo.src}
        alt="Logotipo de MATERIALES VÁSQUEZ HNOS SA DE CV"
        className="w-1/2 mt-4 mx-auto"
      />
      <div className="mt-8 text-sky-800">
        <h4 className="text-left text-lg font-sans font-bold">
          MANEJAMOS PRODUCTOS EN
        </h4>
        <ul>
          <li className="my-2 text-base font-sans">
            <strong className="font-semibold">FERRETERIA</strong>
          </li>
          <li className="my-2 text-base font-sans">
            <strong className="font-semibold">OBRA NEGRA</strong>
          </li>
          <li className="my-2 text-base font-sans">
            <strong className="font-semibold">MUEBLES</strong>
          </li>
          <li className="my-2 text-base font-sans">
            <strong className="font-semibold">ACABADOS</strong>
          </li>
          <li className="my-2 text-base font-sans">
            <strong className="font-semibold">HOGAR</strong>
          </li>
          <li className="my-2 text-base font-sans">
            <strong className="font-semibold">AGREGADOS</strong>
          </li>
        </ul>
      </div>

      <div className="w-[70%] flex justify-center items-center absolute bottom-0 -right-20 z-[0]">
        {/* <div className="w-[70%] ml-auto flex justify-center items-center translate-x-14"> */}
        <h4 className="tracking-[-1.2px] text-sky-800 text-base font-aeonik_medium capitalize underline z-[1] -rotate-90 absolute origin-left bottom-0 -left-4">
          {`SUCURSAL LAZARO CARDENAS`.toLocaleLowerCase()}
        </h4>
        <img
          src={imageUrl}
          alt={`Imagen Grupo Vasquez`}
          className="w-full object-contain shadow-xl relative z-[0]"
        />
      </div>
    </div>
  );
};

export default SecondElement;

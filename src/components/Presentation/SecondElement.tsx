import React, { FC, RefObject } from "react";

// Interface's
interface Props {
  refElement: RefObject<HTMLHeadingElement>;
  isOnScreen: boolean;
}

const imageUrl =
  "https://res.cloudinary.com/duibtuerj/image/upload/v1630682519/brand/tiendas/L%C3%A1zaro-C%C3%A1rdenas.jpg";

const SecondElement: FC<Props> = ({ refElement, isOnScreen }) => {
  return (
    <div className="w-full min-h-[50vh] mb-24 p-2 relative border-[1px] border-neutral-300 border-opacity-40">
      <h2
        ref={refElement}
        className={`text-left tracking-[-1.2px] text-neutral-200 text-4xl font-aeonik_medium translate-y-4 relative z-[1] opacity-0 ${
          isOnScreen && "animate-fadeInLeft"
        }`}
      >
        MATERIALES VÁSQUEZ HNOS <br /> SA DE CV
      </h2>
      <div className="mt-4 text-neutral-200">
        <h4 className="text-left font-bold">MANEJAMOS PRODUCTOS EN</h4>
        <ul>
          <li className="my-2 text-base">FERRETERIA</li>
          <li className="my-2 text-base">OBRA NEGRA</li>
          <li className="my-2 text-base">MUEBLES</li>
          <li className="my-2 text-base">ACABADOS</li>
          <li className="my-2 text-base">HOGAR</li>
          <li className="my-2 text-base">AGREGADOS</li>
        </ul>
      </div>
      <div className="w-[70%] flex justify-center items-center absolute top-52 -right-20 z-[0]">
        <h4 className="tracking-[-1.2px] text-neutral-200 text-xl font-aeonik_medium capitalize underline z-[1] -rotate-90 absolute origin-left bottom-0 -left-4">
          {`SUCURSAL LAZARO CARDENAS`.toLocaleLowerCase()}
        </h4>
        <img
          src={imageUrl}
          alt={`Imagen Grupo Vasquez`}
          className="w-full object-contain relative z-[0]"
        />
      </div>
    </div>
  );
};

export default SecondElement;

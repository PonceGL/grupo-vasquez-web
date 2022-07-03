import React, { FC, useRef } from "react";

// Hooks
import { useIntersectionObserver } from "../../hooks/useIntersectionObserver";

// Components
import FirstText from "./FirstText";
import SecondElement from "./SecondElement";
import ContactMV from "./ContactMV";
import Branches from "../Branches";

const Presentation: FC = () => {
  const element = useRef<HTMLHeadingElement>(null);
  const isOnScreen = useIntersectionObserver(element);

  return (
    <section className="w-full bg-sky-800 z-[1] relative">
      <FirstText />
      <div className="w-full p-8 flex overflow-x-hidden">
        <SecondElement refElement={element} isOnScreen={isOnScreen} />
      </div>
      <ContactMV />
      <Branches
        name="SUCURSAL BANDERILLA"
        address="Carretera nacional xalapa-banderilla s/n km. 2, col. centro, banderilla, ver."
        imageUrl="https://res.cloudinary.com/duibtuerj/image/upload/v1630682646/brand/tiendas/Banderilla.jpg"
        styles="w-full mb-8 flex flex-col justify-start items-center relative"
        styleText="px-8"
      />
      <div className="w-full p-4 pt-0 relative">
        <Branches
          name="SUCURSAL LAZARO CARDENAS"
          address="Av. lazaro cardenas #274. col. encinal, c.p. 91180, xalapa, ver."
          imageUrl="https://res.cloudinary.com/duibtuerj/image/upload/v1634687366/brand/tiendas/homcenter1_gibctf.jpg"
          styles="w-full mb-4 flex justify-start items-center relative"
          styleContent="w-full grid grid-cols-4 gap-4"
          styleTitle="col-span-4 text-center"
          styleImage="col-start-1 col-span-2"
          styleText="col-start-3 col-span-2"
          animate="animate-fadeInLeft"
        />
        <Branches
          name="SUCURSAL MARGARITA OLIVO"
          address="Carretera xalapa-castillo #201, col. la tranca, c.p. 91165, xalapa, ver."
          imageUrl="https://res.cloudinary.com/duibtuerj/image/upload/v1630682681/brand/tiendas/Margarita-Olivo.jpg"
          styles="w-3/4 mb-12 ml-auto flex flex-col justify-start items-center relative"
          animate="animate-fadeInRight"
        />
        <div className="w-full justify-between items-start relative z-[1]">
          <Branches
            name="SUCURSAL CASTILLO"
            address="Carretera xalapa-castillo #201, col. la tranca, c.p. 91165, xalapa, ver."
            imageUrl="https://res.cloudinary.com/duibtuerj/image/upload/v1634687364/brand/tiendas/CASTILLO_wvricm.jpg"
            styles="w-1/2 mb-4 mr-auto flex flex-col justify-start items-center relative -translate-y-10"
            styleImage="w-3/4 mr-auto mb-2 object-contain relative z-[0]"
            animate="animate-fadeInLeft"
          />
        </div>
      </div>

      <div className="w-full h-64 opacity-50 absolute bottom-0 branch-svg z-0" />
    </section>
  );
};

export default Presentation;

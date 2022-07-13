import React, { FC, useRef } from "react";

// hooks
import { useIntersectionObserver } from "../../hooks/useIntersectionObserver";

// Components
import hydeImage from "../../public/assets/logos/hyde.png";

const Presentation: FC = () => {
  const element = useRef<HTMLDivElement>(null);
  const isOnScreen = useIntersectionObserver(element);

  return (
    <div
      ref={element}
      className="w-full flex flex-col justify-start items-center relative z-[1]"
    >
      <img
        src={hydeImage.src}
        alt="Logotipo de Hyde Salon"
        className={`w-full mb-8 opacity-0 ${
          isOnScreen && "animate-fadeInRight"
        } md:w-1/2 md:ml-auto lg:w-96`}
      />

      <h2
        className={`w-full my-8 text-center tracking-[-1.2px] text-[#532A09] text-xl font-aeonik_medium md:text-2xl`}
      >
        PARA LOS MEJORES EVENTOS, <br /> EL MEJOR SALON
      </h2>
    </div>
  );
};

export default Presentation;

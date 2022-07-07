import React, { FC, useRef } from "react";

// hooks
import { useIntersectionObserver } from "../../hooks/useIntersectionObserver";

// Components
import hydeImage from "../../public/assets/logos/hyde.png";

const Presentation: FC = () => {
  const element = useRef<HTMLDivElement>(null);
  const isOnScreen = useIntersectionObserver(element);

  return (
    <div ref={element} className="w-full relative z-[1]">
      <img
        src={hydeImage.src}
        alt="Logotipo de Hyde Salon"
        className={`w-full mb-8 opacity-0 ${
          isOnScreen && "animate-fadeInRight"
        }`}
      />

      <h2
        className={`w-full my-8 text-center tracking-[-1.2px] text-[#532A09] text-xl font-aeonik_medium`}
      >
        PARA LOS MEJORES EVENTOS, <br /> EL MEJOR SALON
      </h2>
    </div>
  );
};

export default Presentation;

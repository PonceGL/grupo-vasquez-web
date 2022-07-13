import React, { FC, useRef, RefObject } from "react";

// hooks
import { useIntersectionObserver } from "../../hooks/useIntersectionObserver";

// Components
import paqueteriaMJM from "../../public/assets/logos/paqueteria-mjm.png";

interface Props {
  refElement: RefObject<HTMLImageElement>;
}

const Presentation: FC<Props> = ({ refElement }) => {
  const element = useRef<HTMLDivElement>(null);
  const isOnScreen = useIntersectionObserver(element);

  return (
    <div ref={element} className="w-10/12 mx-auto">
      <img
        ref={refElement}
        src={paqueteriaMJM.src}
        alt="Logotipo de Transportes MJM"
        className={`w-full mb-8 opacity-0 ${
          isOnScreen && "animate-fadeInBottom"
        } md:w-1/2 md:mx-auto`}
      />
    </div>
  );
};

export default Presentation;

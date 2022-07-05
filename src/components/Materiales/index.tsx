import React, { FC, useRef } from "react";

// Hooks
import { useIntersectionObserver } from "../../hooks/useIntersectionObserver";

// Components
import FirstText from "./FirstText";
import SecondElement from "./SecondElement";
import SwiperBranch from "../../common/SwiperBranch";
import ContactMV from "../../common/Contact";

const Materiales: FC = () => {
  const element = useRef<HTMLHeadingElement>(null);
  const isOnScreen = useIntersectionObserver(element);

  // sky-800

  return (
    <section className="w-full pb-8 bg-zinc-200 z-[1] relative" id="Materiales">
      <FirstText />
      <div className="w-full p-8 flex overflow-x-hidden">
        <SecondElement refElement={element} isOnScreen={isOnScreen} />
      </div>
      <SwiperBranch />

      <ContactMV
        phone="228 840 1919"
        web="www.materialesvasquezhnos.com.mx"
        textColor="text-sky-800"
      />
    </section>
  );
};

export default Materiales;

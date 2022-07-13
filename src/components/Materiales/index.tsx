import React, { FC, useRef, RefObject } from "react";

// Hooks
import { useIntersectionObserver } from "../../hooks/useIntersectionObserver";

// Components
import FirstText from "./FirstText";
import SecondElement from "./SecondElement";
import SwiperBranch from "../../common/SwiperBranch";
import ContactMV from "../../common/Contact";

interface Props {
  refSection: RefObject<HTMLElement>;
}

const Materiales: FC<Props> = ({ refSection }) => {
  const element = useRef<HTMLHeadingElement>(null);
  const isOnScreen = useIntersectionObserver(element);

  return (
    <section
      ref={refSection}
      className="w-full max-w-screen-2xl pb-8 bg-zinc-200 z-[1] relative lg:pl-[25%]"
      id="Materiales"
    >
      <FirstText />
      <div className="w-full p-8 flex overflow-x-hidden lg:pl-0">
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

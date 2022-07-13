import React, { FC, RefObject } from "react";

// Components
import Logotipos from "./Logotipos";
import Video from "./Video";
import Specialities from "./Specialities";
import Proyects from "./Proyects";
import Contact from "../../common/Contact";

interface Props {
  refSection: RefObject<HTMLElement>;
}

const Constructora: FC<Props> = ({ refSection }) => {
  return (
    <section
      ref={refSection}
      className="w-full max-w-screen-2xl pt-16 pb-40 bg-neutral-100 z-[1] relative overflow-hidden lg:pt-32"
      id="Constructora"
    >
      <div className="w-full flex justify-center items-center lg:w-1/2 lg:bg-neutral-100 lg:bg-opacity-60 lg:absolute lg:left-[25%] lg:top-[30rem] lg:z-20 xl:top-[40rem]">
        <Logotipos />
      </div>
      <Video />
      <Specialities />
      <Proyects />
      <div className="w-full justify-center items-center lg:pl-[25%]">
        <Contact
          phone="228 290 3272"
          web="www.inmobiliariavasquez.mx"
          textColor="text-blue-900"
        />
      </div>
    </section>
  );
};

export default Constructora;

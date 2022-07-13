import React, { FC } from "react";

// Components
import Presentation from "./Presentation";
import Pillars from "./Pillars";
import Logotipos from "./Logotipos";
import MisionValores from "./MisionValores";
import Clients from "./Clients";
import Contact from "../../common/Contact";

const Transportes: FC = () => {
  return (
    <section
      className="w-full max-w-screen-2xl pt-32 bg-regal-blue z-[1] relative lg:pl-[25%]"
      id="Transportes"
    >
      <Presentation />
      <Pillars />
      <Logotipos />
      <MisionValores />
      <Clients />

      <div className="w-full px-8">
        <Contact
          phone="228 155 0849"
          textColor="text-neutral-200"
          addStyles="px-0 py-4"
        />
      </div>
      <div className="w-full h-80 absolute bottom-0 right-0 z-[-1] branch-svg-curved-lines opacity-50 lg:h-[40rem]" />
    </section>
  );
};

export default Transportes;

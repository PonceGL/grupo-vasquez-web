import React, { FC } from "react";

// Components
import Presentation from "./Presentation";
import Pillars from "./Pillars";
import MisionValores from "./MisionValores";
import Contact from "../../common/Contact";
import Logotipos from "./Logotipos";
import Clients from "./Clients";

const Transportes: FC = () => {
  return (
    <section
      className="w-full p-8 pt-32 bg-regal-blue z-[1] relative"
      id="Transportes"
    >
      <Presentation />
      <Pillars />
      <Logotipos />
      <MisionValores />
      <Clients />

      <Contact
        phone="228 155 0849"
        textColor="text-neutral-200"
        addStyles="px-0 py-4"
      />
      <div className="w-full h-80 absolute bottom-0 right-0 z-[-1] branch-svg-curved-lines opacity-50" />
    </section>
  );
};

export default Transportes;

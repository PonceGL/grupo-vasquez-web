import React, { FC } from "react";

// Components
import Logotipos from "./Logotipos";
import Video from "./Video";
import Specialities from "./Specialities";
import Proyects from "./Proyects";
import Contact from "../../common/Contact";

const Constructora: FC = () => {
  return (
    <section
      className="w-full pt-16 pb-40 bg-neutral-100 z-[1] relative overflow-hidden"
      id="Constructora"
    >
      <Logotipos />
      <Video />
      <Specialities />
      <Proyects />
      <Contact
        phone="228 290 3272"
        web="www.inmobiliariavasquez.mx"
        textColor="text-blue-900"
      />
    </section>
  );
};

export default Constructora;

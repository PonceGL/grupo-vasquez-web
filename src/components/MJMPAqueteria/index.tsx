import React, { FC, RefObject } from "react";

// Components
import Presentation from "./Presentation";
import Services from "./Services";
import Description from "./Description";
import Contact from "../../common/Contact";

interface Props {
  refElement: RefObject<HTMLImageElement>;
}

const MJMPAqueteria: FC<Props> = ({ refElement }) => {
  return (
    <section
      className="w-full min-h-screen bg-neutral-100 z-[1] relative overflow-hidden bg-gradient-to-t from-orange-400 via-neutral-100 to-neutral-100"
      id="MJMPAqueteria"
    >
      <Presentation refElement={refElement} />
      <Services />
      <Description />
      <div className="w-full p-8">
        <Contact
          phone="2284880786"
          textColor="text-[#005490]"
          web="mjmpaqueteria.com"
        />
      </div>
    </section>
  );
};

export default MJMPAqueteria;

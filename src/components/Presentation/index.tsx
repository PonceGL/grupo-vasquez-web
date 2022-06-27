import React, { FC } from "react";

// Components
import FirstText from "./FirstText";
import SecondElement from "./SecondElement";

const Presentation: FC = () => {
  return (
    <section className="w-full p-8 bg-[#016e83] z-[1]">
      <FirstText />
      <SecondElement />
    </section>
  );
};

export default Presentation;

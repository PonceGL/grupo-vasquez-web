import React, { FC } from "react";

// Components
import Presentation from "./Presentation";
import SwiperHydeSalon from "../../common/SwiperHydeSalon";

interface Props {
  isOnScreen: boolean;
}

const HydeSalon: FC<Props> = ({ isOnScreen }) => {
  return (
    <section
      className={`w-full pb-24 bg-neutral-100 relative overflow-hidden`}
      id="HydeSalon"
    >
      <Presentation />
      <SwiperHydeSalon />
      <div
        className={`absolute inset-0 z-[0] bg-gradient-to-t from-neutral-100 via-orange-200 to-transparent ease-linear duration-300 ${
          !isOnScreen ? "opacity-100" : "opacity-0"
        } ease-linear duration-700`}
      />
    </section>
  );
};

export default HydeSalon;

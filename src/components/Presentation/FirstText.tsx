import React, { FC } from "react";

// hooks
import { useWindowScroll } from "../../hooks/useWindowScroll";

const FirstText: FC = () => {
  const [scroll] = useWindowScroll();

  return (
    <p
      style={{
        transform: `translateY(-${(scroll / 8).toFixed(2)}px)`,
      }}
      className="text-neutral-300 text-lg leading-7 transition-bezier duration-150"
    >
      For over fifty years, DFDG Architecture has been enhancing the way people
      experience architecture and interior spaces. We thrive on breaking
      barriers and developing simple solutions to complex challenges.
    </p>
  );
};

export default FirstText;

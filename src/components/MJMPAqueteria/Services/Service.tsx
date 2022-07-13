import React, { FC, useRef } from "react";

// Hooks
import { useIntersectionObserver } from "../../../hooks/useIntersectionObserver";

interface Props {
  icon: string;
  translate: string;
  message: string;
  animate: string;
}

const Service: FC<Props> = ({ icon, translate, message, animate }) => {
  const element = useRef<HTMLDivElement>(null);
  const isOnScreen = useIntersectionObserver(element);

  return (
    <div
      className={`w-full flex flex-col justify-start items-center ${translate} lg:justify-around`}
    >
      <div
        ref={element}
        className={`w-28 h-28 ${icon} opacity-0 ${
          isOnScreen && animate
        } lg:w-20 lg:h-20`}
      />
      <p className="w-full py-2 text-center text-[#005490] font-sans font-semibold text-lg lg:mx-4">
        {message}
      </p>
    </div>
  );
};

export default Service;

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
    <div className={`flex flex-col justify-start items-center ${translate}`}>
      <div
        ref={element}
        className={`w-28 h-28 ${icon} opacity-0 ${isOnScreen && animate}`}
      />
      <p className="w-full py-2 text-center text-[#005490] font-sans font-semibold text-lg">
        {message}
      </p>
    </div>
  );
};

export default Service;

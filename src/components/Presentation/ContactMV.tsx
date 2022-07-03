import React, { FC, useRef } from "react";

// Hooks
import { useIntersectionObserver } from "../../hooks/useIntersectionObserver";

const ContactMV: FC = () => {
  const element = useRef<HTMLDivElement>(null);
  const isOnScreen = useIntersectionObserver(element);

  return (
    <div
      ref={element}
      className={` ${
        isOnScreen ? "w-8 h-24" : "w-full h-12"
      } m-0 bg-amber-100 sticky top-[15%] left-full z-[2] transition-bezier delay-200 duration-1000`}
    />
  );
};

export default ContactMV;

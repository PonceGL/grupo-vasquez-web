import React, { FC, useRef } from "react";

// Hooks
import { useIntersectionObserver } from "../../hooks/useIntersectionObserver";

const Pillars: FC = () => {
  const element = useRef<HTMLDivElement>(null);
  const isOnScreen = useIntersectionObserver(element);

  return (
    <div
      ref={element}
      className="w-full my-8 px-4 flex justify-between items-center md:my-12 md:justify-around"
    >
      <p
        style={
          isOnScreen
            ? {
                animation: "fadeInRight 1s ease-in 0s 1 normal forwards",
              }
            : {}
        }
        className={`w-fit font-sans text-neutral-200 text-lg opacity-0 ${
          isOnScreen && "animate-fadeInRight"
        } md:mx-4 md:text-3xl md:font-light`}
      >
        <strong>SERVICIO</strong>
      </p>
      <p
        style={
          isOnScreen
            ? {
                animation: "fadeInRight 1s ease-in 0.5s 1 normal forwards",
              }
            : {}
        }
        className={`w-fit font-sans text-neutral-200 text-lg opacity-0 ${
          isOnScreen && "animate-fadeInRight"
        } md:mx-4 md:text-3xl md:font-light`}
      >
        <strong>EXPERIENCIA</strong>
      </p>
      <p
        style={
          isOnScreen
            ? {
                animation: "fadeInRight 1s ease-in 1s 1 normal forwards",
              }
            : {}
        }
        className={`w-fit font-sans text-neutral-200 text-lg opacity-0 ${
          isOnScreen && "animate-fadeInRight"
        } md:mx-4 md:text-3xl md:font-light`}
      >
        <strong>SEGURIDAD</strong>
      </p>
    </div>
  );
};

export default Pillars;

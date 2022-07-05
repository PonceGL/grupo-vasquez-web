import React, { FC, useRef } from "react";

// Hooks
import { useIntersectionObserver } from "../../hooks/useIntersectionObserver";

const Pillars: FC = () => {
  const element = useRef<HTMLDivElement>(null);
  const isOnScreen = useIntersectionObserver(element);

  return (
    <div
      ref={element}
      className="w-full my-6 flex justify-between items-center"
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
        }`}
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
        }`}
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
        }`}
      >
        <strong>SEGURIDAD</strong>
      </p>
    </div>
  );
};

export default Pillars;

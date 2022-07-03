import React, { FC } from "react";

// hooks
import { useWindowScroll } from "../../hooks/useWindowScroll";

const imageUrl =
  "https://images.unsplash.com/photo-1592838064575-70ed626d3a0e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2236&q=80";

const Welcome: FC = () => {
  const [scroll] = useWindowScroll();

  return (
    <section className="w-screen h-[80vh] relative overflow-hidden z-[1]">
      <div className="w-full p-8 flex flex-col justify-end items-center absolute inset-0 z-[3]">
        <div
          style={{
            transform: `translateY(-${(scroll / 3).toFixed(2)}px)`,
          }}
          className="w-full h-[90%] flex flex-col justify-between items-start overflow-hidden transition-bezier duration-75"
        >
          <div className="w-full h-1/2 flex flex-col justify-end items-start overflow-hidden">
            <h2 className="flex flex-col justify-start items-start text-left tracking-[-1.2px] text-neutral-200 text-5xl font-aeonik_medium">
              <span className="translate-y-full animate-showTopText">
                Ofrecemos soluciones a tu medida en
              </span>
            </h2>
          </div>
          <div className="w-full h-1 bg-neutral-200 -translate-x-full animate-entryDivider" />

          <div className="w-full h-1/2 flex flex-col justify-start items-start overflow-hidden">
            <h2 className="flex flex-col justify-start items-start text-left tracking-[-1.2px] text-neutral-200 text-5xl font-aeonik_medium">
              <span className="-translate-y-full animate-showBottomText">
                nuestras distintas divisiones
              </span>
            </h2>
          </div>
        </div>
      </div>
      <div className="bg-regal-blue bg-opacity-80 absolute inset-0 z-[2]" />

      <div className="w-full h-full relative z-[0]">
        <img
          src={imageUrl}
          alt={`Imagen Grupo Vasquez`}
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
};

export default Welcome;

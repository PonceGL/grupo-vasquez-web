import React, { FC } from "react";

// hooks
import { useWindowScroll } from "../../hooks/useWindowScroll";

// Components
import LogoContainer from "./LogoContainer";

const imageUrl =
  "https://images.unsplash.com/photo-1592838064575-70ed626d3a0e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2236&q=80";

const Welcome: FC = () => {
  const [scroll] = useWindowScroll();

  return (
    <section className="w-full max-w-screen-2xl h-screen relative overflow-hidden z-[1]">
      <div className="w-full flex flex-col justify-end items-center absolute inset-0 z-[3] lg:items-end">
        <div
          style={{
            transform: `translateY(-${(scroll / 2).toFixed(2)}px)`,
          }}
          className="w-full h-[40vh] p-4 flex flex-col justify-end items-start overflow-hidden container-welcome-text md:w-3/5 md:h-[50vh] md:p-0 lg:w-1/2"
        >
          <div className="w-full h-3/5 flex flex-col justify-end items-start overflow-hidden">
            <h2 className="flex flex-col justify-start items-start text-left tracking-[-1.2px] text-neutral-50 welcome-text font-aeonik_medium">
              <span className="translate-y-full animate-showTopText">
                Ofrecemos soluciones a tu medida en
              </span>
            </h2>
          </div>
          <span className="w-full h-1 bg-neutral-50 -translate-x-full animate-entryDivider" />

          <div className="w-full h-2/5 flex flex-col justify-start items-start overflow-hidden">
            <h2 className="flex flex-col justify-start items-start text-left tracking-[-1.2px] text-neutral-50 welcome-text font-aeonik_medium">
              <span className="-translate-y-full animate-showBottomText">
                nuestras distintas divisiones
              </span>
            </h2>
          </div>
        </div>
        <LogoContainer />
      </div>
      <div className="w-full max-w-screen-2xl h-screen fixed top-0 z-[2] branch-svg-lines" />
      <div className="bg-blue-900 bg-opacity-30 absolute inset-0 z-[1] lg:bg-opacity-40" />
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

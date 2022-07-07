import React, { FC, useRef, useEffect, useState } from "react";

// hooks
import { useWindowScroll } from "../../hooks/useWindowScroll";
import { useIntersectionObserver } from "../../hooks/useIntersectionObserver";

// Components
import BgTrasnportes from "../../public/assets/otros/bg-trasnportes.jpeg";

const Presentation: FC = () => {
  const element = useRef<HTMLHeadingElement>(null);
  const isOnScreen = useIntersectionObserver(element);
  const [scroll] = useWindowScroll();
  const [thisScroll, setThisScroll] = useState<string>("0px");

  useEffect(() => {
    if (isOnScreen) {
      const windowHeight = window.outerHeight;
      let ratio = 2;
      if (windowHeight <= 896) {
        ratio = 2.08;
      }
      const multiplier = (windowHeight / 100) * ratio;
      const move = scroll / 100 - multiplier;
      setThisScroll(`-${(move * 10).toFixed(2)}px`);
    }
  }, [isOnScreen, scroll]);

  return (
    <div className="w-full h-72 p-8">
      <h2
        style={
          isOnScreen
            ? {
                transform: `translateY(${thisScroll})`,
              }
            : {}
        }
        ref={element}
        className={`text-right tracking-[-1.2px] text-neutral-200 text-3xl font-aeonik_medium relative z-[1]`}
      >
        TRANSPORTES VASQUEZ <br /> SA DE CV
      </h2>
      <img
        src={BgTrasnportes.src}
        alt="Fotografia de caminoes de TRANSPORTES VASQUEZ"
        className="w-full absolute top-40 left-0 z-0 opacity-80"
      />
    </div>
  );
};

export default Presentation;

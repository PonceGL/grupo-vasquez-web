import React, { FC, useRef, useEffect } from "react";

interface Props {
  mouseY: number;
  mouseX: number;
}

const CustomCursor: FC<Props> = ({ mouseY, mouseX }) => {
  const divRef = useRef<HTMLDivElement>(null);

  const moveCursor = (mouseY: number, mouseX: number) => {
    // const mouseY = e.clientY;
    // const mouseX = e.clientX;

    // console.log("mouseY => ", mouseY);

    if (divRef.current !== null) {
      divRef.current.style.transform = `translateY(${mouseY}px)`;
      divRef.current.style.transform = `translateX(${mouseX}px)`;
      // divRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
    }
  };

  useEffect(() => {
    if (divRef.current !== null) {
      console.log("mouseY => ", mouseY);
      console.log("mouseX => ", mouseX);
      moveCursor(mouseY, mouseX);
    }
  }, [mouseY, mouseX]);

  return (
    <div
      ref={divRef}
      className="hidden w-20 h-14  xl:flex justify-center items-center border border-white rounded-full bg-lime-500 bg-opacity-40 relative z-50"
    >
      <p className="w-full text-center text-white font-sans">Desliza</p>
    </div>
  );
};

export default CustomCursor;

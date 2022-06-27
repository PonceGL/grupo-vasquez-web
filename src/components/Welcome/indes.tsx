import React, { FC } from "react";
import Image from "next/image";

// Utils
import { shimmer } from "../../utils/shimmer";

// hooks
import { useWindowScroll } from "../../hooks/useWindowScroll";

const imageUrl =
  "https://images.unsplash.com/photo-1592838064575-70ed626d3a0e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2236&q=80";

const Welcome: FC = () => {
  const [scroll] = useWindowScroll();

  return (
    <section className="w-screen h-[80vh] relative overflow-hidden z-[1]">
      <div className="w-full p-8 flex flex-col justify-center items-center text-admin-light text-[1rem] absolute inset-0 z-[3]">
        <h2
          style={{
            transform: `translateY(-${(scroll / 4).toFixed(2)}px)`,
          }}
          className={`text-left tracking-[-1.2px] text-neutral-200 text-6xl font-aeonik_medium transition-bezier duration-75`}
        >
          Creating
          <br />
          Spaces for
          <br />a Lifetime
        </h2>
      </div>

      <div className="bg-[#003845] bg-opacity-70 absolute inset-0 z-[2]" />

      <div className="w-full h-full relative z-[0]">
        <Image
          src={imageUrl}
          alt={`Imagen Grupo Vasquez`}
          layout="fill"
          objectFit="cover"
          placeholder="blur"
          blurDataURL={shimmer()}
          priority
        />
      </div>
    </section>
  );
};

export default Welcome;

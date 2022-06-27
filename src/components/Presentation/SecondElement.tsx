import React, { FC } from "react";
import Image from "next/image";

// hooks
import { useWindowScroll } from "../../hooks/useWindowScroll";

// Utils
import { shimmer } from "../../utils/shimmer";

const imageUrl =
  "https://images.unsplash.com/photo-1600823921193-c388313a14a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80";
const imageUrlTwo =
  "https://images.unsplash.com/photo-1616432043562-3671ea2e5242?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80";

const SecondElement: FC = () => {
  const [scroll] = useWindowScroll();

  // console.log(((scroll - 600) / 1000).toFixed(2));

  return (
    <div className="w-full min-h-[70vh] relative">
      <h2 className="text-left tracking-[-1.2px] text-neutral-200 text-6xl font-aeonik_medium translate-y-4 relative z-[1]">
        Designed <br />
        To Last
      </h2>
      <div
        style={{
          transform: `translatex(${
            scroll > 600 ? ((scroll - 600) / 4).toFixed(2) : 0
          }px)`,
        }}
        className="w-full absolute -right-20 z-[0] transition-bezier duration-100"
      >
        <p className="text-neutral-200 font-sans font-bold -rotate-90 absolute bottom-14 -left-20">
          Las Choapas ----
        </p>
        <Image
          src={imageUrl}
          alt={`Imagen Grupo Vasquez`}
          layout="responsive"
          width={1470}
          height={980}
          objectFit="cover"
          placeholder="blur"
          blurDataURL={shimmer()}
          priority
        />
      </div>
      <div
        style={{
          transform: `translateY(-${
            scroll > 600 ? ((scroll - 600) / 4).toFixed(2) : 0
          }px)`,
        }}
        className="w-24 absolute left-2 bottom-4 z-[1] transition-bezier duration-75"
      >
        <Image
          src={imageUrlTwo}
          alt={`Imagen Grupo Vasquez`}
          layout="responsive"
          width={1287}
          height={1930}
          objectFit="cover"
          placeholder="blur"
          blurDataURL={shimmer()}
          priority
        />
      </div>
    </div>
  );
};

export default SecondElement;

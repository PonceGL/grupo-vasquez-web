import React, { FC, useRef } from "react";

// Hooks
import { useIntersectionObserver } from "../../hooks/useIntersectionObserver";

// interface's
interface Props {
  name: string;
  address: string;
  imageUrl: string;
  animate?: string;
  styles: string;
  styleContent?: string;
  styleText?: string;
  styleTitle?: string;
  styleImage?: string;
}

const Branches: FC<Props> = ({
  name,
  address,
  imageUrl,
  animate = "animate-fadeInBottom",
  styles,
  styleContent = "w-full flex flex-col justify-center items-center",
  styleText,
  styleImage = "w-full object-contain relative z-[0]",
  styleTitle = "mb-4",
}) => {
  const element = useRef<HTMLDivElement>(null);
  const isOnScreen = useIntersectionObserver(element);

  return (
    <div className={styles}>
      <div
        ref={element}
        className={`${styleContent} opacity-0 ${isOnScreen && animate}`}
      >
        <h4
          className={`${styleTitle} tracking-[1.2px] text-neutral-200 text-xl font-aeonik_medium capitalize underline z-[1]`}
        >
          {name.toLocaleLowerCase()}
        </h4>
        <img
          src={imageUrl}
          alt={`Imagen Grupo Vasquez`}
          className={styleImage}
        />
        <p className={`text-base text-neutral-200 font-notoSans ${styleText}`}>
          {address}
        </p>
      </div>
    </div>
  );
};

export default Branches;

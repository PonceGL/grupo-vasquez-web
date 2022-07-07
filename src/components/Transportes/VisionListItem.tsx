import React, { FC, useRef } from "react";

// Hooks
import { useIntersectionObserver } from "../../hooks/useIntersectionObserver";

interface Props {
  text: string;
}

const VisionListItem: FC<Props> = ({ text }) => {
  const element = useRef<HTMLLIElement>(null);
  const isOnScreen = useIntersectionObserver(element);

  if (text === "") {
    return null;
  }

  return (
    <>
      <li
        ref={element}
        className={`py-2 my-2 font-sans text-neutral-200 text-base list-disc relative ${
          isOnScreen && "animate-fadeInRight"
        }`}
      >
        <strong>{text.split(":")[0]}:</strong> {text.split(":")[1]}
        <span
          className={`w-full h-[2px] bg-neutral-200 rounded-sm absolute bottom-0 left-0 -translate-x-[150vw] ${
            isOnScreen && "animate-slideLine"
          }`}
        />
      </li>
    </>
  );
};

export default VisionListItem;

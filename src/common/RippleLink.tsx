import React, { FC, useEffect, useState, useRef } from "react";

interface Props {
  label: string;
  url: string;
}

const RippleLink: FC<Props> = ({ label, url }) => {
  const element = useRef<HTMLAnchorElement>(null);
  const [showRipples, setShowRipples] = useState<boolean>(false);

  const handleClick = (e: any) => {
    e.preventDefault();
    setShowRipples(true);
    setTimeout(() => {
      setShowRipples(false);
      window.open(url, "_blank");
    }, 500);
  };

  useEffect(() => {
    if (element.current) {
      const link = element.current;

      link.addEventListener("click", handleClick);
      return () => {
        link.removeEventListener("click", handleClick);
      };
    }
  }, [element]);

  return (
    <>
      <a
        ref={element}
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="my-4 py-3 px-8 flex justify-center items-center text-neutral-200 tracking-widest bg-gradient-to-r from-cyan-500 to-blue-500 rounded-3xl relative overflow-hidden"
      >
        {label}
        {showRipples && (
          <span className="w-screen aspect-square absolute left-0 bg-white bg-opacity-30 pointer-events-none rounded-full z-50 origin-center animate-ripples" />
        )}
      </a>
    </>
  );
};

export default RippleLink;

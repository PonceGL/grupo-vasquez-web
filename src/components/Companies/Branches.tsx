import React, { FC, useEffect, useState } from "react";
import IconLocation from "../IconsSVG/IconLocation";

interface Branch {
  name: string;
  addres: string;
  location: string;
}

interface Props {
  branches: Branch[];
}

const Branches: FC<Props> = ({ branches }) => {
  const [windowWidth, setWindowWidth] = useState(300);

  const handleResize = () => setWindowWidth(window.innerWidth);

  /* A hook that is used to detect the window size and change the gridTemplateColumns to 3 if the window
 size is greater than 1280px. */
  useEffect(() => {
    if (window) {
      window.addEventListener("resize", handleResize);

      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  return (
    <div
      className="w-full mt-8 flex justify-start items-center overflow-x-scroll hideScroll xl:mt-0 xl:justify-center"
      style={{ maxWidth: "100vw" }}
    >
      <ul
        className="w-fit py-2 grid grid-rows-1 gap-4"
        style={{
          gridTemplateColumns: `repeat(${
            windowWidth < 1280 ? branches.length : 3
          }, minmax(325px, 500px))`,
        }}
      >
        {branches.map(({ name, addres, location }) => (
          <a
            key={name}
            className="w-full py-4 grid grid-cols-12 rounded-xl shadow-xl xl:py-8"
            href={location}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="col-span-1 row-span-2 w-6 flex justify-center items-start">
              <IconLocation />
            </div>
            <p className="col-span-11 row-span-1 font-notoSans font-bold text-[#1C444C]">
              {name}
            </p>
            <p className="col-span-11 row-span-1 text-xs">{addres}</p>
          </a>
        ))}
      </ul>
    </div>
  );
};

export default Branches;

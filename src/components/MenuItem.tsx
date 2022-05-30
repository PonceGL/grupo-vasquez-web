import React, { FC } from "react";

interface Props {
  name: string;
  route: string;
}

const MenuItem: FC<Props> = ({ name, route }) => {
  return (
    <li className="w-full my-4 lg:w-fit lg:mx-0">
      <a
        href={`#${route.toLowerCase().replace(/ /g, "-")}`}
        className="w-full p-2 text-white text-[1.35rem] whitespace-nowrap capitalize hover:text-[#2BE8C0] outline-[#2BE8C0] transition-all duration-300 lg:p-1 lg:text-base"
      >
        {name.toLowerCase().replace(/ s.a. de c.v./, "")}
      </a>
    </li>
  );
};

export default MenuItem;

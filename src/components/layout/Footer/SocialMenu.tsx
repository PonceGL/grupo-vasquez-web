import React, { FC } from "react";

// Components
import { PhoneIcon } from "@heroicons/react/solid";
import { FacebookIcon } from "../../../common/SVG/FacebookIcon";
import { WhatsAppIcon } from "../../../common/SVG/WhatsAppIcon";

const SocialMenu: FC = () => {
  return (
    <ul className="w-full p-8 flex justify-around items-center bg-white shadow-2xl">
      <li className="w-9 h-9 flex justify-center items-center bg-sky-800 rounded-full">
        {/* target="_blank" rel="noopener noreferrer" */}
        <a href="#">
          <PhoneIcon
            className={`h-5 w-5 stroke-neutral-200 fill-neutral-200`}
            aria-hidden="true"
          />
        </a>
      </li>
      <li className="w-9 h-9 flex justify-center items-center bg-sky-800 rounded-full">
        <a href="#">
          <FacebookIcon />
        </a>
      </li>
      <li className="w-9 h-9 flex justify-center items-center bg-sky-800 rounded-full">
        <a href="#">
          <WhatsAppIcon />
        </a>
      </li>
    </ul>
  );
};

export default SocialMenu;

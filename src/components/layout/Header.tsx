import React, { FC, useState } from "react";
import Link from "next/link";

// Components
import LogoGrupo from "../../public/assets/logos/grupo-vasquez.png";
import { MenuAlt4Icon } from "@heroicons/react/outline";
import MobileMenu from "./Menu/MobileMenu";
import { PhoneIcon } from "@heroicons/react/solid";
import { FacebookIcon } from "../../common/SVG/FacebookIcon";
import { WhatsAppIcon } from "../../common/SVG/WhatsAppIcon";

const Header: FC = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  return (
    <header
      className={`w-full p-8 pb-0 absolute top-0 left-0 right-0 z-10`}
      id="header"
    >
      <div className="w-full flex justify-between items-center relative lg:flex-row-reverse">
        <Link href="/">
          <a
            className={`w-32 flex justify-center items-center md:w-40 lg:w-32`}
          >
            <img
              src={LogoGrupo.src}
              alt="Logotipo de GRUPO EMPRESARIAL VÁSQUEZ"
              className="w-full mx-auto"
            />
          </a>
        </Link>

        {/* target="_blank" rel="noopener noreferrer" */}
        <ul className="hidden w-60 p-8 lg:flex lg:justify-around lg:items-center">
          <li
            className={`w-9 h-9 flex justify-center items-center border border-neutral-50 rounded-full`}
          >
            <a href="#">
              <PhoneIcon
                className={`h-5 w-5 stroke-neutral-50 fill-neutral-50`}
                aria-hidden="true"
              />
            </a>
          </li>
          <li
            className={`w-9 h-9 flex justify-center items-center border border-neutral-50 rounded-full`}
          >
            <a
              href="https://www.facebook.com/empresarialvasquez"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FacebookIcon />
            </a>
          </li>
          <li
            className={`w-9 h-9 flex justify-center items-center border border-neutral-50 rounded-full`}
          >
            <a href="#">
              <WhatsAppIcon />
            </a>
          </li>
        </ul>

        <button
          className="h-14 w-14 flex justify-center items-center rounded-md focus:outline-none focus:ring-1 focus:ring-inset focus:ring-admin-primary lg:hidden"
          aria-label="Button for opening the menu"
          onClick={() => setMenuIsOpen(true)}
        >
          <MenuAlt4Icon
            className={`h-14 w-14 stroke-neutral-300`}
            aria-hidden="true"
          />
        </button>

        {/* Desktop Menu */}
      </div>
      {/* Mobile menu */}
      <MobileMenu menuIsOpen={menuIsOpen} setMenuIsOpen={setMenuIsOpen} />
    </header>
  );
};

export default Header;

import React, { FC, Dispatch, SetStateAction, useEffect } from "react";

// Components
import LogoGrupo from "../../../public/assets/logos/grupo-vasquez.png";
import { XIcon } from "@heroicons/react/outline";
import { PhoneIcon } from "@heroicons/react/solid";
import { FacebookIcon } from "../../../common/SVG/FacebookIcon";
import { WhatsAppIcon } from "../../../common/SVG/WhatsAppIcon";

interface Props {
  menuIsOpen: boolean;
  setMenuIsOpen: Dispatch<SetStateAction<boolean>>;
}

const companies = [
  {
    route: "Transportes",
    name: "Transportes Vasquez",
  },
  {
    route: "HydeSalon",
    name: "Hyde Salon",
  },
  {
    route: "Materiales",
    name: "Materiales Vasquez hnos",
  },
  {
    route: "Constructora",
    name: "Constructoras Vazquez",
  },
  {
    route: "MJMPAqueteria",
    name: "Transportes MJM",
  },
  {
    route: "ContactForm",
    name: "Contacto",
  },
];

const MobileMenu: FC<Props> = ({ menuIsOpen, setMenuIsOpen }) => {
  useEffect(() => {
    if (menuIsOpen) {
      document.body.style.width = "100vw";
      document.body.style.height = "100vh";
      document.body.style.overflow = "hidden";
    } else {
      document.body.removeAttribute("style");
    }
  }, [menuIsOpen]);

  const handleClick = (e: any, route: string) => {
    e.preventDefault();
    setMenuIsOpen(false);
    window.location.hash = route;
  };

  return (
    <div
      className={`${
        menuIsOpen ? "right-0 opacity-100" : "-right-full opacity-0"
      } w-screen flex justify-end items-start fixed top-0 z-[999] transition-all duration-500 ease-in-out lg:hidden`}
    >
      <div className="w-full h-screen menu-movile bg-regal-blue shadow-main relative z-20 md:w-1/2">
        <div className="w-full flex justify-between items-center relative z-[1]">
          <div className="w-32 flex justify-center items-center opacity-0">
            <img
              src={LogoGrupo.src}
              alt="Logotipo de GRUPO EMPRESARIAL VÁSQUEZ"
              className="w-full object-contain"
            />
          </div>
          <div className="h-14 w-14 flex justify-center items-center">
            <button
              className="h-14 w-14 flex justify-center items-center rounded-md focus:outline-none translate-x-2 focus:ring-1 focus:ring-inset focus:ring-admin-primary lg:hidden"
              aria-label="Button to close the menu"
              onClick={() => setMenuIsOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XIcon
                className={`h-14 w-14 stroke-neutral-200`}
                aria-hidden="true"
              />
            </button>
          </div>
        </div>

        <nav className="w-full h-1/2 flex flex-col relative z-[1]">
          <ul className="w-full h-full flex flex-col justify-between items-start">
            {companies.map(({ route, name }) => (
              <li
                key={route}
                className="w-full my-2 flex justify-start items-center"
              >
                <a
                  href={`#${route}`}
                  aria-label="Enlace a la sección de transportes"
                  className="text-left text-neutral-200 font-sans font-semibold text-2xl"
                  onClick={(e) => handleClick(e, route)}
                >
                  {name}
                </a>
              </li>
            ))}
          </ul>
          <ul className="w-full p-8 flex justify-around items-center">
            <li className="w-9 h-9 flex justify-center items-center border border-neutral-200 rounded-full">
              {/* target="_blank" rel="noopener noreferrer" */}
              <a href="#">
                <PhoneIcon
                  className={`h-5 w-5 stroke-neutral-200 fill-neutral-200`}
                  aria-hidden="true"
                />
              </a>
            </li>
            <li className="w-9 h-9 flex justify-center items-center border border-neutral-200 rounded-full">
              <a href="#">
                <FacebookIcon />
              </a>
            </li>
            <li className="w-9 h-9 flex justify-center items-center border border-neutral-200 rounded-full">
              <a href="#">
                <WhatsAppIcon />
              </a>
            </li>
          </ul>
        </nav>
        <div className="w-[150vw] h-[70vh] blobs-lines-bg absolute left-0 -bottom-[40vh] z-[0]" />
      </div>
    </div>
  );
};

export default MobileMenu;

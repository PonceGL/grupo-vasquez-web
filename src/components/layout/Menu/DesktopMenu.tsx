import React, { FC, RefObject, useState, useEffect } from "react";

interface Props {
  refElement: RefObject<HTMLElement>;
  isOnScrrenMateriales: boolean;
  isOnScreenConstructora: boolean;
  isOnScreenHydeSalon: boolean;
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

const DesktopMenu: FC<Props> = ({
  refElement,
  isOnScrrenMateriales,
  isOnScreenConstructora,
  isOnScreenHydeSalon,
}) => {
  const [textWhite, setTextWhite] = useState<boolean>(true);

  useEffect(() => {
    if (isOnScrrenMateriales || isOnScreenConstructora || isOnScreenHydeSalon) {
      setTextWhite(false);
    } else {
      setTextWhite(true);
    }
  }, [isOnScrrenMateriales, isOnScreenConstructora, isOnScreenHydeSalon]);

  return (
    <div className="hidden lg:w-[25%] lg:h-screen lg:p-4 lg:pr-0 lg:flex lg:justify-center lg:items-center lg:fixed lg:top-0 z-[4]">
      <nav ref={refElement} className="w-full flex flex-col relative z-[1]">
        <ul className="w-full h-full flex flex-col justify-between items-start">
          {companies.map(({ route, name }) => (
            <li
              key={route}
              className={`w-full my-2 flex justify-start items-center relative rounded-tr-xl hover:bg-opacity-25 transition-all duration-300
              before:w-[1px] before:h-full before:absolute before:-left-1 ${
                textWhite
                  ? "before:bg-neutral-50 after:bg-neutral-50 hover:bg-sky-800"
                  : "before:bg-sky-800 after:bg-sky-800 hover:bg-neutral-50"
              } before:transition-all before:duration-300
              after:w-0 after:h-[1px] after:absolute after:-bottom-1 hover:after:w-11/12 after:transition-all after:duration-300
              `}
            >
              <a
                href={`#${route}`}
                aria-label="Enlace a la sección de transportes"
                className={`text-left ${
                  textWhite ? "text-neutral-50" : "text-sky-800"
                } font-sans font-semibold text-2xl transition-all duration-300`}
              >
                {name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default DesktopMenu;

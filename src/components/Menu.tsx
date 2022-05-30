import React, { FC, Dispatch, SetStateAction } from "react";
import IconMenuClose from "./IconsSVG/IconMenuClose";
import MenuItem from "./MenuItem";

interface Props {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  companies: any[];
}

const Menu: FC<Props> = ({ isOpen, setIsOpen, companies }) => {
  return (
    <nav
      className={`w-screen h-screen px-4 pt-4 bg-menu-gradient bg-[#092529] fixed top-0 ${
        isOpen ? "right-0" : "-right-full"
      } z-50 transition-all duration-300 xl:relative xl:w-full xl:h-auto xl:p-0 xl:m-0 xl:flex xl:center xl:items-center xl:bg-none xl:bg-[#09252900] xl:top-auto xl:right-auto xl:z-auto`}
      id="main-menu"
    >
      <div className="w-full flex justify-end items-center xl:hidden">
        <button
          type="button"
          className="w-10 h-10 flex justify-center items-center"
          aria-label="Cerrar menú"
          onClick={() => setIsOpen(false)}
        >
          <IconMenuClose />
        </button>
      </div>
      <ul
        className="w-full flex flex-col justify-start items-start xl:flex-row xl:justify-between xl:items-center"
        id="companies-menu"
      >
        <MenuItem name="Conócenos" route="pillars-container" />
        {companies.map(({ name }) => (
          <MenuItem key={name} name={name} route={name} />
        ))}
        <MenuItem name="Contáctanos" route="contact-us" />
      </ul>
    </nav>
  );
};

export default Menu;

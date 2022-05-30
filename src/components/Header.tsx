import React, { useState, useEffect } from "react";

// data
import companies from "../../data/companies.json";

// Components
import IconMenu from "./IconsSVG/IconMenu";
import Menu from "./Menu";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (window) {
      window.addEventListener("hashchange", () => setIsOpen(false));

      return () => {
        window.addEventListener("hashchange", () => setIsOpen(false));
      };
    }
  }, []);

  return (
    <header className="w-full p-4 flex justify-between item-center relative z-[11] xl:col-span-2 xl:flex xl:flex-col xl:justify-start xl:items-start">
      <div
        className="w-24 flex justify-center items-center"
        id="logo-container"
      >
        <img
          className="w-full object-contain"
          src="https://raw.githubusercontent.com/PonceGL/grupo-vasquez-web/main/src/images/Logo.png"
          alt="Lotogipo grupo vasquez"
        />
      </div>
      <button
        type="button"
        className="w-10 h-10 flex justify-center items-center xl:hidden"
        aria-label="Abrir menú"
        onClick={() => setIsOpen(true)}
      >
        <IconMenu />
      </button>
      {/* Menu */}
      {companies.length > 0 && (
        <Menu isOpen={isOpen} setIsOpen={setIsOpen} companies={companies} />
      )}
    </header>
  );
};

export default Header;

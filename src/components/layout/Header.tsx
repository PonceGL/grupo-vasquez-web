import React, { FC } from "react";
// import React, { FC, useState, useEffect } from "react";
// import { useRouter } from "next/router";
import Link from "next/link";

// Components
// import { Logo } from "../../../common/SVGs/Logo";
import { MenuAlt4Icon } from "@heroicons/react/outline";
// import MobileMenu from "../MainMenu/MobileMenu";
// import DesktopMenu from "../MainMenu/DesktopMenu";

const Header: FC = () => {
  // const router = useRouter();
  // const [menuIsOpen, setMenuIsOpen] = useState(false);

  // useEffect(() => {
  //   setMenuIsOpen(false);
  // }, [router]);

  return (
    <header className={`p-8 absolute top-0 left-0 right-0 z-10`} id="header">
      <div className="w-full flex justify-between items-center relative">
        <Link href="/">
          <a className={`flex justify-center items-center md:w-1/3 lg:w-80`}>
            Logo
            {/* <Logo color="#222222" /> */}
          </a>
        </Link>

        <button
          className="h-14 w-14 flex justify-center items-center rounded-md focus:outline-none focus:ring-1 focus:ring-inset focus:ring-admin-primary lg:hidden"
          aria-label="Button for opening the menu"
          // onClick={() => setMenuIsOpen(true)}
          onClick={() => console.log(true)}
        >
          <span className="sr-only">Open menu</span>
          <MenuAlt4Icon
            className={`h-14 w-14 stroke-neutral-300`}
            aria-hidden="true"
          />
        </button>

        {/* Desktop Menu */}
      </div>
      {/* Mobile menu */}
    </header>
  );
};

export default Header;

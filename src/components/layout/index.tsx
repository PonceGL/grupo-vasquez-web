import React, { FC, ReactNode } from "react";

// Components
import Header from "./Header";
import Footer from "./Footer";

// Interface's
interface Props {
  children: ReactNode;
}

const Layout: FC<Props> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;

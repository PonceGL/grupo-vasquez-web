import React, { FC, ReactNode } from "react";

// Components
import Header from "./Header";

// Interface's
interface Props {
  children: ReactNode;
}

const Layout: FC<Props> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default Layout;

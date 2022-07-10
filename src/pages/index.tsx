import React, { useRef, useState, useEffect } from "react";
import type { NextPage } from "next";
import Head from "next/head";

// hooks
// import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import favicon from "../public/assets/logos/icon_grupo.ico";

// Components
import Welcome from "../components/Welcome";
import Materiales from "../components/Materiales";
import Transportes from "../components/Transportes";
import Constructora from "../components/Constructora";
import HydeSalon from "../components/HydeSalon";
import MJMPAqueteria from "../components/MJMPAqueteria";
import Refacciones from "../components/Refacciones";

const Home: NextPage = () => {
  const element = useRef<HTMLImageElement>(null);
  // const isOnScreen = useIntersectionObserver(element);
  const [isOnScreen, setIsOnScreen] = useState<boolean>(false);
  const intersection = 0.5;

  const observeElement = (entries: any, observer: any) => {
    entries.forEach((entry: any) => {
      if (entry.intersectionRatio > intersection) {
        setIsOnScreen(true);
      } else {
        setIsOnScreen(false);
      }
    });
  };

  useEffect(() => {
    if (element.current) {
      const observer = new IntersectionObserver(observeElement, {
        threshold: intersection,
      });
      observer.observe(element.current);
    }
  }, [element]);

  return (
    <>
      <Head>
        <title>Grupo Vaquez</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="icon" href={favicon.src} />
      </Head>
      <Welcome />
      <Materiales />
      <Transportes />
      <Constructora />
      <HydeSalon isOnScreen={isOnScreen} />
      <MJMPAqueteria refElement={element} />
      <Refacciones />
    </>
  );
};

export default Home;

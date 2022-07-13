import React, { useRef, useState, useEffect } from "react";
import type { NextPage } from "next";
import Head from "next/head";

// hooks
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import favicon from "../public/assets/logos/icon_grupo.ico";

// Components
import DesktopMenu from "../components/layout/Menu/DesktopMenu";
import Welcome from "../components/Welcome";
import Materiales from "../components/Materiales";
import Transportes from "../components/Transportes";
import Constructora from "../components/Constructora";
import HydeSalon from "../components/HydeSalon";
import MJMPAqueteria from "../components/MJMPAqueteria";
import Refacciones from "../components/Refacciones";

const Home: NextPage = () => {
  const element = useRef<HTMLImageElement>(null);
  const materiales = useRef<HTMLElement>(null);
  const constructora = useRef<HTMLElement>(null);
  const hydeSalon = useRef<HTMLElement>(null);
  // const isOnScreenMaterialesJustOne = useIntersectionObserver(materiales);
  const navRef = useRef<HTMLElement>(null);
  // const isOnScreen = useIntersectionObserver(element);
  const [isOnScreen, setIsOnScreen] = useState<boolean>(false);
  const [isOnScrrenMateriales, setIsOnScrrenMateriales] =
    useState<boolean>(false);
  const [isOnScreenConstructora, setIsOnScreenConstructora] =
    useState<boolean>(false);
  const [isOnScreenHydeSalon, setIsOnScreenHydeSalon] =
    useState<boolean>(false);

  useEffect(() => {
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

    if (element.current !== null) {
      const observer = new IntersectionObserver(observeElement, {
        threshold: intersection,
      });
      observer.observe(element.current);
    }
  }, [element]);

  // observe Section Materiales
  useEffect(() => {
    const intersection = 0.2;
    const observeElement = (entries: any, observer: any) => {
      entries.forEach((entry: any) => {
        if (entry.intersectionRatio > intersection) {
          setIsOnScrrenMateriales(true);
        } else {
          setIsOnScrrenMateriales(false);
        }
      });
    };
    if (materiales.current !== null) {
      const observer = new IntersectionObserver(observeElement, {
        threshold: intersection,
      });
      observer.observe(materiales.current);
    }
  }, [materiales]);

  // observe Section Constructora
  useEffect(() => {
    const intersection = 0.2;
    const observeElement = (entries: any, observer: any) => {
      entries.forEach((entry: any) => {
        if (entry.intersectionRatio > intersection) {
          setIsOnScreenConstructora(true);
        } else {
          setIsOnScreenConstructora(false);
        }
      });
    };
    if (constructora.current !== null) {
      const observer = new IntersectionObserver(observeElement, {
        threshold: intersection,
      });
      observer.observe(constructora.current);
    }
  }, [constructora]);

  // observe Section HydeSalon
  useEffect(() => {
    const intersection = 0.01;
    const observeElement = (entries: any, observer: any) => {
      entries.forEach((entry: any) => {
        if (entry.intersectionRatio > intersection) {
          setIsOnScreenHydeSalon(true);
        } else {
          setIsOnScreenHydeSalon(false);
        }
      });
    };
    if (hydeSalon.current !== null) {
      const observer = new IntersectionObserver(observeElement, {
        threshold: intersection,
      });
      observer.observe(hydeSalon.current);
    }
  }, [hydeSalon]);

  return (
    <>
      <Head>
        <title>Grupo Vaquez</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="icon" href={favicon.src} />
      </Head>

      <DesktopMenu
        refElement={navRef}
        isOnScrrenMateriales={isOnScrrenMateriales}
        isOnScreenConstructora={isOnScreenConstructora}
        isOnScreenHydeSalon={isOnScreenHydeSalon}
      />
      <Welcome />
      <Materiales refSection={materiales} />
      <Transportes />
      <Constructora refSection={constructora} />
      <HydeSalon refSection={hydeSalon} isOnScreen={isOnScreen} />
      <MJMPAqueteria refElement={element} />
      <Refacciones />
    </>
  );
};

export default Home;

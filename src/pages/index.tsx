import type { NextPage } from "next";
import Head from "next/head";

// Components
import Welcome from "../components/Welcome/indes";
import Presentation from "../components/Presentation";
import { SvgLines } from "../components/IconsSVG/Line";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Grupo Vaquez</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Welcome />
      <Presentation />
      <div className="w-full fixed opacity-40 top-0 left-0 z-[1]">
        <SvgLines />
      </div>
      <section className="w-full h-screen">
        <div data-scroll-container>
          <div data-scroll-section>
            <h1 data-scroll>Hey</h1>
            <p data-scroll>👋</p>
          </div>
          <div data-scroll-section>
            <h2 data-scroll data-scroll-speed="1">
              What&apos;s up?
            </h2>
            <p data-scroll data-scroll-speed="2">
              😬
            </p>
          </div>
        </div>
      </section>
      <section className="w-full h-screen" />
    </>
  );
};

export default Home;

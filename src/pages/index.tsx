import type { NextPage } from "next";
import Head from "next/head";

// Components
import Welcome from "../components/Welcome/indes";
import Materiales from "../components/Materiales";
import Transportes from "../components/Transportes";
import Constructora from "../components/Constructora";

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
      <div className="w-full h-80 fixed top-0 left-0 z-[1] branch-svg-lines" />
      <Materiales />
      <Transportes />
      <Constructora />
    </>
  );
};

export default Home;

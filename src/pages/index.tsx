import type { NextPage } from "next";
import Head from "next/head";
import BackToTop from "../components/BackToTop";
import Welcome from "../components/Welcome";
import Submission from "../components/Submission";
import Reasons from "../components/Reasons";
import Companies from "../components/Companies";
import FrequentlyAskedQuestions from "../components/FrequentlyAskedQuestions";
import Footer from "../components/Footer";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Grupo Vaquez</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <BackToTop />
      <Welcome />
      <Submission />
      <Reasons />
      <Companies />
      <FrequentlyAskedQuestions />
      <Footer />
    </>
  );
};

export default Home;

import React from "react";
import ContactForm from "./ContactForm";
import Links from "./Links";

const Footer = () => {
  return (
    <footer
      className="w-screen p-4 text-white grid grid-cols-1 gap-4 bg-footer-gradient relative overflow-hidden md:pt-16 md:gap-8 xl:grid-cols-2"
      id="contact-us"
    >
      <section className="w-full grid grid-cols-1 gap-4 md:justify-items-center md:grid-cols-2 md:gap-8">
        <h3 className="font-bold text-4xl text-white md:text-6xl">
          ¿Listo para empezar a trabajar juntos?
        </h3>
        <ContactForm />
      </section>
      <Links />
      <p className="w-full text-center text-sm opacity-50 xl:col-span-2">
        @2022 All rights reserved
      </p>
    </footer>
  );
};

export default Footer;

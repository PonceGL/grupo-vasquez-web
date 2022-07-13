import React, { FC, useState } from "react";

// Components
import SocialMenu from "./SocialMenu";
import Form from "./Form";
import Loading from "./Form/Loading";

const Footer: FC = () => {
  const [loading, setLoading] = useState<boolean>(false);

  return (
    <footer
      className="w-full max-w-screen-2xl py-8 px-4 flex flex-col justify-center items-center bg-zinc-100 md:p-10 lg:z-[5]"
      id="ContactForm"
    >
      <h3
        className={`w-full my-6 text-left tracking-[-1.2px] text-sky-800 text-2xl font-sans md:text-center lg:text-3xl`}
      >
        ¿Deseas formar parte de nuestro equipo de trabajo?
      </h3>
      <div className="w-full flex flex-col justify-start items-center md:w-3/4 lg:w-4/5 lg:flex-row">
        <SocialMenu />
        <div className="w-full flex justify-center items-center overflow-hidden relative z-[1] ">
          {loading && <Loading />}
          <Form closeLoading={setLoading} />
        </div>
        <div className="w-full flex flex-col justify-around items-center bg-sky-800 shadow-2xl relative z-[1] overflow-hidden">
          <iframe
            title="Mapa de Margarita Olivo Grupo Vasuez"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d389.58139005058166!2d-96.91768527812137!3d19.55894699801045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85db31deef935727%3A0xf78c3ecd94c25373!2sMateriales%20V%C3%A1squez%20Hermanos!5e0!3m2!1sen!2smx!4v1657390188106!5m2!1sen!2smx"
            className="w-full h-[400px] border-0 lg:h-[500px]"
            // width="100%"
            // height="400"
            // style={{
            //   border: "0",
            // }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;

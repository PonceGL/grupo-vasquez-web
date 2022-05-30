import React from "react";
import IconMail from "../IconsSVG/IconMail";
import IconPhone from "../IconsSVG/IconPhone";
import IconLocation from "../IconsSVG/IconLocation";
import IconFacebook from "../IconsSVG/IconFacebook";

//Data
import companies from "../../../data/companies.json";
import contactdata from "../../../data/contactdata.json";

const Links = () => {
  return (
    <section className="w-full grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-8">
      {companies.length > 0 && (
        <div>
          <h4 className="font-bold opacity-70">Enlaces</h4>
          {companies.map(({ name, web }) => (
            <nav key={name.replace(/ /g, "-")}>
              <ul
                className="w-full flex- flex-col justify-start items-start"
                id="list-links"
              >
                {web !== null && (
                  <li className="w-full my-2">
                    <a
                      href={web}
                      className="capitalize"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Enlace a página web de ${name.toLowerCase()}`}
                    >
                      {name.toLowerCase()}
                    </a>
                  </li>
                )}
              </ul>
            </nav>
          ))}
        </div>
      )}

      <div>
        <h4 className="font-bold opacity-70">Contacto</h4>
        <nav>
          <ul
            className="w-full flex- flex-col justify-start items-start"
            id="list-contact"
          >
            {!!contactdata && (
              <>
                {!!contactdata.mail && (
                  <li className="w-full my-2">
                    <a
                      href={`mailto:${contactdata.mail}?subject=Contacto%20desde%20su%20p%C3%A1gina%20web&body=Hola%2C%20me%20pueden%20contactar%20por%20favor%2C%20quisiera%20m%C3%A1s%20informaci%C3%B3n.`}
                      className="flex justify-start items-center"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Enlace a correo electronico ${mail.toLowerCase()}"
                    >
                      <div className="w-5 h-5 mr-2 flex justify-center items-center">
                        <IconMail />
                      </div>
                      {contactdata.mail.toLowerCase()}
                    </a>
                  </li>
                )}
              </>
            )}

            {contactdata.phones.length > 0 && (
              <>
                {contactdata.phones.map((phone) => (
                  <li key={phone} className="w-full my-2">
                    <a
                      href={`tel:+521${phone}`}
                      className="flex justify-start items-center"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Enlace a número de telefono ${phone.toLowerCase()}"
                    >
                      <div className="w-5 h-5 mr-2 flex justify-center items-center">
                        <IconPhone />
                      </div>
                      {phone.toLowerCase()}
                    </a>
                  </li>
                ))}
              </>
            )}

            {contactdata.location !== null && (
              <li className="w-full my-2">
                <a
                  href={contactdata.location.link}
                  className="flex justify-start items-center capitalize"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Enlace a google maps"
                >
                  <div className="w-5 h-5 mr-2 flex justify-center items-center">
                    <IconLocation />
                  </div>
                  {contactdata.location.name.toLowerCase()}
                </a>
              </li>
            )}

            {contactdata.facebook !== "" && (
              <li className="w-full my-2">
                <a
                  href={contactdata.facebook}
                  className="flex justify-start items-center capitalize"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Enlace a google Facebook"
                >
                  <div className="w-5 h-5 mr-2 flex justify-center items-center">
                    <IconFacebook />
                  </div>
                  Facebook
                </a>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </section>
  );
};

export default Links;

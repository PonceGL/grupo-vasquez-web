import MeetingTeamWork from "./svg/meeting-team-work.js";
import IconMenu from "./svg/icon-menu.js";
import IconX from "./svg/icon-x.js";
// import LogoGrupo from "./svg/logo-grupo.js";
import IconTest from "./svg/icon-test.js";
import Chart from "./svg/chart.js";
import IconMail from "./svg/icon-mail.js";
import IconPhone from "./svg/icon-phone.js";
import IconLocation from "./svg/icon-location.js";
import IconFacebook from "./svg/icon-facebook.js";
import IconWhatsapp from "./svg/icon-whatsapp.js";

(function () {
  // Accede a elementos del DOM
  const svgMeetingContainer = document.getElementById("svg-meeting-container");
  const menuButton = document.getElementById("menu-button");
  const menuButtonClose = document.getElementById("menu-button-close");
  const mainMenu = document.getElementById("main-menu");
  // const logoContainer = document.getElementById("logo-container");
  const pillarsContainer = document.getElementById("pillars-container");
  const cartContainer = document.getElementById("cart-container");
  const companiesMenu = document.getElementById("companies-menu");
  const companiesContainer = document.getElementById("companies-container");
  const listLinks = document.getElementById("list-links");
  const listContact = document.getElementById("list-contact");

  // Variables Globales

  // Añade SVG al DOM
  // logoContainer.innerHTML += LogoGrupo();
  svgMeetingContainer.innerHTML += MeetingTeamWork();
  menuButton.innerHTML = IconMenu();
  menuButtonClose.innerHTML = IconX();
  cartContainer.innerHTML = Chart();

  // Abrir Cerrar Menú

  const handleMenuOpen = () => {
    console.log("handleMenuOpen");
    console.log(mainMenu);

    if (mainMenu.classList.contains("right-0")) {
      mainMenu.classList.remove("right-0");
      mainMenu.classList.add("-right-full");
    } else {
      mainMenu.classList.add("right-0");
      mainMenu.classList.remove("-right-full");
    }
  };

  menuButton.addEventListener("click", handleMenuOpen);
  menuButtonClose.addEventListener("click", handleMenuOpen);
  window.addEventListener("hashchange", () => {
    console.log("====================================");
    console.log("hashchange");
    console.log("====================================");
    mainMenu.classList.remove("right-0");
    mainMenu.classList.add("-right-full");
  });

  // Solicita data de pillares de la empresa
  const addPillarsData = async () => {
    try {
      const response = await window.fetch("./data/pillars.json");
      const pillars = await response.json();

      pillars.map(({ title, description }) => {
        pillarsContainer.innerHTML += `
              <div class="w-full p-4 flex flex-col justify-start items-center md:p-0">
                  <div class="w-14 h-14 flex justify-center items-center">${IconTest()}</div>
                  <h4 class="my-4 font-black text-[#267984] text-base">${title}</h4>
                  <p class="text-center">${description}</p>
              </div>
          `;
      });
    } catch (error) {
      console.log(error);
    }
  };

  addPillarsData();

  // Solicita data de las compañias del grupo
  const addCompaniesData = async () => {
    try {
      const response = await window.fetch("./data/companies.json");
      const companies = await response.json();

      companies.map(
        ({
          bgColor,
          description,
          email,
          location,
          logos,
          name,
          phone,
          web,
        }) => {
          companiesContainer.innerHTML += `
            <div 
              class="w-full p-4 py-10 flex flex-col justify-start items-center bg-[${bgColor}] lg:grid lg:grid-cols-1 lg:grid-rows-[20%_30%_50%] lg:items-start"
              id="${name.toLowerCase().replace(/ /g, "-")}"
            >
              <h4 class="my-4 text-2xl font-black text-[#267984] text-center lg:m-0">
                ${name}
              </h4>

              <div class="w-full flex justify-center items-center">
              ${
                !!logos &&
                `
              ${logos
                .map(
                  (logo) => `
              <div class="w-24 m-4 flex justify-center items-center lg:mt-0">
                <img src="${logo}" alt="Logotipo de ${name}" class="w-full object-contain">
              </div>
              `
                )
                .join("")}
              `
              }
              </div>

              <p class="text-center">
                ${description}
              </p>
            </div>
          `;

          companiesMenu.innerHTML += `
            <li class="w-full my-4">
              <a
                href="#${name.toLowerCase().replace(/ /g, "-")}"
                class="w-full p-2 text-white text-3xl capitalize hover:text-[#2BE8C0] outline-[#2BE8C0] transition-all duration-300"
              >
              ${name.toLowerCase().replace(/ s.a. de c.v./, "")}
              </a>
            </li>
          `;

          if (!!web) {
            listLinks.innerHTML += `
            <li class="w-full my-2">
              <a href="${web}" class="capitalize" 
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Enlace a página web de ${name.toLowerCase()}">${name.toLowerCase()}</a>
            </li>
            `;
          }
        }
      );
    } catch (error) {
      console.log(error);
    }
  };

  addCompaniesData();

  // Solicita la informacion de contacto de la empresa
  const addContactData = async () => {
    try {
      const response = await window.fetch("./data/contactdata.json");
      const data = await response.json();

      const { mail, phones, location, facebook, whatsapp } = data;

      if (!!mail) {
        listContact.innerHTML += `
         <li class="w-full my-2">
           <a href="mailto:${mail}?subject=Contacto%20desde%20su%20p%C3%A1gina%20web&body=Hola%2C%20me%20pueden%20contactar%20por%20favor%2C%20quisiera%20m%C3%A1s%20informaci%C3%B3n."
              class="flex justify-start items-center" 
             target="_blank"
             rel="noopener noreferrer"
             aria-label="Enlace a correo electronico ${mail.toLowerCase()}">
              <div
                  class="w-5 h-5 mr-2 flex justify-center items-center"
                >
                ${IconMail()}
                </div>
               ${mail.toLowerCase()}
             </a>
         </li>
       `;
      }

      if (phones.length > 0) {
        phones.map(
          (phone) => `
          ${(listContact.innerHTML += `
              <li class="w-full my-2">
                <a href="tel:+521${phone}" class="flex justify-start items-center"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Enlace a número de telefono ${phone.toLowerCase()}">
                    <div
                  class="w-5 h-5 mr-2 flex justify-center items-center"
                >
                ${IconPhone()}
                </div>
                    ${phone.toLowerCase()}
                  </a>
              </li>
            `)}
        `
        );
      }

      if (!!location) {
        listContact.innerHTML += `
          <li class="w-full my-2">
            <a href="${
              location.link
            }" class="flex justify-start items-center capitalize"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Enlace a google maps">
                <div
                  class="w-5 h-5 mr-2 flex justify-center items-center"
                >
                ${IconLocation()}
                </div>
                ${location.name.toLowerCase()}
              </a>
          </li>
        `;
      }

      if (!!facebook) {
        listContact.innerHTML += `
          <li class="w-full my-2">
            <a href="${facebook}" class="flex justify-start items-center capitalize"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Enlace a google Facebook">
                <div
                  class="w-5 h-5 mr-2 flex justify-center items-center"
                >
                ${IconFacebook()}
                </div>
                Facebook
              </a>
          </li>
        `;
      }

      if (!!whatsapp) {
        listContact.innerHTML += `
          <li class="w-full my-2">
            <a href="https://api.whatsapp.com/send?phone=+52${whatsapp}" class="flex justify-start items-center capitalize" 
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Enlace a google WhatApp">
                <div
                  class="w-5 h-5 mr-2 flex justify-center items-center"
                >
                ${IconWhatsapp()}
                </div>
                WhatApp
              </a>
          </li>
        `;
      }
    } catch (error) {
      console.log(error);
    }
  };

  addContactData();
})();

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
import LocationMarker from "./svg/location-marker.js";
import IconMailSolid from "./svg/icon-mail-solid.js";
import IconPhoneSolid from "./svg/icon-phone-solid.js";
import IconExternalLink from "./svg/icon-external-link.js";

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
  const buttonUp = document.getElementById("button-up");

  // Variables Globales

  // Añade SVG al DOM
  // logoContainer.innerHTML += LogoGrupo();
  svgMeetingContainer.innerHTML += MeetingTeamWork();
  menuButton.innerHTML = IconMenu();
  menuButtonClose.innerHTML = IconX();
  cartContainer.innerHTML = Chart();

  // Abrir Cerrar Menú

  const handleMenuOpen = () => {
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
      const windowWidth = window.innerWidth;

      companiesContainer.style.gridTemplateColumns = `repeat(${companies.length}, 85vw)`;

      companies.map(
        ({
          bgColor,
          description,
          branches,
          email,
          location,
          addres,
          logos,
          name,
          phone,
          web,
        }) => {
          companiesContainer.innerHTML += `
            <div 
            class="w-full p-4 py-10 px-2 flex flex-col justify-start items-center bg-[${bgColor}]"
              id="${name.toLowerCase().replace(/ /g, "-")}"
            >
              <h4 class="my-4 text-3xl font-notoSans font-semibold text-[#1C444C] text-center xl:m-0">
                ${name}
              </h4>

              <div class="w-full flex justify-center items-center">
              ${
                !!logos &&
                `
              ${logos
                .map(
                  (logo) => `
                <div class="w-32 m-4 flex justify-center items-center xl:mt-0 xl:w-80">
                  <img src="${logo}" alt="Logotipo de ${name}" class="w-full object-contain">
                </div>
              `
                )
                .join("")}
              `
              }
              </div>

              <p class="text-center xl:max-w-2xl xl:mx-auto">
                ${description}
              </p>

                <div class="w-full max-w-md mt-8 mb-4 flex justify-around items-center">
                ${
                  addres !== ""
                    ? `
                    <div class="w-8">
                      <a class="w-full" href="${
                        location !== "" ? location : ""
                      }" ${
                        location !== ""
                          ? `target="_blank" rel="noopener noreferrer"`
                          : ""
                      }>${LocationMarker()}</a>
                    </div>
                `
                    : ""
                }
                ${
                  email !== null
                    ? `
                    <div class="w-8">
                      <a class="w-full" href="mailto:${email}" target="_blank" rel="noopener noreferrer">${IconMailSolid()}</a>
                    </div>
                `
                    : ""
                }
                  ${
                    phone.length > 0
                      ? `
                    <div class="w-8">
                        <a class="w-full" href="tel:${phone}" target="_blank" rel="noopener noreferrer">
                          ${IconPhoneSolid()}
                        </a>
                    </div>
                    `
                      : ""
                  }
                  ${
                    web !== null
                      ? `
                    <div class="w-8">
                        <a class="w-full" href="${web}" target="_blank" rel="noopener noreferrer">
                          ${IconExternalLink()}
                        </a>
                    </div>
                    `
                      : ""
                  }
                </div>

              ${
                branches !== null &&
                `
               <div class="w-full mt-8 flex justify-start items-center overflow-x-scroll hideScroll xl:mt-0 xl:justify-center"
                style="max-width: 100vw;"
               >
                  <ul class="w-fit py-2 grid grid-rows-1 gap-4"
                    style="grid-template-columns: repeat(${
                      windowWidth < 1280 ? branches.length : 3
                    }, minmax(325px, 500px));"
                    >
                      ${branches
                        .map(
                          ({ name, addres, location }) => `
                          <a class="w-full py-4 grid grid-cols-12 rounded-xl shadow-xl xl:py-8" href="${location}" target="_blank" rel="noopener noreferrer">
                            <div class="col-span-1 row-span-2 w-6 flex justify-center items-start">
                            ${IconLocation()}
                            </div>
                            <p class="col-span-11 row-span-1 font-notoSans font-bold text-[#1C444C]">${name}</p>
                            <p class="col-span-11 row-span-1 text-xs">${addres}</p>
                          </a>
                          `
                        )
                        .join("")}
                  </ul>
               </div>
              `
              }
            </div>
          `;

          companiesMenu.innerHTML += `
            <li class="w-full my-4 lg:w-fit lg:mx-0">
              <a
                href="#${name.toLowerCase().replace(/ /g, "-")}"
                class="w-full p-2 text-white text-[1.35rem] whitespace-nowrap capitalize hover:text-[#2BE8C0] outline-[#2BE8C0] transition-all duration-300 lg:p-1 lg:text-base"
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

  document.addEventListener("scroll", () => {
    const scroll = window.scrollY;
    if (scroll > 1000) {
      buttonUp.style.width = "3rem";
      buttonUp.style.height = "3rem";
    } else {
      buttonUp.style.width = "0";
      buttonUp.style.height = "0";
    }
  });
})();

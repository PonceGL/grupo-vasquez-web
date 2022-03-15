import MeetingTeamWork from "./svg/meeting-team-work.js";
import IconMenu from "./svg/icon-menu.js";
import LogoGrupo from "./svg/logo-grupo.js";
import IconTest from "./svg/icon-test.js";
import Chart from "./svg/chart.js";

(function () {
  // Accede a elementos del DOM
  const svgMeetingContainer = document.getElementById("svg-meeting-container");
  const menuButton = document.getElementById("menu-button");
  const logoContainer = document.getElementById("logo-container");
  const pillarsContainer = document.getElementById("pillars-container");
  const cartContainer = document.getElementById("cart-container");
  const companiesContainer = document.getElementById("companies-container");

  // Variables Globales

  // Añade SVG al DOM
  logoContainer.innerHTML += LogoGrupo();
  svgMeetingContainer.innerHTML += MeetingTeamWork();
  menuButton.innerHTML = IconMenu();
  cartContainer.innerHTML = Chart();

  // Solicita data de pillares de la empresa
  const addPillarsData = async () => {
    try {
      const response = await window.fetch("./data/pillars.json");
      const pillars = await response.json();

      pillars.map(({ title, description }) => {
        pillarsContainer.innerHTML += `
              <div class="w-full p-4 flex flex-col justify-start items-center">
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
            <div class="w-full p-4 py-10 flex flex-col justify-start items-center bg-[${bgColor}]">
              <h4 class="my-4 text-2xl font-black text-[#267984] text-center">
                ${name}
              </h4>

              <div class="w-full flex justify-center items-center">
              ${
                !!logos &&
                `
              ${logos
                .map(
                  (logo) => `
              <div class="w-24 m-4 flex justify-center items-center">
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
        }
      );
    } catch (error) {
      console.log(error);
    }
  };

  addCompaniesData();
})();

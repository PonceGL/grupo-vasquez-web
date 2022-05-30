import React, { FC } from "react";
import { CompanyInterface } from "../../interfaces/companies";
import Branches from "./Branches";

// Icons
import LocationMarker from "../IconsSVG/LocationMarker";
import IconMailSolid from "../IconsSVG/IconMailSolid";
import IconPhoneSolid from "../IconsSVG/IconPhoneSolid";
import IconExternalLink from "../IconsSVG/IconExternalLink";

const Company: FC<CompanyInterface> = ({
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
  return (
    <div
      className={`w-full p-4 py-10 px-2 flex flex-col justify-start items-center bg-[${bgColor}]`}
      id={`${name.toLowerCase().replace(/ /g, "-")}`}
    >
      <h4 className="my-4 text-3xl font-notoSans font-semibold text-[#1C444C] text-center xl:m-0">
        {name}
      </h4>

      <div className="w-full flex justify-center items-center">
        {logos.length > 0 && (
          <>
            {logos.map((logo) => (
              <div
                key={logo}
                className="w-32 m-4 flex justify-center items-center xl:mt-0 xl:w-80"
              >
                <img
                  src={logo}
                  alt={`Logotipo de ${name}`}
                  className="w-full object-contain"
                />
              </div>
            ))}
          </>
        )}
      </div>

      <p className="text-center xl:max-w-2xl xl:mx-auto">{description}</p>

      <div className="w-full max-w-md mt-8 mb-4 flex justify-around items-center">
        {location !== "" && (
          <div className="w-8">
            <a
              className="w-full"
              href={location}
              target="_blank"
              rel="noopener noreferrer"
            >
              <LocationMarker />
            </a>
          </div>
        )}

        {email !== null && (
          <div className="w-8">
            <a
              className="w-full"
              href={`mailto:${email}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconMailSolid />
            </a>
          </div>
        )}
        {phone.length > 0 && (
          <div className="w-8">
            <a
              className="w-full"
              href={`tel:${phone}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconPhoneSolid />
            </a>
          </div>
        )}
        {web !== null && (
          <div className="w-8">
            <a
              className="w-full"
              href={web}
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconExternalLink />
            </a>
          </div>
        )}
      </div>

      {branches.length > 0 && <Branches branches={branches} />}
    </div>
  );
};

export default Company;

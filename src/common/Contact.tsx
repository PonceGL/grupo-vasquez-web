import React, { FC } from "react";

// Components
import { ExternalLinkIcon } from "@heroicons/react/outline";

interface Props {
  phone: string;
  web?: string;
  textColor?: string;
  addStyles?: string;
}

const Contact: FC<Props> = ({
  phone,
  web,
  textColor = "text-neutral-200",
  addStyles = "p-8 pr-1",
}) => {
  return (
    <>
      <div
        className={`w-full ${addStyles} flex flex-col justify-start items-start`}
      >
        {phone !== "" && (
          <div className="w-full flex justify-start items-center">
            <p
              className={`mb-2 tracking-[1.2px] ${textColor} text-left text-xl font-aeonik_medium capitalize underline`}
            >
              {`TELEFONO:`.toLocaleLowerCase()}
            </p>
            <a
              className={`ml-4 tracking-[1.2px] ${textColor} text-left text-base font-aeonik_medium cursor-pointer`}
              href={`tel:${phone.replace(/ /g, "")}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {phone}
            </a>
          </div>
        )}
        {!!web && (
          <div className="w-full mt-4 flex justify-start items-center">
            <a
              className={`tracking-[1.2px] ${textColor} text-left text-base font-aeonik_medium cursor-pointer truncate`}
              href={`https://${web}/`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {web}
            </a>
            <ExternalLinkIcon
              className={`h-4 w-4 ml-2 ${textColor.replace("text", "stroke")}`}
              aria-hidden="true"
            />
          </div>
        )}
      </div>
      <ExternalLinkIcon
        className={`h-4 w-4 ml-2 stroke-sky-800 hidden`}
        aria-hidden="true"
      />
      <ExternalLinkIcon
        className={`h-4 w-4 ml-2 stroke-neutral-200 hidden`}
        aria-hidden="true"
      />
      <ExternalLinkIcon
        className={`h-4 w-4 ml-2 stroke-blue-900 hidden`}
        aria-hidden="true"
      />
      <ExternalLinkIcon
        className={`h-4 w-4 ml-2 stroke-[#005490] hidden`}
        aria-hidden="true"
      />
      <ExternalLinkIcon
        className={`h-4 w-4 ml-2 stroke-white hidden`}
        aria-hidden="true"
      />
    </>
  );
};

export default Contact;

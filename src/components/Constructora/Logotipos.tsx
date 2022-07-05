import React, { FC } from "react";

import LogoCivsa from "../../public/assets/logos/civsa.png";
import LogoAmy from "../../public/assets/logos/amy.png";

const Logotipos: FC = () => {
  return (
    <div className="w-full p-4 mb-8 grid grid-cols-2 gap-4 place-items-center">
      <img
        src={LogoCivsa.src}
        alt="Logotipo de TRANSPORTES VASQUEZ SA de CV"
        className="h-20 mx-auto"
      />
      <img
        src={LogoAmy.src}
        alt="Logotipo de TRANSPORTES GRUPO VASQUEZ SA de CV"
        className="h-20 mx-auto"
      />
    </div>
  );
};

export default Logotipos;

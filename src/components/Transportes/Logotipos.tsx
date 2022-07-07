import React, { FC } from "react";

import LogoTransportesTira from "../../public/assets/logos/transportes-1.png";
import LogoTransportesDos from "../../public/assets/logos/transportes-2.png";
import LogoTransportesGrupo from "../../public/assets/logos/trasnportes-grupo-vasquez.png";

const Logotipos: FC = () => {
  return (
    <div className="w-full py-4 grid grid-cols-2 grid-rows-2 gap-0 place-items-center bg-zinc-200">
      <img
        src={LogoTransportesTira.src}
        alt="Logotipo de TRANSPORTES VASQUEZ SA de CV"
        className="col-span-2 w-full mx-auto"
      />
      <img
        src={LogoTransportesDos.src}
        alt="Logotipo de TRANSPORTES VASQUEZ SA de CV"
        className="h-20 mx-auto"
      />
      <img
        src={LogoTransportesGrupo.src}
        alt="Logotipo de TRANSPORTES GRUPO VASQUEZ SA de CV"
        className="h-20 mx-auto"
      />
    </div>
  );
};

export default Logotipos;

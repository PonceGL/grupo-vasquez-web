import React, { FC } from "react";

// Components
import SwiperClients from "../../common/SwiperClients";

const Clients: FC = () => {
  return (
    <div className="w-full mt-32">
      <h2
        className={`pb-2 text-left tracking-[-1.2px] text-neutral-200 text-3xl font-aeonik_medium border-b-2 border-neutral-200 relative z-[1] transition-bezier duration-100`}
      >
        ALGUNOS DE NUESTROS CLIENTES
      </h2>
      <SwiperClients />
    </div>
  );
};

export default Clients;

import React, { FC, useEffect, useState } from "react";

// Hooks
import { useWindowWidth } from "../hooks/useWindowWidth";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Keyboard, Navigation, FreeMode, Pagination } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import "swiper/css/pagination";

// images
import cargill from "../public/assets/clients/cargill.png";
import chedraui from "../public/assets/clients/chedraui.png";
import femsa from "../public/assets/clients/femsa.png";
import IngenioLaGloria from "../public/assets/clients/ingenio-la-gloria.jpg";
import jals from "../public/assets/clients/jals.png";
import zucarmex from "../public/assets/clients/zucarmex.png";

const imagesList = [
  {
    name: "Cargill",
    url: cargill.src,
  },
  {
    name: "Chedraui",
    url: chedraui.src,
  },
  {
    name: "Femsa",
    url: femsa.src,
  },
  {
    name: "Ingenio la Gloria",
    url: IngenioLaGloria.src,
  },
  {
    name: "Jals",
    url: jals.src,
  },
  {
    name: "Zucarmex",
    url: zucarmex.src,
  },
];

const SwiperClients: FC = () => {
  const width = useWindowWidth();
  const [slidesNumber, setSlidesNumber] = useState<number>(3);

  // String(index + 1)
  const pagination = {
    clickable: true,
    renderBullet: function (index: number, className: string) {
      return `<span class="${className}"></span>`;
    },
  };

  useEffect(() => {
    // console.log("width => ", width);

    if (width > 750) {
      setSlidesNumber(4);
    }
  }, [width]);

  return (
    <div
      className="w-full mt-16 flex justify-center items-center bg-white"
      id="SwiperClients"
    >
      <Swiper
        slidesPerView={slidesNumber}
        spaceBetween={20}
        freeMode={true}
        keyboard={{
          enabled: true,
        }}
        pagination={pagination}
        loop={true}
        modules={[Keyboard, Navigation, FreeMode, Pagination]}
        className="mySwiper"
      >
        {imagesList.map(({ url, name }) => (
          <SwiperSlide key={url}>
            <img
              src={url}
              alt={`Logotipo de ${name}`}
              className="h-28 object-contain"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperClients;

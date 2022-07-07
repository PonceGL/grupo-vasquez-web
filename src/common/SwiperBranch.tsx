import React, { FC } from "react";

// Components

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Mousewheel, Keyboard, Navigation, Pagination } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// Interface's
// import { GalleryImage } from "../../interfaces/galleries";
// interface Props {}

const imagesList = [
  {
    url: "https://images.unsplash.com/photo-1602251223517-734aa9a8bd41?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    alt: "Imagen de SUCURSAL HOME CENTER",
    name: "HOME CENTER",
    address: "AV. LAZARO CARDENAS #410, COL. BADILLO, C.P. 91180, XALAPA, VER.",
  },
  {
    url: "https://images.unsplash.com/photo-1580651202259-7674e27e522a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80",
    alt: "Imagen de SUCURSAL BANDERILLA",
    name: "BANDERILLA",
    address:
      "Carretera nacional xalapa-banderilla s/n km. 2, col. centro, banderilla, ver.",
  },
  {
    url: "https://images.unsplash.com/photo-1580654842783-4f4cbcd3ae82?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    alt: "Imagen de SUCURSAL LAZARO CARDENAS",
    name: "LAZARO CARDENAS",
    address: "Av. lazaro cardenas #274. col. encinal, c.p. 91180, xalapa, ver.",
  },
  {
    url: "https://images.unsplash.com/photo-1541474846910-67332bd2498d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=770&q=80",
    alt: "Imagen de SUCURSAL MARGARITA OLIVO",
    name: "MARGARITA OLIVO",
    address:
      "Carretera xalapa-castillo #201, col. la tranca, c.p. 91165, xalapa, ver.",
  },
  {
    url: "https://images.unsplash.com/photo-1542581509-7e87190743b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    alt: "Imagen de SUCURSAL CASTILLO",
    name: "CASTILLO",
    address:
      "Carretera xalapa-castillo #201, col. la tranca, c.p. 91165, xalapa, ver.",
  },
  {
    url: "https://images.unsplash.com/photo-1527368746281-798b65e1ac6e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1550&q=80",
    alt: "Imagen de SUCURSAL ATENAS",
    name: "ATENAS",
    address:
      "AV. ATENAS VERACRUZANA #1906, COL. REVOLUCIÓN, C.P. 91110, XALAPA, VER.",
  },
  {
    url: "https://images.unsplash.com/photo-1482350325005-eda5e677279b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    alt: "Imagen de SUCURSAL ALTO LUCERO",
    name: "ALTO LUCERO",
    address: "AV. CONGRESO #18, COL. CENTRO, C.P. 91460, ALTO LUCERO, VER.",
  },
];

const SwiperBranch: FC = () => {
  const pagination = {
    clickable: true,
    renderBullet: function (index: number, className: string) {
      return `<span class="${className}">${String(index + 1).padStart(
        2,
        "0"
      )}-${String(imagesList.length).padStart(2, "0")}</span>`;
    },
  };

  return (
    <div className="w-full flex justify-center items-center">
      <div className="w-[90%] ml-auto flex justify-center items-center">
        <Swiper
          slidesPerView={"auto"}
          spaceBetween={20}
          keyboard={{
            enabled: true,
          }}
          loop={false}
          pagination={pagination}
          modules={[Mousewheel, Keyboard, Navigation, Pagination]}
          className="mySwiper"
        >
          {imagesList.map(({ url, alt, name, address }) => (
            <SwiperSlide key={url}>
              <>
                <h4
                  className={`mb-2 tracking-[1.2px] text-sky-800 text-left text-xl whitespace-nowrap text-ellipsis font-aeonik_medium capitalize underline z-[1]`}
                >
                  {name.toLocaleLowerCase()}
                </h4>
                <div className="h-96">
                  <img
                    src={url}
                    alt={alt}
                    className="w-full h-full object-cover shadow-xl"
                  />
                </div>
              </>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default SwiperBranch;

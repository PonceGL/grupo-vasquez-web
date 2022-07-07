import React, { FC } from "react";

// Components

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Autoplay, Keyboard, Navigation, Pagination } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// Interface's
// import { GalleryImage } from "../../interfaces/galleries";
// interface Props {}

const imagesList = [
  {
    url: "https://scontent-mia3-1.xx.fbcdn.net/v/t31.18172-8/20424152_1655833661117900_8434330273859209844_o.jpg?_nc_cat=111&ccb=1-7&_nc_sid=cdbe9c&_nc_ohc=EiWUe_Jqi_4AX_TPsgS&tn=xsCQ3QLQpYtUZp_b&_nc_ht=scontent-mia3-1.xx&oh=00_AT_9dCxSfUpETFqw5E-mjVulEVVfzzMSmaWsPhYVG4zCOg&oe=62EB086C",
    text: "Instalaciones de primer nivel",
  },
  {
    url: "https://scontent-mia3-2.xx.fbcdn.net/v/t31.18172-8/20543927_1655824224452177_2021809634703789212_o.jpg?_nc_cat=109&ccb=1-7&_nc_sid=cdbe9c&_nc_ohc=Pk7CLFxaSxsAX_EnfDt&_nc_ht=scontent-mia3-2.xx&oh=00_AT-pqoAdzMGwM_K_YkB34YFDtMFiepDkn4ZwiQSMEHkfVA&oe=62EBD9A9",
    text: "Equipo de luz y sonido de ultima generacion",
  },
  {
    url: "https://scontent-mia3-2.xx.fbcdn.net/v/t31.18172-8/20449019_1655833981117868_2814142123788480263_o.jpg?_nc_cat=109&ccb=1-7&_nc_sid=cdbe9c&_nc_ohc=ZjQJIJmzUUkAX_APz0d&tn=xsCQ3QLQpYtUZp_b&_nc_ht=scontent-mia3-2.xx&oh=00_AT_mP6xAhr5p3wsPJ66Y-R16pH1kOFkagRIYDCsU3CAxwQ&oe=62EAA3E8",
    text: "Excelente ubicación",
  },
];

const SwiperHydeSalon: FC = () => {
  // const pagination = {
  //   clickable: true,
  //   renderBullet: function (index: number, className: string) {
  //     return `<span class="${className}">${String(index + 1).padStart(
  //       2,
  //       "0"
  //     )}-${String(imagesList.length).padStart(2, "0")}</span>`;
  //   },
  // };

  return (
    <div className="w-full mt-20 pb-20 flex justify-center items-center relative z-[1]">
      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        keyboard={{
          enabled: true,
        }}
        loop={true}
        // pagination={pagination}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Keyboard, Navigation, Pagination]}
        className="mySwiper"
      >
        {imagesList.map(({ url, text }) => (
          <SwiperSlide key={url}>
            <>
              <div className="h-96 pb-4 relative">
                <img
                  src={url}
                  alt={text}
                  className="w-full h-full object-cover shadow-xl"
                />
                {/* #DECE8C */}
                {/* #532A09 */}
                <div className="w-full p-1 absolute bottom-0 right-0 bg-[#DECE8C] z-[1]">
                  <p
                    className={` text-[#532A09] text-center text-base font-sans font-medium `}
                  >
                    {text}
                  </p>
                </div>
              </div>
            </>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperHydeSalon;

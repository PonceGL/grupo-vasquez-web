import React, { FC, useRef, useState, useEffect } from "react";

// Components
// import { ArrowsExpandIcon } from "@heroicons/react/outline";

const Video: FC = () => {
  const element = useRef<HTMLDivElement>(null);
  const video = useRef<HTMLVideoElement>(null);
  const [isOnScreen, setIsOnScreen] = useState<boolean>(false);

  const intersection = 0.5;

  // const openFullscreen = () => {
  //   if (video.current) {
  //     if (video.current.requestFullscreen) {
  //       video.current.requestFullscreen();
  //       // @ts-ignore: Object is possibly 'null'.
  //     } else if (video.current.webkitRequestFullscreen) {
  //       /* Safari */
  //       // @ts-ignore: Object is possibly 'null'.
  //       video.current.webkitRequestFullscreen();
  //       // @ts-ignore: Object is possibly 'null'.
  //     } else if (video.current.msRequestFullscreen) {
  //       /* IE11 */
  //       // @ts-ignore: Object is possibly 'null'.
  //       video.current.msRequestFullscreen();
  //     }
  //   }
  // };

  const observeElement = (entries: any, observer: any) => {
    entries.forEach((entry: any) => {
      if (entry.intersectionRatio > intersection) {
        setIsOnScreen(true);
      } else {
        setIsOnScreen(false);
      }
    });
  };

  useEffect(() => {
    if (video.current) {
      const observer = new IntersectionObserver(observeElement, {
        threshold: intersection,
      });
      observer.observe(video.current);
    }
  }, [video]);

  useEffect(() => {
    if (video.current) {
      if (isOnScreen) {
        video.current.play().catch((error) => {
          console.error("Error al intentar reproducir", error);
          // @ts-ignore: Object is possibly 'null'.
          // video.current.playsInline = true;
        });
      } else {
        video.current.pause();
      }
    }
  }, [video, isOnScreen]);

  return (
    <div
      ref={element}
      className={`w-full aspect-video flex justify-center items-center bg-neutral-200 relative`}
    >
      <div className="flex justify-center items-center bg-blue-900 bg-opacity-50 absolute inset-0 z-[1]">
        <h2
          className={`text-center tracking-[-1.2px] text-neutral-200 text-3xl font-aeonik_medium relative z-[2] -translate-y-14 transition-bezier duration-100`}
        >
          CONSTRUCTORA E INMOBILIARIA VASQUEZ
        </h2>
        {/* <button
          className="h-5 w-5 flex justify-center items-center rounded-md focus:outline-none absolute bottom-1 right-1"
          aria-label="Botón para mandar el videa a pantalla completa"
          // onClick={() => console.log("mandar el videa a pantalla completa")}
          onClick={openFullscreen}
        >
          <span className="sr-only">Open menu</span>
          <ArrowsExpandIcon
            className={`h-5 w-5 stroke-neutral-300`}
            aria-hidden="true"
          />
        </button> */}
      </div>
      <video
        ref={video}
        className="w-full relabsolute top-0 left-0 z-0"
        src="https://res.cloudinary.com/duibtuerj/video/upload/v1656958493/vasquez-inmobiliaria/video/l8ex8bttrwk0bh3ucx5t.mp4"
        muted
        loop
        // autoPlay
        playsInline
      />
    </div>
  );
};

export default Video;

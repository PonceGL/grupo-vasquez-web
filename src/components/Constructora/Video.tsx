import React, { FC, useRef, useState, useEffect } from "react";

const Video: FC = () => {
  const element = useRef<HTMLDivElement>(null);
  const video = useRef<HTMLVideoElement>(null);
  const [isOnScreen, setIsOnScreen] = useState<boolean>(false);

  const intersection = 0.5;

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
      <div className="flex justify-center items-center bg-blue-900 bg-opacity-60 absolute inset-0 z-[1]">
        <h2
          className={`text-center tracking-[-1.2px] text-neutral-200 text-3xl font-aeonik_medium relative z-[2] -translate-y-14 transition-bezier duration-100 md:text-5xl`}
        >
          CONSTRUCTORA E INMOBILIARIA VASQUEZ
        </h2>
      </div>
      <video
        ref={video}
        className="w-full relabsolute top-0 left-0 z-0"
        src="https://res.cloudinary.com/duibtuerj/video/upload/v1656958493/vasquez-inmobiliaria/video/l8ex8bttrwk0bh3ucx5t.mp4"
        muted
        loop
        playsInline
      />
    </div>
  );
};

export default Video;

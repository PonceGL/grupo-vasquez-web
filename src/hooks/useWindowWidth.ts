import { useEffect, useState } from "react";

export const useWindowWidth = () => {
  const [width, setWidth] = useState(300);

  const handleResize = () => setWidth(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return width;
};

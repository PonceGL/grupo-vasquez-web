import { useEffect, useState } from "react";

export const useWindowScroll = () => {
  const [scroll, setScroll] = useState<number>(0);

  const handleScroll = () => setScroll(window.scrollY);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return [scroll];
};

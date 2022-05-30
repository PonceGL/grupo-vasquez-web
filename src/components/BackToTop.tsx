import React, { useState, useEffect } from "react";

const BackToTop = () => {
  const [showButton, setShowButton] = useState(false);

  const handleScroll = () =>
    setShowButton(window.scrollY > 1000 ? true : false);

  useEffect(() => {
    if (document) {
      document.addEventListener("scroll", handleScroll);

      return () => document.removeEventListener("scroll", handleScroll);
    }
  }, []);

  return (
    <a
      href="#welcome"
      className={`${
        showButton ? "w-12 h-12" : "w-0 h-0"
      } bg-[#2BE8C0] rounded-full fixed bottom-12 right-4 z-[40] origin-center transition-all duration-300`}
      id="button-up"
    >
      <svg
        width="100%"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18ZM13.7071 9.29289L10.7071 6.29289C10.3166 5.90237 9.68342 5.90237 9.29289 6.29289L6.29289 9.29289C5.90237 9.68342 5.90237 10.3166 6.29289 10.7071C6.68342 11.0976 7.31658 11.0976 7.70711 10.7071L9 9.41421L9 13C9 13.5523 9.44771 14 10 14C10.5523 14 11 13.5523 11 13V9.41421L12.2929 10.7071C12.6834 11.0976 13.3166 11.0976 13.7071 10.7071C14.0976 10.3166 14.0976 9.68342 13.7071 9.29289Z"
          fill="#092529"
        />
      </svg>
    </a>
  );
};

export default BackToTop;

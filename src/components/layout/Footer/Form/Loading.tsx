import React, { FC, Dispatch, SetStateAction } from "react";

interface Props {
  isLoading: boolean;
  closeLoading: Dispatch<SetStateAction<boolean>>;
}

const Loading: FC = () => {
  return (
    <div className="w-full p-8 flex flex-col justify-center items-center bg-sky-800 bg-opacity-50 absolute inset-0 z-10 overflow-hidden">
      <div className="w-20 h-20 loader-bg" />
    </div>
  );
};

export default Loading;

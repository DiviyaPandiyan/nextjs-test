import type { NextPage } from "next";

export type ImageWrapperType = {
  className?: string;
};

const ImageWrapper: NextPage<ImageWrapperType> = ({ className = "" }) => {
  return (
    <div
      className={`flex flex-col items-start justify-start pt-[3px] px-0 pb-0 text-left text-lg text-neutral-800 font-montserrat ${className}`}
    >
      <div className="relative leading-[20px] font-medium">Dwelling Type</div>
    </div>
  );
};

export default ImageWrapper;

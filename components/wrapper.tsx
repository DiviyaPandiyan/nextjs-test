import type { NextPage } from "next";

export type WrapperType = {
  className?: string;
  heading4HomeLoan?: string;
};

const Wrapper: NextPage<WrapperType> = ({
  className = "",
  heading4HomeLoan,
}) => {
  return (
    <div
      className={`self-stretch flex flex-col items-center justify-center gap-5 text-center text-xl text-gray1-100 font-display-md-semibold ${className}`}
    >
      <img
        className="w-[54px] h-[54px] relative overflow-hidden shrink-0"
        loading="lazy"
        alt=""
        src="/icon.svg"
      />
      <div className="self-stretch flex flex-col items-center justify-start gap-0.5">
        <div className="flex flex-row items-start justify-start">
          <div className="w-[58px] relative leading-[30px] flex items-center justify-center min-w-[58px] mq450:text-base mq450:leading-[24px]">
            I want
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start text-5xl text-gray-800">
          <div className="flex-1 relative leading-[34px] font-medium mq450:text-lgi mq450:leading-[27px]">
            {heading4HomeLoan}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wrapper;

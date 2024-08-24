import type { NextPage } from "next";

export type FrameComponentType = {
  className?: string;
  flag?: string;
};

const FrameComponent: NextPage<FrameComponentType> = ({
  className = "",
  flag,
}) => {
  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start gap-[12.8px] max-w-full text-left text-lg text-neutral-800 font-montserrat ${className}`}
    >
      <div className="relative leading-[20px] font-medium inline-block min-w-[125px]">
        Contact Code
      </div>
      <div className="self-stretch shadow-[0px_2px_6px_rgba(19,_18,_66,_0.07)] rounded-3xs bg-white border-neutral-300 border-[1px] border-solid box-border flex flex-row items-start justify-between py-[18px] pl-[19px] pr-[38px] max-w-full gap-5 text-neutral-600">
        <div className="h-[58.9px] w-[320.1px] relative shadow-[0px_2px_6px_rgba(19,_18,_66,_0.07)] rounded-3xs bg-white border-neutral-300 border-[1px] border-solid box-border hidden max-w-full" />
        <div className="relative leading-[20px] inline-block min-w-[31px] whitespace-nowrap z-[1]">
          +27
        </div>
        <div className="flex flex-col items-start justify-start pt-[9.1px] px-0 pb-0">
          <img
            className="w-[11.9px] h-[5.4px] relative z-[1]"
            alt=""
            src={flag}
          />
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;

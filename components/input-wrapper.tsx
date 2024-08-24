import type { NextPage } from "next";
import ImageWrapper from "./image-wrapper";

export type InputWrapperType = {
  className?: string;
};

const InputWrapper: NextPage<InputWrapperType> = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start gap-[28.5px] max-w-full text-left text-lg text-neutral-800 font-montserrat ${className}`}
    >
      <div className="self-stretch flex flex-col items-start justify-start gap-[13.5px] max-w-full">
        <div className="relative leading-[20px] font-medium inline-block min-w-[117px]">
          Sum Insured
        </div>
        <div className="self-stretch shadow-[0px_2px_6px_rgba(19,_18,_66,_0.07)] rounded-3xs bg-white border-neutral-300 border-[1px] border-solid box-border flex flex-row items-start justify-start py-[18px] px-[19px] max-w-full text-neutral-600">
          <div className="h-[59px] w-[643px] relative shadow-[0px_2px_6px_rgba(19,_18,_66,_0.07)] rounded-3xs bg-white border-neutral-300 border-[1px] border-solid box-border hidden max-w-full" />
          <div className="relative leading-[20px] z-[1]">
            Type your sum insured
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[9.7px] max-w-full">
        <div className="w-[520px] flex flex-row items-start justify-between gap-5 max-w-full mq450:flex-wrap">
          <ImageWrapper />
          <div className="w-[180px] relative leading-[20px] font-medium inline-block shrink-0">
            Construction Type
          </div>
        </div>
        <div className="self-stretch flex flex-row items-end justify-start gap-10 text-neutral-600 mq825:gap-5 mq825:flex-wrap">
          <div className="flex-1 shadow-[0px_2px_6px_rgba(19,_18,_66,_0.07)] rounded-3xs bg-white border-neutral-300 border-[1px] border-solid box-border flex flex-row items-start justify-between pt-4 pb-5 pl-[23px] pr-[33px] min-w-[196px] gap-5">
            <div className="h-[58.9px] w-[300px] relative shadow-[0px_2px_6px_rgba(19,_18,_66,_0.07)] rounded-3xs bg-white border-neutral-300 border-[1px] border-solid box-border hidden" />
            <div className="w-[121px] relative leading-[20px] inline-block shrink-0 z-[1]">
              Apartment
            </div>
            <div className="flex flex-col items-start justify-start pt-2.5 px-0 pb-0">
              <img
                className="w-[11.2px] h-[5.4px] relative z-[1]"
                alt=""
                src="/vector-1.svg"
              />
            </div>
          </div>
          <div className="flex-1 shadow-[0px_2px_6px_rgba(19,_18,_66,_0.07)] rounded-3xs bg-white border-neutral-300 border-[1px] border-solid box-border flex flex-row items-start justify-between py-[18px] pl-[19px] pr-[35px] min-w-[196px] gap-5">
            <div className="h-[59px] w-[301px] relative shadow-[0px_2px_6px_rgba(19,_18,_66,_0.07)] rounded-3xs bg-white border-neutral-300 border-[1px] border-solid box-border hidden" />
            <div className="w-[121px] relative leading-[20px] inline-block shrink-0 z-[1]">
              Concrete
            </div>
            <div className="flex flex-col items-start justify-start pt-[9.4px] px-0 pb-0">
              <img
                className="w-[11.2px] h-[5.4px] relative z-[1]"
                alt=""
                src="/vector-1-1.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InputWrapper;

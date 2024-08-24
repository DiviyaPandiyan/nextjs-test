import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type DetailsContainerType = {
  className?: string;

  /** Style props */
  propWidth?: CSSProperties["width"];
  propAlignSelf?: CSSProperties["alignSelf"];
};

const DetailsContainer: NextPage<DetailsContainerType> = ({
  className = "",
  propWidth,
  propAlignSelf,
}) => {
  const detailsContainerStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
      alignSelf: propAlignSelf,
    };
  }, [propWidth, propAlignSelf]);

  return (
    <div
      className={`w-[425px] shadow-[0px_4px_4px_rgba(40,_54,_113,_0.25)] rounded-lg bg-mintcream flex flex-col items-start justify-start pt-[29px] pb-7 pl-1.5 pr-[5px] box-border gap-[13px] max-w-full text-left text-base text-blackish-green font-lato ${className}`}
      style={detailsContainerStyle}
    >
      <div className="w-[425px] h-[236px] relative shadow-[0px_4px_4px_rgba(40,_54,_113,_0.25)] rounded-lg bg-mintcream hidden max-w-full" />
      <div className="self-stretch flex flex-row items-start justify-start py-0 pl-[15px] pr-[23px] box-border max-w-full">
        <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-5 mq450:flex-wrap">
          <div className="flex flex-col items-start justify-start gap-[17px]">
            <b className="relative z-[1]">Content - Location 1</b>
            <b className="relative z-[1]">Content - Location 2</b>
            <b className="relative inline-block text-dark-dark-3 min-w-[40px] z-[1]">
              Taxes
            </b>
            <b className="relative inline-block text-dark-dark-3 min-w-[72px] z-[1]">
              Discounts
            </b>
          </div>
          <div className="flex flex-col items-start justify-start gap-3.5 text-lg">
            <b className="relative inline-block min-w-[42px] whitespace-nowrap z-[1]">
              $240
            </b>
            <div className="flex flex-row items-start justify-start py-0 pl-[19px] pr-0.5">
              <b className="relative inline-block min-w-[21px] whitespace-nowrap z-[1]">
                $0
              </b>
            </div>
            <div className="flex flex-row items-start justify-start py-0 pl-2.5 pr-0">
              <b className="relative inline-block min-w-[32px] whitespace-nowrap z-[1]">
                $20
              </b>
            </div>
            <div className="flex flex-row items-start justify-start py-0 pl-[19px] pr-0.5">
              <b className="relative inline-block min-w-[21px] whitespace-nowrap z-[1]">
                $5
              </b>
            </div>
          </div>
        </div>
      </div>
      <img
        className="self-stretch relative rounded-sm max-w-full overflow-hidden max-h-full z-[1]"
        alt=""
        src="/line-271.svg"
      />
      <div className="self-stretch flex flex-row items-start justify-start py-0 pl-[15px] pr-[23px] box-border max-w-full">
        <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-5 mq450:flex-wrap">
          <b className="relative inline-block min-w-[69px] z-[1]">Total fare</b>
          <b className="relative text-lg inline-block min-w-[42px] whitespace-nowrap z-[1]">
            $255
          </b>
        </div>
      </div>
    </div>
  );
};

export default DetailsContainer;

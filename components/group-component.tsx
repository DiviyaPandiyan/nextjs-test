import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type GroupComponentType = {
  className?: string;
  placeholder?: string;
  fillTheBuildingDetailsHere?: string;

  /** Style props */
  propFlex?: CSSProperties["flex"];
  propAlignSelf?: CSSProperties["alignSelf"];
  propGap?: CSSProperties["gap"];
  propWidth?: CSSProperties["width"];
  detailsFlex?: CSSProperties["flex"];
  detailsWidth?: CSSProperties["width"];
};

const GroupComponent: NextPage<GroupComponentType> = ({
  className = "",
  propFlex,
  propAlignSelf,
  placeholder,
  propGap,
  fillTheBuildingDetailsHere,
  propWidth,
  detailsFlex,
  detailsWidth,
}) => {
  const groupDivStyle: CSSProperties = useMemo(() => {
    return {
      flex: propFlex,
      alignSelf: propAlignSelf,
    };
  }, [propFlex, propAlignSelf]);

  const detailsStyle: CSSProperties = useMemo(() => {
    return {
      gap: propGap,
      flex: detailsFlex,
      width: detailsWidth,
    };
  }, [propGap, detailsFlex, detailsWidth]);

  const fillTheBuildingStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div
      className={`flex-1 rounded-6xl [background:linear-gradient(90deg,_#35b6b4,_#283671)] flex flex-row items-end justify-center flex-wrap content-end pt-[57px] px-[53px] pb-[58px] box-border gap-[28.1px] max-w-full text-center text-21xl text-white font-display-md-semibold mq1425:pl-[26px] mq1425:pr-[26px] mq1425:box-border ${className}`}
      style={groupDivStyle}
    >
      <div className="h-[218px] w-[1273px] relative rounded-6xl [background:linear-gradient(90deg,_#35b6b4,_#283671)] hidden max-w-full" />
      <div className="flex flex-row items-start justify-start pt-[33px] pb-[32.9px] pl-[38px] pr-[37px] relative">
        <img
          className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-contain z-[1]"
          loading="lazy"
          alt=""
          src="/group-2245@2x.png"
        />
        <div className="relative leading-[36px] font-medium inline-block min-w-[26px] z-[2] mq450:text-5xl mq450:leading-[21px] mq825:text-13xl mq825:leading-[29px]">
          {placeholder}
        </div>
      </div>
      <div
        className="flex-1 flex flex-col items-start justify-start py-0 pl-0 pr-[15px] box-border gap-[17px] min-w-[515px] max-w-full text-17xl mq825:min-w-full"
        style={detailsStyle}
      >
        <h1
          className="m-0 w-[493px] relative text-inherit leading-[36px] font-bold font-[inherit] inline-block max-w-full z-[1] mq450:text-3xl mq450:leading-[21px] mq825:text-10xl mq825:leading-[29px]"
          style={fillTheBuildingStyle}
        >
          {fillTheBuildingDetailsHere}
        </h1>
        <div className="self-stretch relative text-xl leading-[23.25px] text-gainsboro text-left z-[1] mq450:text-base mq450:leading-[19px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore.
        </div>
      </div>
      <div className="w-[212px] flex flex-col items-start justify-end pt-0 px-0 pb-[22px] box-border text-3xl text-black font-lato">
        <div className="self-stretch rounded-6xl bg-gold flex flex-row items-start justify-start py-4 px-6 z-[1]">
          <div className="flex-1 relative font-semibold mq450:text-lg">
            Continue...
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupComponent;

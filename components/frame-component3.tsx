import type { NextPage } from "next";

export type FrameComponent3Type = {
  className?: string;
};

const FrameComponent3: NextPage<FrameComponent3Type> = ({ className = "" }) => {
  return (
    <div
      className={`flex flex-row items-start justify-start py-0 px-[41px] box-border max-w-full text-left text-9xl text-steelblue font-lato ${className}`}
    >
      <div className="flex flex-row items-start justify-start gap-[18.5px] mq825:flex-wrap">
        <img
          className="h-[70px] w-[87.5px] relative object-cover"
          loading="lazy"
          alt=""
          src="/houseofprovencewithswimmingpool-2@2x.png"
        />
        <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
          <h3 className="m-0 relative text-inherit leading-[64px] font-bold font-[inherit] mq450:text-3xl mq450:leading-[51px]">
            Premium Details
          </h3>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent3;

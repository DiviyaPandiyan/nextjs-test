import type { NextPage } from "next";

export type BuildingDetailsPreviewType = {
  className?: string;
};

const BuildingDetailsPreview: NextPage<BuildingDetailsPreviewType> = ({
  className = "",
}) => {
  return (
    <div
      className={`w-[1237.9px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-center text-lg text-black font-montserrat ${className}`}
    >
      <div className="w-[643.9px] flex flex-col items-start justify-start gap-[87px] max-w-full mq450:gap-[22px] mq825:gap-[43px]">
        <div className="self-stretch flex flex-col items-end justify-start gap-[7px] max-w-full">
          <div className="self-stretch flex flex-row items-start justify-center py-0 pl-[23px] pr-5">
            <div className="h-10 w-10 rounded-81xl bg-gainsboro flex flex-row items-start justify-start pt-[14.6px] pb-[1.4px] pl-[15px] pr-3 box-border">
              <div className="relative leading-[24px] font-medium inline-block min-w-[13px]">
                4
              </div>
            </div>
          </div>
          <h2 className="m-0 self-stretch relative text-15xl leading-[46px] font-bold font-lato text-neutral-800 mq450:text-xl mq450:leading-[28px] mq825:text-8xl mq825:leading-[37px]">
            Upload Document
          </h2>
          <div className="self-stretch flex flex-row items-start justify-end py-0 pl-6 pr-[21px] box-border max-w-full text-base text-neutral-600">
            <div className="flex-1 relative leading-[30px] inline-block max-w-full">
              Please fill the form below to receive a quote for your project.
              Feel free to add as much detail as needed.
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start pt-0 px-[17px] pb-[46px] box-border max-w-full mq450:pb-[30px] mq450:box-border">
          <form className="m-0 flex-1 flex flex-col items-start justify-start gap-[38px] max-w-full mq825:gap-[19px]">
            <div className="self-stretch flex flex-col items-start justify-start gap-[12.7px]">
              <div className="w-[296.1px] relative text-lg leading-[20px] font-medium font-montserrat text-neutral-800 text-left inline-block">
                Document Type
              </div>
              <div className="self-stretch flex flex-row items-end justify-start flex-wrap content-end gap-[59px] mq825:gap-[29px]">
                <div className="flex-1 shadow-[0px_2px_6px_rgba(19,_18,_66,_0.07)] rounded-3xs bg-white border-neutral-300 border-[1px] border-solid box-border flex flex-row items-start justify-start py-[18px] pl-5 pr-[18px] gap-[5.2px] min-w-[196px] mq450:flex-wrap">
                  <div className="h-[59px] w-[302px] relative shadow-[0px_2px_6px_rgba(19,_18,_66,_0.07)] rounded-3xs bg-white border-neutral-300 border-[1px] border-solid box-border hidden" />
                  <div className="flex-1 relative text-lg leading-[20px] font-montserrat text-neutral-600 text-left inline-block min-w-[120px] z-[1]">
                    Home Front Side
                  </div>
                  <div className="flex flex-col items-start justify-start pt-[9.5px] px-0 pb-0">
                    <img
                      className="w-[11.9px] h-[5.4px] relative z-[1]"
                      alt=""
                      src="/vector-1-6.svg"
                    />
                  </div>
                </div>
                <div className="w-[250px] rounded-17xl border-darkslateblue border-[1px] border-solid box-border overflow-hidden shrink-0 flex flex-row items-start justify-start pt-[13px] pb-[17px] pl-[9px] pr-[7px] whitespace-nowrap">
                  <div className="flex-1 relative text-lg leading-[20px] font-montserrat text-darkslateblue text-center">
                    Upload Image
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[12.7px]">
              <div className="w-[296.1px] relative text-lg leading-[20px] font-medium font-montserrat text-neutral-800 text-left inline-block">
                Document Type
              </div>
              <div className="self-stretch flex flex-row items-end justify-start flex-wrap content-end gap-[59px] mq825:gap-[29px]">
                <div className="flex-1 shadow-[0px_2px_6px_rgba(19,_18,_66,_0.07)] rounded-3xs bg-white border-neutral-300 border-[1px] border-solid box-border flex flex-row items-start justify-start py-[18px] pl-5 pr-[18px] gap-[5.2px] min-w-[196px] mq450:flex-wrap">
                  <div className="h-[59px] w-[302px] relative shadow-[0px_2px_6px_rgba(19,_18,_66,_0.07)] rounded-3xs bg-white border-neutral-300 border-[1px] border-solid box-border hidden" />
                  <div className="flex-1 relative text-lg leading-[20px] font-montserrat text-neutral-600 text-left inline-block min-w-[115px] z-[1]">
                    Home Back side
                  </div>
                  <div className="flex flex-col items-start justify-start pt-[9.5px] px-0 pb-0">
                    <img
                      className="w-[11.9px] h-[5.4px] relative z-[1]"
                      alt=""
                      src="/vector-1-6.svg"
                    />
                  </div>
                </div>
                <div className="w-[250px] rounded-17xl border-darkslateblue border-[1px] border-solid box-border overflow-hidden shrink-0 flex flex-row items-start justify-start pt-[13px] pb-[17px] pl-[9px] pr-[7px] whitespace-nowrap">
                  <div className="flex-1 relative text-lg leading-[20px] font-montserrat text-darkslateblue text-center">
                    Upload Image
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[12.7px]">
              <div className="w-[296.1px] relative text-lg leading-[20px] font-medium font-montserrat text-neutral-800 text-left inline-block">
                Document Type
              </div>
              <div className="self-stretch flex flex-row items-end justify-start flex-wrap content-end gap-[59px] mq825:gap-[29px]">
                <div className="flex-1 shadow-[0px_2px_6px_rgba(19,_18,_66,_0.07)] rounded-3xs bg-white border-neutral-300 border-[1px] border-solid box-border flex flex-row items-start justify-start py-[18px] pl-5 pr-[18px] gap-[5.2px] min-w-[196px] mq450:flex-wrap">
                  <div className="h-[59px] w-[302px] relative shadow-[0px_2px_6px_rgba(19,_18,_66,_0.07)] rounded-3xs bg-white border-neutral-300 border-[1px] border-solid box-border hidden" />
                  <div className="flex-1 relative text-lg leading-[20px] font-montserrat text-neutral-600 text-left inline-block min-w-[116px] z-[1]">
                    National ID Card
                  </div>
                  <div className="flex flex-col items-start justify-start pt-[9.5px] px-0 pb-0">
                    <img
                      className="w-[11.9px] h-[5.4px] relative z-[1]"
                      loading="lazy"
                      alt=""
                      src="/vector-1-6.svg"
                    />
                  </div>
                </div>
                <div className="w-[250px] rounded-17xl border-darkslateblue border-[1px] border-solid box-border overflow-hidden shrink-0 flex flex-row items-start justify-start pt-[13px] pb-[17px] pl-[9px] pr-[7px] whitespace-nowrap">
                  <div className="flex-1 relative text-lg leading-[20px] font-montserrat text-darkslateblue text-center">
                    Upload Image
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className="w-[610px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-white font-lato">
          <div className="shadow-[0px_3px_12px_rgba(74,_58,_255,_0.18)] rounded-37xl bg-darkslateblue flex flex-row items-start justify-start pt-5 px-[39px] pb-[21px]">
            <b className="relative leading-[20px] inline-block min-w-[75px]">
              Continue
            </b>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuildingDetailsPreview;

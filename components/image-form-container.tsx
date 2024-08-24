import type { NextPage } from "next";

export type ImageFormContainerType = {
  className?: string;
};

const ImageFormContainer: NextPage<ImageFormContainerType> = ({
  className = "",
}) => {
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-start py-0 px-[391px] box-border gap-[41px] max-w-full text-center text-lg text-black font-montserrat mq450:pl-5 mq450:pr-5 mq450:box-border mq825:gap-5 mq825:pl-[97px] mq825:pr-[97px] mq825:box-border mq1425:flex-wrap mq1425:justify-center mq1425:pl-[195px] mq1425:pr-[195px] mq1425:box-border ${className}`}
    >
      <img
        className="ml-[-445px] w-[404px] relative max-h-full object-cover shrink-0 max-w-full mq1425:flex-1"
        loading="lazy"
        alt=""
        src="/left-image@2x.png"
      />
      <div className="w-[1050px] flex flex-col items-start justify-start pt-[26px] px-0 pb-0 box-border min-w-[1050px] max-w-[160%] shrink-0 lg:min-w-full mq450:min-w-full mq825:min-w-full mq1425:flex-1 mq1425:min-w-full">
        <div className="self-stretch flex flex-row items-start justify-start gap-[69.1px] shrink-0 max-w-full lg:gap-[35px] mq825:gap-[17px] mq1425:flex-wrap">
          <div className="flex-1 flex flex-col items-start justify-start pt-5 px-0 pb-0 box-border max-w-full mq1425:min-w-full">
            <div className="self-stretch flex flex-col items-end justify-start gap-[60.4px] max-w-full mq450:gap-[15px] mq825:gap-[30px]">
              <div className="w-[643.9px] flex flex-col items-end justify-start pt-0 px-0 pb-[21.6px] box-border gap-[19px] max-w-full">
                <div className="self-stretch flex flex-row items-start justify-center py-0 pl-[23px] pr-5">
                  <div className="h-10 w-10 rounded-81xl bg-mediumseagreen-100 flex flex-row items-start justify-start pt-[14.6px] px-[15px] pb-[1.4px] box-border z-[1]">
                    <div className="flex-1 relative leading-[24px] font-medium inline-block min-w-[10px]">
                      1
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-end justify-start gap-1.5 max-w-full text-15xl text-neutral-800 font-lato">
                  <h2 className="m-0 self-stretch relative text-inherit leading-[46px] font-bold font-[inherit] mq450:text-xl mq450:leading-[28px] mq825:text-8xl mq825:leading-[37px]">
                    Select your Location
                  </h2>
                  <div className="self-stretch flex flex-row items-start justify-end py-0 pl-6 pr-[21px] box-border max-w-full text-base text-neutral-600 font-montserrat">
                    <div className="flex-1 relative leading-[30px] inline-block max-w-full">
                      Please fill the form below to receive a quote for your
                      project. Feel free to add as much detail as needed.
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[628.9px] flex flex-row items-start justify-end py-0 px-[33px] box-border max-w-full text-left text-neutral-800">
                <div className="flex-1 flex flex-col items-start justify-start gap-[13.7px] max-w-full">
                  <div className="w-[247px] relative leading-[20px] font-medium inline-block">
                    Search your location here
                  </div>
                  <div className="self-stretch shadow-[0px_2px_6px_rgba(19,_18,_66,_0.07)] rounded-3xs bg-white border-neutral-300 border-[1px] border-solid box-border flex flex-row items-start justify-between pt-[18px] pb-3.5 pl-[43px] pr-[26px] max-w-full gap-5 text-neutral-600 mq825:pl-[21px] mq825:box-border">
                    <div className="h-[58.9px] w-[562px] relative shadow-[0px_2px_6px_rgba(19,_18,_66,_0.07)] rounded-3xs bg-white border-neutral-300 border-[1px] border-solid box-border hidden max-w-full" />
                    <div className="w-[284px] relative leading-[20px] inline-block shrink-0 z-[1]">
                      Alpha Romeo
                    </div>
                    <img
                      className="h-6 w-6 relative overflow-hidden shrink-0 object-contain z-[1]"
                      alt=""
                      src="/evaarrowiosforwardfill@2x.png"
                    />
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-end py-0 pl-0 pr-[13px] box-border max-w-full text-white font-lato">
                <div className="flex-1 flex flex-col items-end justify-start gap-[31px] max-w-full mq825:gap-[15px]">
                  <div className="w-[616.9px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
                    <div className="shadow-[0px_3px_12px_rgba(74,_58,_255,_0.18)] rounded-37xl bg-darkslateblue flex flex-row items-start justify-start pt-5 px-[39px] pb-[21px]">
                      <b className="relative leading-[20px] inline-block min-w-[75px]">
                        Continue
                      </b>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col items-end justify-start gap-1.5 max-w-full text-black font-montserrat">
                    <div className="self-stretch flex flex-col items-end justify-start gap-4 max-w-full">
                      <div className="w-[628.9px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
                        <img
                          className="h-36 w-0 relative object-contain"
                          alt=""
                          src="/line-267.svg"
                        />
                      </div>
                      <div className="self-stretch flex flex-col items-end justify-start gap-[8.3px] max-w-full shrink-0">
                        <div className="w-[628.9px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
                          <div className="h-10 w-10 rounded-81xl bg-gainsboro flex flex-row items-start justify-start pt-[14.6px] pb-[1.4px] pl-[15px] pr-3.5 box-border">
                            <div className="relative leading-[24px] font-medium inline-block min-w-[11px]">
                              2
                            </div>
                          </div>
                        </div>
                        <h2 className="m-0 self-stretch relative text-15xl leading-[46px] font-bold font-lato text-neutral-800 mq450:text-xl mq450:leading-[28px] mq825:text-8xl mq825:leading-[37px]">
                          Select your Cover
                        </h2>
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row items-start justify-end py-0 pl-6 pr-[21px] box-border max-w-full text-base text-neutral-600">
                      <div className="flex-1 relative leading-[30px] inline-block max-w-full">
                        Please fill the form below to receive a quote for your
                        project. Feel free to add as much detail as needed.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img
            className="w-[324px] relative max-h-full object-cover max-w-full mq1425:flex-1"
            loading="lazy"
            alt=""
            src="/right-image@2x.png"
          />
        </div>
      </div>
    </div>
  );
};

export default ImageFormContainer;

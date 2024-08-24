import type { NextPage } from "next";
import ImageWrapper from "./image-wrapper";
import GroupComponent from "./group-component";
import FrameComponent3 from "./frame-component3";
import DetailsContainer from "./details-container";
import InputWrapper from "./input-wrapper";

export type CheckIconType = {
  className?: string;
};

const CheckIcon: NextPage<CheckIconType> = ({ className = "" }) => {
  return (
    <div
      className={`w-[1405px] flex flex-row items-start justify-end py-0 px-[66px] box-border max-w-full text-center text-5xl text-white font-lato mq1425:pl-[33px] mq1425:pr-[33px] mq1425:box-border ${className}`}
    >
      <div className="flex-1 flex flex-col items-start justify-start gap-[70px] max-w-full mq450:gap-[17px] mq825:gap-[35px]">
        <div className="w-[1166px] flex flex-row items-start justify-center pt-0 px-5 pb-[9px] box-border max-w-full text-xl">
          <div className="flex flex-row items-start justify-start gap-6 max-w-full lg:flex-wrap">
            <div className="rounded-17xl bg-mediumaquamarine overflow-hidden flex flex-row items-start justify-start py-[15px] px-[26px] box-border max-w-full shrink-0">
              <b className="w-[498px] relative leading-[24px] inline-block mq450:text-base mq450:leading-[19px]">
                MU, 2 St François Xavier St, Port Louis 11611, Mauritius
              </b>
            </div>
            <div className="w-[425px] rounded-17xl border-darkslateblue border-[1px] border-solid box-border overflow-hidden shrink-0 flex flex-row items-start justify-start py-[13px] pl-[9px] pr-[7px] whitespace-nowrap max-w-full text-steelblue">
              <b className="flex-1 relative leading-[24px] inline-block max-w-full">
                2 St François Xavier Balisson, Mauritius
              </b>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-center pt-0 pb-2 pl-8 pr-5 box-border max-w-full text-left text-dimgray-200 font-montserrat">
          <div className="w-[509px] flex flex-row items-start justify-center flex-wrap content-start gap-[47px] max-w-full mq825:gap-[23px]">
            <div className="flex-1 flex flex-row items-start justify-start gap-[19px] min-w-[151px]">
              <div className="h-[34px] w-[33px] relative rounded-8xs bg-mediumseagreen-200 border-black border-[1px] border-solid box-border">
                <div className="absolute top-[0px] left-[0px] rounded-8xs bg-mediumseagreen-200 border-black border-[1px] border-solid box-border w-full h-full hidden" />
                <img
                  className="absolute top-[1px] left-[2px] w-[30px] h-[30px] overflow-hidden z-[1]"
                  loading="lazy"
                  alt=""
                  src="/charmtick.svg"
                />
              </div>
              <div className="flex-1 flex flex-col items-start justify-start pt-1 px-0 pb-0">
                <div className="self-stretch relative leading-[26px] font-medium [text-shadow:0px_0px_4px_rgba(51,_122,_183,_0.25)] mq450:text-lgi mq450:leading-[21px]">
                  Yes, I’m Owner
                </div>
              </div>
            </div>
            <div className="flex-1 flex flex-row items-start justify-start gap-5 min-w-[149px]">
              <div className="h-[34px] w-[33px] relative rounded-8xs border-dimgray-100 border-[1px] border-solid box-border" />
              <div className="flex-1 flex flex-col items-start justify-start pt-1 px-0 pb-0">
                <div className="self-stretch relative leading-[26px] font-medium [text-shadow:0px_0px_4px_rgba(51,_122,_183,_0.25)] mq450:text-lgi mq450:leading-[21px]">
                  No, I’m Tenant
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[1215px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-black font-display-md-semibold">
          <div className="w-[551px] flex flex-row items-start justify-center flex-wrap content-start gap-[26px] max-w-full">
            <div className="flex flex-col items-start justify-start pt-[18px] px-0 pb-0">
              <div className="relative leading-[150%] mq450:text-lgi mq450:leading-[29px]">
                <span>Sum Insured</span>
                <span className="text-firebrick">*</span>
              </div>
            </div>
            <div className="flex-1 flex flex-col items-start justify-start gap-1 min-w-[237px] max-w-full text-left text-17xl text-primary-primary">
              <h1 className="m-0 relative text-inherit tracking-[-0.02em] leading-[150%] font-semibold font-[inherit] inline-block max-w-full mq450:text-3xl mq450:leading-[32px] mq825:text-10xl mq825:leading-[43px]">
                Enter your Amount|
              </h1>
              <div className="self-stretch h-0.5 relative bg-neutral-grey-4 border-neutral-grey-4 border-[1px] border-solid box-border" />
            </div>
          </div>
        </div>
        <ImageWrapper />
        <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 text-lg">
          <div className="w-[267px] shadow-[0px_3px_12px_rgba(74,_58,_255,_0.18)] rounded-37xl bg-darkslateblue flex flex-row items-start justify-center pt-5 px-5 pb-[21px] box-border">
            <b className="relative leading-[20px] inline-block min-w-[75px]">
              Continue
            </b>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[23px] box-border max-w-full text-21xl font-display-md-semibold">
          <GroupComponent
            placeholder="3"
            fillTheBuildingDetailsHere="Fill the Building Details Here"
          />
        </div>
        <div className="self-stretch flex flex-row items-start justify-start py-0 pl-6 pr-7 box-border max-w-full text-lg text-black font-montserrat">
          <div className="flex-1 flex flex-col items-start justify-start gap-3.5 max-w-full">
            <div className="flex flex-row items-start justify-start py-0 px-[7px]">
              <div className="h-10 w-10 rounded-81xl bg-gainsboro flex flex-row items-start justify-start pt-[14.6px] pb-[1.4px] pl-[15px] pr-3.5 box-border">
                <div className="relative leading-[24px] font-medium inline-block min-w-[11px]">
                  3
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-end justify-center gap-[93px] max-w-full text-left text-base text-neutral-800 font-lato lg:flex-wrap mq450:gap-[23px] mq825:gap-[46px]">
              <div className="w-[480px] flex flex-col items-start justify-start gap-[34px] min-w-[480px] max-w-full lg:flex-1 mq825:gap-[17px] mq825:min-w-full">
                <div className="self-stretch flex flex-col items-start justify-start gap-[12.5px] max-w-full">
                  <h2 className="m-0 w-[442px] relative text-15xl leading-[46px] font-bold font-[inherit] inline-block max-w-full mq450:text-xl mq450:leading-[28px] mq825:text-8xl mq825:leading-[37px]">
                    Building Details
                  </h2>
                  <div className="self-stretch flex flex-col items-start justify-start gap-[21px] max-w-full text-neutral-600 font-montserrat">
                    <div className="self-stretch flex flex-col items-start justify-start gap-[18px] max-w-full">
                      <div className="self-stretch relative leading-[30px]">
                        Please fill the form below to receive a quote for your
                        project. Feel free to add as much detail as needed.
                      </div>
                      <img
                        className="w-[464px] relative max-h-full max-w-full"
                        loading="lazy"
                        alt=""
                        src="/line-270.svg"
                      />
                    </div>
                    <FrameComponent3 />
                  </div>
                  <DetailsContainer />
                </div>
                <div className="flex flex-row items-start justify-start py-0 px-[7px]">
                  <img
                    className="h-[121px] w-[5.8px] relative object-contain"
                    alt=""
                    src="/line-269.svg"
                  />
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[18px] max-w-full text-center text-lg text-black font-montserrat">
                  <div className="flex flex-row items-start justify-start py-0 px-[5px]">
                    <div className="h-10 w-10 rounded-81xl bg-gainsboro flex flex-row items-start justify-start pt-[14.6px] pb-[1.4px] pl-[15px] pr-3.5 box-border">
                      <div className="relative leading-[24px] font-medium inline-block min-w-[11px]">
                        3
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start gap-[11px] max-w-full text-15xl text-neutral-800 font-lato">
                    <h2 className="m-0 w-[246px] relative text-inherit leading-[46px] font-bold font-[inherit] inline-block mq450:text-xl mq450:leading-[28px] mq825:text-8xl mq825:leading-[37px]">
                      Content Details
                    </h2>
                    <div className="self-stretch flex flex-row items-start justify-start py-0 pl-[5px] pr-0 box-border max-w-full text-left text-base text-neutral-600 font-montserrat">
                      <div className="flex-1 relative leading-[30px] inline-block max-w-full">
                        Please fill the form below to receive a quote for your
                        project. Feel free to add as much detail as needed.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-[431px] flex flex-row items-start justify-start py-0 px-[3px] box-border max-w-full">
                  <div className="flex-1 flex flex-col items-start justify-start gap-[13px] max-w-full">
                    <FrameComponent3 />
                    <DetailsContainer
                      propWidth="unset"
                      propAlignSelf="stretch"
                    />
                  </div>
                </div>
              </div>
              <div className="flex-1 flex flex-col items-start justify-end pt-0 px-0 pb-[3px] box-border min-w-[421px] max-w-full text-center text-xl text-white mq825:min-w-full">
                <div className="self-stretch flex flex-col items-start justify-start gap-[69px] max-w-full mq450:gap-[17px] mq825:gap-[34px]">
                  <div className="flex flex-row items-start justify-start gap-4 max-w-full mq825:flex-wrap">
                    <div className="rounded-17xl bg-mediumaquamarine overflow-hidden flex flex-row items-start justify-start py-[15px] px-9 whitespace-nowrap">
                      <b className="relative leading-[24px]">
                        Port Louis 11611, Mauritius
                      </b>
                    </div>
                    <div className="w-[231px] rounded-17xl border-darkslateblue border-[1px] border-solid box-border overflow-hidden shrink-0 flex flex-row items-start justify-start py-[13px] pl-[9px] pr-[7px] whitespace-nowrap text-steelblue">
                      <b className="flex-1 relative leading-[24px]">
                        {" "}
                        Balisson, Mauritius
                      </b>
                    </div>
                  </div>
                  <form className="m-0 self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[202px] box-border gap-[58.3px] max-w-full mq825:gap-[29px] mq825:pb-[131px] mq825:box-border">
                    <InputWrapper />
                    <div className="w-[608px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
                      <div className="w-[374px] rounded-17xl bg-darkslateblue overflow-hidden shrink-0 flex flex-row items-start justify-center py-[17px] px-5 box-border whitespace-nowrap max-w-full">
                        <div className="relative text-lg leading-[20px] font-montserrat text-white text-center inline-block min-w-[106px]">{`Save & Next`}</div>
                      </div>
                    </div>
                  </form>
                  <div className="self-stretch flex flex-row items-start justify-start py-0 pl-[5px] pr-0 box-border max-w-full">
                    <form className="m-0 flex-1 flex flex-col items-start justify-start gap-[59.3px] max-w-full mq825:gap-[30px]">
                      <div className="flex flex-row items-start justify-start pt-0 px-0 pb-[15.7px] box-border gap-4 max-w-full mq825:flex-wrap">
                        <div className="rounded-17xl bg-mediumaquamarine overflow-hidden flex flex-row items-start justify-start py-[15px] px-9 whitespace-nowrap">
                          <b className="relative text-xl leading-[24px] font-lato text-white text-center">
                            Port Louis 11611, Mauritius
                          </b>
                        </div>
                        <div className="w-[231px] rounded-17xl border-darkslateblue border-[1px] border-solid box-border overflow-hidden shrink-0 flex flex-row items-start justify-start py-[13px] pl-[9px] pr-[7px] whitespace-nowrap">
                          <b className="flex-1 relative text-xl leading-[24px] font-lato text-steelblue text-center">
                            {" "}
                            Balisson, Mauritius
                          </b>
                        </div>
                      </div>
                      <InputWrapper />
                      <div className="w-[608px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
                        <div className="w-[374px] rounded-17xl bg-darkslateblue overflow-hidden shrink-0 flex flex-row items-start justify-center py-[17px] px-5 box-border whitespace-nowrap max-w-full">
                          <div className="relative text-lg leading-[20px] font-montserrat text-white text-center inline-block min-w-[106px]">{`Save & Next`}</div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckIcon;

import type { NextPage } from "next";
import HeaderLoggedIn from "../components/header-logged-in";
import ImageFormContainer from "../components/image-form-container";
import CheckIcon from "../components/check-icon";
import GroupComponent from "../components/group-component";
import FrameComponent from "../components/frame-component";
import BuildingDetailsPreview from "../components/building-details-preview";
import Footer from "../components/footer";

const FullQuoteHomeInsurance: NextPage = () => {
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-start justify-start gap-[250px] leading-[normal] tracking-[normal] text-center text-sm text-white font-montserrat mq450:gap-[62px] mq825:gap-[125px]">
      <div className="w-10 h-10 relative rounded-81xl bg-black hidden">
        <div className="absolute top-[calc(50%_-_5.2px)] left-[calc(50%_-_5px)] leading-[24px] font-medium inline-block w-2.5">
          1
        </div>
      </div>
      <HeaderLoggedIn />
      <main className="self-stretch flex flex-col items-end justify-start pt-0 px-0 pb-14 box-border gap-[22px] max-w-full mq1425:pb-5 mq1425:box-border">
        <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
          <img
            className="w-[700px] relative max-h-full max-w-full"
            alt=""
            src="/divider.svg"
          />
        </div>
        <section className="self-stretch flex flex-col items-end justify-start pt-0 px-0 pb-[140px] box-border gap-[29.7px] max-w-full lg:pb-[38px] lg:box-border mq450:pb-[25px] mq450:box-border mq1425:pb-[59px] mq1425:box-border">
          <ImageFormContainer />
          <CheckIcon />
        </section>
        <section className="self-stretch flex flex-row items-start justify-center pt-0 pb-[90.2px] pl-[29px] pr-5 box-border max-w-full lg:pb-[59px] lg:box-border mq825:pb-[38px] mq825:box-border">
          <div className="w-[1273px] flex flex-col items-start justify-start gap-[66px] max-w-full mq450:gap-4 mq825:gap-[33px]">
            <GroupComponent
              propFlex="unset"
              propAlignSelf="stretch"
              placeholder="3"
              fillTheBuildingDetailsHere="Fill your Details Here"
              propWidth="unset"
            />
            <div className="w-[1237px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
              <form className="m-0 w-[647px] flex flex-col items-start justify-start gap-10 max-w-full mq825:gap-5">
                <div className="self-stretch flex flex-row items-start justify-start py-0 pl-0.5 pr-px box-border max-w-full">
                  <div className="flex-1 flex flex-col items-end justify-start gap-[7px] max-w-full">
                    <div className="self-stretch flex flex-row items-start justify-center py-0 pl-[23px] pr-5">
                      <div className="h-10 w-10 rounded-81xl bg-gainsboro flex flex-row items-start justify-start pt-[14.6px] pb-[1.4px] pl-[15px] pr-3.5 box-border">
                        <div className="relative text-lg leading-[24px] font-medium font-montserrat text-black text-center inline-block min-w-[11px]">
                          3
                        </div>
                      </div>
                    </div>
                    <b className="self-stretch relative text-15xl leading-[46px] font-lato text-neutral-800 text-center mq450:text-xl mq450:leading-[28px] mq825:text-8xl mq825:leading-[37px]">
                      Customer Information
                    </b>
                    <div className="self-stretch flex flex-row items-start justify-end py-0 pl-6 pr-[21px] box-border max-w-full">
                      <div className="flex-1 relative text-base leading-[30px] font-montserrat text-neutral-600 text-center inline-block max-w-full">
                        Please fill the form below to receive a quote for your
                        project. Feel free to add as much detail as needed.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-end justify-start pt-0 px-0 pb-[18.3px] box-border gap-[35.2px] max-w-full mq825:gap-[18px]">
                  <div className="self-stretch flex flex-col items-start justify-start gap-[13.5px] max-w-full">
                    <div className="relative text-lg leading-[20px] font-medium font-montserrat text-neutral-800 text-left inline-block min-w-[78px]">
                      Email ID
                    </div>
                    <div className="self-stretch shadow-[0px_2px_6px_rgba(19,_18,_66,_0.07)] rounded-3xs bg-white border-neutral-300 border-[1px] border-solid box-border flex flex-row items-start justify-start py-[18px] px-[19px] max-w-full">
                      <div className="h-[59px] w-[643px] relative shadow-[0px_2px_6px_rgba(19,_18,_66,_0.07)] rounded-3xs bg-white border-neutral-300 border-[1px] border-solid box-border hidden max-w-full" />
                      <div className="relative text-lg leading-[20px] font-montserrat text-neutral-600 text-left z-[1]">
                        Enter Your Email ID
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-end justify-start gap-[27.5px] max-w-full mq825:flex-wrap">
                    <div className="flex-1 flex flex-col items-start justify-start gap-[35.2px] min-w-[208px] max-w-full mq450:gap-[18px]">
                      <FrameComponent flag="/vector-1-4.svg" />
                      <FrameComponent flag="/vector-1-5.svg" />
                    </div>
                    <div className="w-[299.2px] flex flex-col items-end justify-start gap-[35.2px] min-w-[299.2px] mq450:gap-[18px] mq825:flex-1">
                      <div className="self-stretch flex flex-col items-start justify-start gap-[13px]">
                        <div className="relative text-lg leading-[20px] font-medium font-montserrat text-neutral-800 text-left inline-block min-w-[73px]">
                          Contact
                        </div>
                        <div className="self-stretch shadow-[0px_2px_6px_rgba(19,_18,_66,_0.07)] rounded-3xs bg-white border-neutral-300 border-[1px] border-solid flex flex-row items-start justify-start py-[18px] px-[17px] whitespace-nowrap">
                          <div className="h-[58.9px] w-[299.2px] relative shadow-[0px_2px_6px_rgba(19,_18,_66,_0.07)] rounded-3xs bg-white border-neutral-300 border-[1px] border-solid box-border hidden" />
                          <div className="relative text-lg leading-[20px] font-montserrat text-neutral-600 text-left z-[1]">
                            Enter Number
                          </div>
                        </div>
                      </div>
                      <div className="self-stretch flex flex-col items-start justify-start gap-[12.7px]">
                        <div className="relative text-lg leading-[20px] font-medium font-montserrat text-neutral-800 text-left shrink-0">
                          Alternative Mobile Number
                        </div>
                        <div className="self-stretch shadow-[0px_2px_6px_rgba(19,_18,_66,_0.07)] rounded-3xs bg-white border-neutral-300 border-[1px] border-solid flex flex-row items-start justify-start p-[18px] shrink-0 whitespace-nowrap">
                          <div className="h-[59px] w-[299px] relative shadow-[0px_2px_6px_rgba(19,_18,_66,_0.07)] rounded-3xs bg-white border-neutral-300 border-[1px] border-solid box-border hidden" />
                          <div className="w-[173px] relative text-lg leading-[20px] font-montserrat text-neutral-600 text-left inline-block shrink-0 z-[1]">
                            Enter Number
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-[630.2px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
                  <div className="shadow-[0px_3px_12px_rgba(74,_58,_255,_0.18)] rounded-37xl bg-darkslateblue flex flex-row items-start justify-start pt-5 px-[39px] pb-[21px]">
                    <b className="relative text-lg leading-[20px] inline-block font-lato text-white text-center min-w-[75px]">
                      Continue
                    </b>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </section>
        <section className="self-stretch flex flex-row items-start justify-center py-0 pl-[29px] pr-5 box-border max-w-full">
          <div className="w-[1273px] flex flex-col items-start justify-start gap-[66px] max-w-full mq450:gap-4 mq825:gap-[33px]">
            <GroupComponent
              propFlex="unset"
              propAlignSelf="stretch"
              placeholder="4"
              fillTheBuildingDetailsHere="Upload your Document"
              propWidth="unset"
            />
            <BuildingDetailsPreview />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default FullQuoteHomeInsurance;

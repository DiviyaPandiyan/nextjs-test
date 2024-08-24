import type { NextPage } from "next";

export type HeaderLoggedInType = {
  className?: string;
};

const HeaderLoggedIn: NextPage<HeaderLoggedInType> = ({ className = "" }) => {
  return (
    <header
      className={`self-stretch h-[68px] shadow-[0px_4px_16px_rgba(17,_34,_17,_0.05)] bg-white flex flex-col items-start justify-start pt-3 pb-0 pl-[104px] pr-14 box-border relative gap-[59px] max-w-full text-left text-sm text-blackish-green font-lato mq450:pl-5 mq450:box-border mq825:gap-[29px] mq825:pl-[52px] mq825:pr-7 mq825:box-border ${className}`}
    >
      <div className="w-[103px] h-[5px] absolute !m-[0] right-[259px] bottom-[-19px] bg-mint-green opacity-[0]" />
      <div className="w-[1211px] flex flex-row items-end justify-between shrink-0 gap-5 max-w-full">
        <div className="w-[309px] flex flex-col items-start justify-start gap-[20.5px]">
          <div className="self-stretch flex flex-row items-center justify-start mq450:gap-36">
            <div className="flex-1 flex flex-row items-start justify-start gap-[29px]">
              <div className="flex flex-row items-center justify-start gap-1">
                <img
                  className="h-6 w-6 relative overflow-hidden shrink-0 hidden"
                  alt=""
                  src="/airplane.svg"
                />
                <a className="[text-decoration:none] relative font-bold text-[inherit] whitespace-nowrap">
                  My Personal Protection 
                </a>
              </div>
              <div className="flex flex-row items-center justify-start gap-1">
                <img
                  className="h-6 w-6 relative overflow-hidden shrink-0 hidden"
                  alt=""
                  src="/ionbed.svg"
                />
                <a className="[text-decoration:underline] relative font-bold text-[inherit] inline-block min-w-[129px] whitespace-nowrap">
                  My Corporate Cover
                </a>
              </div>
            </div>
          </div>
          <div className="w-[175px] flex flex-row items-start justify-start py-0 px-[23px] box-border">
            <div className="h-[5px] flex-1 relative bg-mint-green" />
          </div>
        </div>
        <div className="w-[185px] flex flex-col items-start justify-end pt-0 px-0 pb-[11px] box-border">
          <div className="self-stretch flex flex-row items-start justify-between gap-5">
            <div className="flex flex-col items-start justify-start pt-[10.5px] px-0 pb-0">
              <div className="flex flex-row items-start justify-start gap-[15px]">
                <div className="flex flex-row items-start justify-start gap-1">
                  <img
                    className="h-6 w-6 relative overflow-hidden shrink-0"
                    loading="lazy"
                    alt=""
                    src="/heart.svg"
                  />
                  <div className="flex flex-col items-start justify-start pt-[3.5px] px-0 pb-0">
                    <a className="[text-decoration:none] relative font-bold text-[inherit] inline-block min-w-[27px]">
                      AFR
                    </a>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start pt-[3.5px] px-0 pb-0">
                  <b className="relative inline-block min-w-[5px]">|</b>
                </div>
              </div>
            </div>
            <div className="flex flex-row items-start justify-start gap-1">
              <div className="h-[45px] w-[45px] relative">
                <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-gainsboro w-full h-full" />
                <div className="absolute top-[31px] left-[31px] w-3.5 h-3.5">
                  <div className="absolute top-[2px] left-[2px] rounded-[50%] bg-blackish-green w-2.5 h-2.5 z-[1]" />
                  <img
                    className="absolute top-[0px] left-[0px] w-full h-full overflow-hidden object-contain z-[2]"
                    alt=""
                    src="/arrow-down@2x.png"
                  />
                </div>
              </div>
              <div className="flex flex-col items-start justify-start pt-3.5 px-0 pb-0">
                <a className="[text-decoration:none] relative font-bold text-[inherit] inline-block min-w-[29px]">
                  USD
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch rounded-xl bg-primary-secondary-light flex flex-row items-start justify-between pt-[15px] pb-0 pl-[30px] pr-[17px] box-border shrink-0 max-w-full gap-5 text-29xl text-neutral-black">
        <div className="h-[164px] w-[1280px] relative rounded-xl bg-primary-secondary-light hidden max-w-full" />
        <div className="w-[747px] flex flex-col items-start justify-start pt-[19px] px-0 pb-0 box-border max-w-full">
          <div className="self-stretch flex flex-col items-start justify-start max-w-full z-[1]">
            <h1 className="m-0 relative text-inherit tracking-[-0.02em] leading-[150%] font-bold font-[inherit] inline-block whitespace-nowrap max-w-full">
              Home Insurance Full Quote Journey
            </h1>
            <div className="relative text-base leading-[150%] font-montserrat text-neutral-grey-5 whitespace-nowrap">
              Embarking on your motor full quote journey: Navigating the road to
              comprehensive coverage
            </div>
          </div>
        </div>
        <img
          className="h-[149px] w-[270px] relative overflow-hidden shrink-0 mix-blend-normal z-[1]"
          loading="lazy"
          alt=""
          src="/img-car1.svg"
        />
      </div>
    </header>
  );
};

export default HeaderLoggedIn;

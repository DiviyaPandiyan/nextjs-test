import type { NextPage } from "next";

export type FooterType = {
  className?: string;
};

const Footer: NextPage<FooterType> = ({ className = "" }) => {
  return (
    <footer
      className={`bg-darkslategray flex flex-row items-start justify-start py-[100px] pl-[73px] pr-[60px] box-border gap-[47px] max-w-full text-left text-5xl text-white font-lato mq825:gap-[23px] mq825:py-[65px] mq825:pl-9 mq825:pr-[30px] mq825:box-border mq1425:flex-wrap ${className}`}
    >
      <div className="w-[316px] flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border text-xl text-gray1-200">
        <div className="self-stretch flex flex-col items-start justify-start gap-[35px] mq450:gap-[17px]">
          <img
            className="w-[139.3px] h-[42px] relative object-cover"
            loading="lazy"
            alt=""
            src="/image-1@2x.png"
          />
          <div className="self-stretch flex flex-col items-start justify-start gap-[18px]">
            <b className="relative tracking-[0.02em] leading-[34px] mq450:text-base mq450:leading-[27px]">
              Insurance Company in Mauritius
            </b>
            <div className="w-[263px] relative text-mini leading-[22px] font-medium font-montserrat text-gray1-300 flex items-center">
              © 2024-2025 Eagle Insurance
            </div>
          </div>
        </div>
      </div>
      <div className="w-[585px] flex flex-row items-start justify-start py-0 pl-0 pr-[13px] box-border gap-[60px] max-w-full mq825:gap-[30px] mq825:flex-wrap">
        <div className="w-[200px] flex flex-col items-start justify-start gap-5 min-w-[200px] mq825:flex-1">
          <b className="relative leading-[36px] inline-block min-w-[61.8px] mq450:text-lgi mq450:leading-[28px]">
            Links
          </b>
          <div className="self-stretch flex flex-col items-start justify-start py-2 px-0 gap-4 text-sm text-gray1-400 font-montserrat">
            <div className="w-[52.2px] h-6 relative leading-[40px] flex items-center shrink-0">
              Home
            </div>
            <div className="w-[59.3px] h-6 relative leading-[40px] flex items-center shrink-0">
              Pricing
            </div>
            <div className="w-[76.9px] h-6 relative leading-[40px] flex items-center shrink-0">
              About us
            </div>
            <div className="w-[65.6px] h-6 relative leading-[40px] flex items-center shrink-0">
              Careers
            </div>
            <div className="w-[72.7px] h-6 relative leading-[40px] flex items-center shrink-0">
              Features
            </div>
            <div className="w-[39.5px] h-6 relative leading-[40px] flex items-center shrink-0">
              Blog
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-col items-start justify-start gap-5 min-w-[203px]">
          <b className="w-[102.1px] relative leading-[36px] flex items-center mq450:text-lgi mq450:leading-[28px]">
            Services
          </b>
          <div className="self-stretch flex flex-col items-start justify-start py-2 px-0 gap-4 text-sm text-gray1-400 font-montserrat">
            <div className="w-48 h-6 relative leading-[40px] flex items-center shrink-0">
              Health Insurance Plans
            </div>
            <div className="w-[116.9px] h-6 relative leading-[40px] flex items-center shrink-0">
              Car Insurance
            </div>
            <div className="w-[94.4px] h-6 relative leading-[40px] flex items-center shrink-0">
              Investment
            </div>
            <div className="w-[144.6px] h-6 relative leading-[40px] flex items-center shrink-0">
              Mediclaim Policy
            </div>
            <div className="w-[57.7px] h-6 relative leading-[40px] flex items-center shrink-0">
              Others
            </div>
            <div className="w-[142.6px] h-6 relative leading-[40px] flex items-center shrink-0">
              Health Insurance
            </div>
          </div>
        </div>
      </div>
      <div className="w-[312px] flex flex-col items-start justify-start gap-[38.2px] mq450:gap-[19px]">
        <div className="self-stretch flex flex-col items-start justify-start gap-[27px]">
          <b className="w-[99.5px] relative leading-[36px] flex items-center mq450:text-lgi mq450:leading-[28px]">
            Address
          </b>
          <div className="self-stretch flex flex-row items-start justify-start pt-[3px] px-0 pb-[3.9px] opacity-[0.75] text-base font-montserrat">
            <div className="h-[52.9px] w-[245.1px] relative leading-[29.92px] font-medium flex items-center shrink-0">
              <span className="w-full">
                <p className="m-0">15 A5 Wall Street, Mauritius.</p>
                <p className="m-0">
                  <a
                    className="text-[inherit]"
                    href={`https://www.google.com/search?q=eagle+isnurance&oq=eagle+isnurance&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTINCAEQABiDARixAxiABDIKCAIQABixAxiABDIKCAMQABixAxiABDIKCAQQABixAxiABDIKCAUQABixAxiABDIHCAYQABiABDIHCAcQABiABDIHCAgQABiABNIBCDI5NjFqMGoxqAIAsAIA&sourceid=chrome&ie=UTF-8#`}
                    target="_blank"
                  >
                    <span className="[text-decoration:underline]">
                      +230 460 9200
                    </span>
                  </a>
                </p>
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-row items-start justify-start py-0 px-[5px] text-xl">
          <div className="flex flex-col items-start justify-start gap-5">
            <div className="relative leading-[30px] font-semibold inline-block min-w-[114px] mq450:text-base mq450:leading-[24px]">
              Social Media
            </div>
            <div className="flex flex-row items-start justify-start gap-5">
              <img
                className="h-[50px] w-[50px] relative overflow-hidden shrink-0 min-h-[50px]"
                loading="lazy"
                alt=""
                src="/antdesigntwittercirclefilled.svg"
              />
              <img
                className="h-[50px] w-[50px] relative overflow-hidden shrink-0 min-h-[50px]"
                loading="lazy"
                alt=""
                src="/entyposocialfacebookwithcircle.svg"
              />
              <img
                className="h-[50px] w-[50px] relative overflow-hidden shrink-0 object-cover min-h-[50px]"
                loading="lazy"
                alt=""
                src="/antdesigntwittercirclefilled-1@2x.png"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

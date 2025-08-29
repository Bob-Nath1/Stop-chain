import React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import BusinessCenterOutlinedIcon from "@mui/icons-material/BusinessCenterOutlined";
import MailOutlinedIcon from "@mui/icons-material/MailOutlined";

const TopBar = () => {
  return (
     <div className="container mx-auto border-b border-[#ADD8E6] xl:max-h-9 overflow-hidden">
    <div className="w-screen bg-white z-20">
      <div
        className="
          flex flex-col divide-y divide-[#ADD8E6]
          lg:flex-row lg:divide-y-0 lg:items-start lg:h-20
        "
      >
        {/* Default screen: First row */}
        <div
          className="
            grid 
            grid-cols-[15%_10%_30%_10%_35%] 
            lg:grid-cols-[2%_5%_27%_5%_46%_13%] 
            xl:grid-cols-[2.9%_4%_17.9%_4%_55.5%_10.9%_5.9%] 
            flex-1 lg:mt-4 xl:mt-2
          "
        >
          {/* Empty space */}
          <div className="border-r border-[#ADD8E6] h-full lg:h-10 lg:-mt-4 xl:h-15"></div>

          {/* Email icon */}
          <div className="border-r border-[#ADD8E6] flex items-center justify-center lg:h-10 lg:-mt-4 xl:h-15">
            <MailOutlinedIcon className="text-sm lg:text-sm" />
          </div>

          {/* Gmail account */}
          <div className="border-r border-[#ADD8E6] flex items-center justify-start pl-2 lg:pl-4 lg:h-10 text-xs lg:text-sm font-bold lg:-mt-4 xl:h-15">
            <p>info@chainconsults.com</p>
          </div>

          {/* Flag */}
          <div className="flex border-r border-[#ADD8E6] items-center justify-center lg:h-10 lg:-mt-4 xl:h-15">
            <img
              src="/ng-flag.png"
              alt="nigeria flag"
              className="object-cover w-7 h-7 xl:-mt-2"
            />
          </div>

          {/* Phone number */}
          <div className="flex items-center justify-start pl-2 text-xs lg:text-sm font-bold ">
            <span className="lg:-mt-12 xl:-mt-3">+2341 454 1910</span>
          </div>

          {/* English and Careers (stacked on lg screens) */}
          <div className="hidden lg:flex flex-col items-start justify-end border-l border-r border-[#ADD8E6] xl:-ml-4 xl:-mt-29 xl:h-36">
            {/* English dropdown */}
            <div className="flex w-full justify-start">
              <ul className="flex list-none">
                <li className="relative cursor-pointer group py-2 text-base lg:ml-10 lg:-mt-5 xl:-ml-24 xl:mt-8">
                  English <KeyboardArrowDownIcon className="text-sm" />
                  <ul className="absolute top-full left-0 bg-white shadow-lg border border-[#051753] hidden group-hover:block z-30 min-w-[7.5rem]">
                    <li className="mb-2 px-2 py-1">USA</li>
                    <li className="mb-2 px-2 py-1">UK</li>
                    <li className="mb-2 px-2 py-1">CA</li>
                    <li className="px-2 py-1">AU</li>
                  </ul>
                </li>
              </ul>
            </div>

            {/* Careers */}
            <div className="flex items-center justify-start pl-2 w-full xl:-mt-12">
              <BusinessCenterOutlinedIcon className="text-base mr-2 lg:-mt-7 lg:ml-7 xl:mt-4" />
              <span className="text-base lg:mt-4 lg:-ml-7 xl:-ml-1">Careers</span>
            </div>
          </div>
        </div>

        {/* Second row (for smaller screens) */}
        <div className="grid grid-cols-[30%_20%_50%] lg:hidden flex-1">
          {/* English dropdown */}
          <div className="flex items-center justify-center border-r border-[#ADD8E6]">
            <ul className="flex list-none">
              <li className="relative cursor-pointer group py-2 text-xs">
                English <KeyboardArrowDownIcon className="text-sm" />
                <ul className="absolute top-full left-0 bg-white shadow-lg border border-[#051753] hidden group-hover:block z-30 min-w-[7.5rem]">
                  <li className="mb-2 px-2 py-1">USA</li>
                  <li className="mb-2 px-2 py-1">UK</li>
                  <li className="mb-2 px-2 py-1">CA</li>
                  <li className="px-2 py-1">AU</li>
                </ul>
              </li>
            </ul>
          </div>

          {/* Careers */}
          <div className="flex items-center justify-center border-r border-[#ADD8E6]">
            <BusinessCenterOutlinedIcon className="text-xs mr-1" />
            <span className="text-xs">Careers</span>
          </div>

          {/* Empty space */}
          <div></div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default TopBar;

import React from "react";

const Blackground = () => {
  return (
    <div className="w-screen h-300 sm:h-258 flex flex-col justify-center items-center bg-[#02141a] text-center mt-24 md:w-200 md:h-200  lg:w-full lg:h-150 xl:w-full xl:h-200">
 <div className="relative w-275 h-125 border-0 mx-auto -mt-34  sm:-mt-54 md:w-180 md:h-112 md:-mt-10 ml-5
    md:border md:border md:border-white/10 md:rounded-full lg:h-110 lg:w-230 lg:ml-16 xl:ml-16 xl:w-290 xl:h-120">

        {/* Background big text */}
        <div className="absolute -mt-11 -ml-131 sm:-ml-125 left-1/2  text-7xl sm:text-8xl font-semibold text-white/5 pointer-events-none whitespace-nowrap z-0 md:-ml-54 md:mt-5 lg:mt-2 lg:text-9xl lg:-ml-82 xl:text-9xl xl:-ml-77">
          Integration
        </div>

        {/* Foreground content */}
        <main className="relative -ml-17 z-10 mt-18 md:ml-24 md:mt-38 lg:mt-29">
          <h5 className="text-white text-base font-semibold -mt-22 -ml-166 sm:-ml-120 md:-ml-9  xl:text-md">
            <span className="px-3   text-blue-700">//</span>
            INTEGRATION
            <span className="px-3 text-blue-700">//</span>
          </h5>

          <h1 className="text-3xl ml-17 sm:text-4xl sm:ml-25 max-w-sm font-semibold text-white leading-11 mb-4 sm:max-w-lg md:max-w-lg md:-ml-2 md:text-3xl lg:leading-14 lg:text-5xl lg:max-w-5xl lg:-ml-26 lg:mt-9 xl:ml-44  xl:max-w-2xl">
            Agile Technologies for today’s highly sophisticated
            customers 
            <span className="inline-block w-1 h-1 bg-blue-800 rounded-full ml-1  mt-3 sm:ml-128 sm:-mt-19 align-middle lg:w-2 lg:h-2"></span>
          </h1>

          <p className="text-base text-white leading-7 mb-8 max-w-sm ml-16 sm:max-w-lg sm:ml-18 sm:text-lg sm:max-w-xl sm:-mt-10 md:max-w-2xl md:-ml-19 lg:text-base lg:max-w-4xl xl:max-w-3xl xl:ml-34">
            Aging technology can’t meet the needs of today’s highly sophisticated customers. Globally, there’s an
            increasing adoption of latest technological innovations to respond to the towering demands of modern
            business. Don’t be stuck in the old practice. Leverage our vast array of technologies to help your solve your needs
          </p>

          <p>
            <a
              href="#"
              className="text-white text-base  -ml-42 sm:ml-5 ont-semibold border border-white/10 px-5 py-4 inline-block transition duration-300 hover:bg-[#051753] hover:border-[#051753] mr-127 h-16 w-47 md:ml-48 lg:h-13 lg:w-40 lg:ml-68 xl:ml-114"
            >
              Learn more <span>+</span>
            </a>
          </p>

          {/* Logo Grid */}
          <div className="relative ml-5 sm:ml-7 mt-7 grid grid-cols-2 grid-rows-3 gap-6 md:-ml-26 md:-mt-117">
            <div className="absolute w-30 sm:w-44 h-24 ml-26 sm:ml-28 bg-white shadow-md flex justify-center items-center border border-black/5 mt-8 transition hover:bg-[#051753] md:w-17 md:h-16 md:mt-10 lg:h-23 lg:w-23 lg:mt-11 xl:-mt-1 xl:w-25">
             <img
                src="React-logo.png"
                alt="React"
                className="w-18 h-18 hover:filter hover:invert md:w-7 md:h-7 lg:w-14 lg:h-18"
              />
            </div>

            <div className="absolute w-30 sm:w-44 h-24 ml-60 sm:ml-80 bg-white shadow-md flex justify-center items-center border border-black/5 mt-8 -13 transition hover:bg-[#051753] md:w-17 md:h-16 md:mt-60 md:-ml-2 lg:h-23 lg:w-23 lg:mt-66 lg:ml-3 xl:mt-55 xl:-ml-5">
              <img
                src="node-logo.png"
                alt="Node"
                className="w-18 h-18 hover:filter hover:invert md:w-7 md:h-7 lg:w-14 lg:h-18"
              />
            </div>

            <div className="absolute w-30 sm:w-44 h-24 ml-26 sm:ml-28 bg-white shadow-md flex justify-center items-center border border-black/5 mt-40 transition hover:bg-[#051753] md:w-17 md:h-16 md:mt-119 lg:h-23 lg:w-23 lg:mt-112 xl:mt-120 xl:ml-33" >
             <img
                src="Vue-logo.png"
                alt="Vue"
                className="w-18 h-18 hover:filter hover:invert md:w-7 md:h-7 lg:w-14 lg:h-18"
              />
            </div>

            <div className="absolute w-30 sm:w-44 h-24 ml-60 sm:ml-80 bg-white shadow-md flex justify-center items-center border border-black/5 mt-40 transition hover:bg-[#051753] md:w-17 md:h-16 md:mt-10 md:ml-140 lg:h-23 lg:w-23 lg:ml-180 lg:mt-11 xl:-mt-1 xl:w-25 xl:ml-230">
              <img
                src="Apple-logo.png"
                alt="Apple"
                className="w-18 h-18 hover:filter hover:invert md:w-7 md:h-7 lg:w-14 lg:h-18 lg:mt-10"
              />
            </div>

            <div className="absolute w-30 sm:w-44 h-24 ml-60 sm:ml-80 bg-white shadow-md flex justify-center items-center border border-black/5 mt-72 transition hover:bg-[#051753] md:w-17 md:h-16
             md:ml-140 md:mt-119 lg:h-23 lg:w-23 lg:ml-180   lg:mt-113 xl:ml-240 xl:mt-120">
             <img
                src="Ethereum-logo.png"
                alt="Ethereum"
                className="w-18 h-18 hover:filter hover:invert md:w-7 md:h-7 lg:w-14 lg:h-18"
              />
            </div>

            <div className="absolute w-30 sm:w-44 h-24 bg-white shadow-md flex mt-72 ml-26 sm:ml-28 justify-center items-center border border-black/5 transition hover:bg-[#051753] md:w-17 md:h-16 md:mt-60 md:ml-170 lg:h-23 lg:w-23 lg:mt-64 lg:ml-207 xl:ml-280 xl:mt-53">
             <img
                src="Microsoft-logo.png"
                alt="Microsoft"
                className="w-18 h-18 hover:filter hover:invert md:w-7 md:h-7 lg:w-14 lg:h-18"
              />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Blackground;

import React from 'react';

const Hero = () => {
  return (
    <section className="grid grid-cols-1 grid-rows-[1fr_2fr_1fr] text-center  overflow-visible mt-49 -ml-23 md:mt-165 lg:mt-70 xl:-ml-14">
      <h2 className=" -mt-22 -ml-8 sm:ml-2 -sm:text-sm font-semibold uppercase sm:-mt-14  sm:-ml-7 md:-ml-50 md:-mt-22 lg:text-lg lg:-ml-88 lg:-mt-17 xl:-ml-130 xl:text-md xl:-mt-32">
  <span className='-ml-13 md:ml-1'>Africa’s Leading Digital</span>
  <br className="block  sm:hidden" />
  Technology Solutions 
  <br className="hidden md:block lg:block xl:hidden" />
  <span className="inline md:block md:-ml-84 lg:block lg:-ml-96 xl:inline xl:ml-0">  Provider</span>
</h2>
<div className="absolute w-full h-119 ml-23 -mt-40 bg-[#f7f7f7] z-[-1] lg:-mt-58 lg:h-189 xl:ml-14 xl:h-150" >      </div>


      <p className="font-semibold text-5xl leading-4 mb-1 ml-26 sm:ml-32 flex flex-col items-start text-left text-black -mt-12 lg:text-7xl lg:leading-7 xl:-mt-29">
  Design
  <span className="inline-block h-2 w-2 ml-38 mt-1  bg-black rounded-full align-middle lg:ml-57 lg:mt-2 lg:h-3 lg:w-3"/>
  <br />
  Build
  <span className="inline-block w-2 h-2 mt-1 bg-black rounded-full ml-28  lg:ml-42 lg:mt-1  lg:h-3 lg:w-3" />
  <br />
  Deploy
  <span className="inline-block w-2 h-2 mt-1 bg-black rounded-full ml-38  lg:ml-58 lg:mt-2  lg:h-3 lg:w-3" />
</p>


      <p className="text-base ml-26 sm:ml-32 mt-3 text-black justify-self-start">
        Innovative Digital Solutions
      </p>

      <div className="justify-self-start z-[1] flex gap-2 mt-8 ml-26 sm:ml-32 ">
        <button className="bg-[#05207c] text-white border-none hover:bg-[#010924] transition-colors duration-300 h-15 w-42">
          Get in Touch <span className="ml-2">+</span>
        </button>
        <button className=" bg-transparent text-[#333] w-41 border border-[#ADD8E6] hover:bg-[#05207c] hover:text-white transition-colors duration-300">
          Learn More <span className="ml-2">+</span>
        </button>
      </div>
    </section>
  );
};

export default Hero;

import React from 'react';

const Quality = () => {
  return (
    <div className="w-full flex justify-center items-center min-h-screen ml-3 mt-24 md:ml-3 lg:max-w-full xl:-mt-30">
      <div className="flex flex-col justify-center items-center gap-12 xl:grid xl:grid-cols-2">
  
  {/* Top Content */}
  <div className="max-w-5xl text-black text-center md:-ml-12 xl:ml-5 md:w-170 md:ml-0.5 xl:ml-48">
    <h1 className="text-md -ml-83 font-semibold md:-ml-130 lg:text-base lg:-ml-199 xl:text-base">
      WHAT WE DO BEST
    </h1>
    <h1 className="text-4xl font-semibold mt-2 -ml-57 md:-ml-98 md:mt-1 lg:text-5xl lg:-ml-145 xl:text-4xl xl:-ml-57 xl:text-5xl xl:max-w-xl">
      Dare to innovate 
      <span className="inline-block w-1 h-1 bg-blue-800 rounded-full ml-1 mt-3 align-middle lg:w-2 lg:h-2"></span>
    </h1>

    <div className="mt-4 lg:-ml-35">
      <p className="border-l-2 border-[#051753] pl-7 py-2  text-base leading-7 text-black my-4 text-left max-w-lg lg:max-w-3xl xl:text-md xl:max-w-xl xl:py-1">
        We’re firm believers in the potential of technology to accelerate the African dream of financial prosperity.
      </p>
    </div>

    <p className="text-base leading-7 max-w-lg text-black my-4 text-left md:max-w-xl lg:-ml-36 lg:max-w-852 xl:text-md xl:max-w-xl">
      Groundbreaking accomplishments don’t come easily, but they’re possible with our strong positive belief and dedication to discovering more.
      At Chainconsults, we’re constantly propelled by the vision to do more for African businesses through market research and adoption of smart, agile and cost-effective digital solutions.
      Wherever you’re in your business development phase, we’ll be happy to work with you to bring your ideas to reality.
    </p>

    <p className="mt-6">
      <a 
        href="#"
        className="bg-[#051753] text-white px-13 py-5 inline-block font-bold mt-8 -ml-77 hover:bg-[#000f1f] md:-ml-117 lg:-ml-191"
      >
        Get in touch +
      </a>
    </p>
  </div>

  {/* Images stacked in column */}
  <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 w-245 h-90 lg:-ml-71 xl:-mt-24">
    
    {/* Left column: Create + Build */}
    <div className="flex flex-col gap-6 w-full xl:ml-39">
      <div className="flex flex-col justify-center items-center text-center shadow-sm h-70 w-130 p-4 ml-57 bg-blue-950 text-white md:w-170 md:ml-36 lg:w-112 xl:w-68 xl:h-69 ">
        <img src="/Create.png" alt="Caption 1" className="max-w-full h-auto mb-4 mt-2" />
        <h3 className="text-2xl font-semibold">Create Imaginations</h3>
      </div>

      <div className="flex flex-col justify-center items-center text-center shadow-sm h-70 w-130 p-4 ml-57 bg-[#02141a] text-white md:w-170 md:ml-36 lg:w-112 xl:w-68 xl:h-69" >
        <img src="/Build.png" alt="Caption 2" className="max-w-full h-auto mb-4 mt-2" />
        <h3 className="text-2xl font-semibold leading-snug">Build Dreams</h3>
      </div>
    </div>

    {/* Right column: Deploy */}
    <div className="flex flex-col justify-center items-center text-center shadow-sm h-70 w-130 p-4 ml-57  bg-[#f0f0f0] text-black  lg:h-72 mt-1 md:w-170 md:ml-36 lg:w-112 lg:mt-36 lg:ml-30 xl:w-68 xl:h-69 xl:ml-25">
      <img src="/Deploy.png" alt="Caption 3" className="max-w-full h-auto mb-4 mt-2" />
      <h3 className="text-2xl font-semibold leading-snug">Deploy Perfection</h3>
    </div>
  </div>

</div>

    </div>
  );
};

export default Quality;

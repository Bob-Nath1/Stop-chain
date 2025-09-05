import React from 'react';

const Clients = () => {
  return (
    <div className="grid grid-cols-1 grid-rows-1 mt-4 sm:mr-80 pointer-events-auto z-[-1] md:-ml-12 md:-mt-9 lg:ml-11 lg:mt-46 xl:mt-74">
      <div className="col-span-1 row-span-1 h-200 -mt-110 -mr-48 md:h-120 md:-mt-98 md:-mr-25">
        <h1 className="text-6xl sm:text-8xl font-semibold text-blue-800 opacity-5 mt-148 ml-28 sm:mt-144 sm:ml-44 md:ml-70 lg:text-9xl lg:mt-100 xl:ml-120">
          Clients
        </h1>
        <div className="flex flex-col items-center -mt-14 -ml-39 sm:-mt-18 sm:ml-33 md:-mr-49 lg:-mr-7  xl:ml-74">
          <p className="uppercase sm:text-base font-semibold text-black lg:text-base">
            Few of our customers
          </p>
          <h2 className="text-3xl sm:text-4xl font-semibold -ml-1 lg:font-semibold lg:text-5xl">
            Trusted By
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Clients;

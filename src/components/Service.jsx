import React from "react";

const Service = () => {
  return (
    <div className="min-w-375   mt-139 relative box-border md:mt-154 lg:mt-144 lg:-ml-34 xl:mt-200">
      {/* Hero Section */}
      <div className="flex flex-wrap items-center gap-5 relative ">
        <div className="relative w-full lg:w-1/2">
          <img
            src="Big image.png"
            className="absolute h-140 sm:h-180 ml-5 sm:ml-20 -mt-104 sm:-mt-119 lg:-ml-10 lg:-mt-188 lg:h-180 lg:w-128 lg:ml-19 md:h-225 md:w-170 md:ml-12 md:-mt-127 xl:h-270 xl:w-170 xl:ml-14"
            alt="Descriptive image alt text"
            loading="lazy"
          />
        </div>

        <div className="p-5 mt-44 max-w-sm ml-10 sm:max-w-3xl sm:ml-25 sm:mt-75 md:mt-112 md:ml-16 lg:-ml-35  lg:-mt-101 lg:max-w-md xl:ml-20 xl:-mt-157 xl:max-w-lg ">
          <h4 className="uppercase text-base font-semibold -ml-9 ">ChainHelp</h4>
          <h2 className="text-4xl -ml-11 font-semibold leading-12 mb-3">
            Don't be Stuck
          </h2>
          <p className="text-lg sm:text-base -ml-4 mb-0 leading-7 max-w-lg md:max-w-2xl xl:max-w-9xl">
            In today’s digital driven marketplace, your business can stand out by maximizing the potential of technology. At Chainconsults, we specialize in designing and building appealing and customer-focused products that help businesses across Africa excel in their various industries.
          </p>
              <p className="relative text-lg -ml-4 max-w-lg sm:text-base leading-7 text-black text-left h-19 before:content-[''] before:absolute  before:-left-8 before:w-0.5 before:h-full before:bg-[#051753] md:max-w-2xl xl:max-w-9xl">
              Whether you’re an early-stage startup trying to find your feet  in the marketplace; a mid-sized business looking to expand or a large  corporation aiming to dominate your industry, our solutions are designed to make your transition easier. From web or mobile application development to IT support, our dedicated team of IT professionals will help you transform your company to a digital driven business, helping you to service your customers in faster, smarter and more efficient fashion.
            </p>


          <div className="grid grid-cols-1 gap-8 mt-78 sm:mt-48 xl:grid-cols-2 xl:gap-1 xl:mt-44 xl:-ml-14">
  {/* Box 1 */}
  <div className="flex flex-col justify-between bg-white h-94 w-88  p-9 max-w-sm  sm:max-w-xl sm:p-4 py-9 sm:h-72 sm:w-138 -ml-5 sm:-ml-19 md:w-178 md:max-w-2xl md:-ml-9 lg:h-70 xl:h-93 xl:w-63">
    <img
      className="w-13 h-13 mb-2 ml-4 mt-4"
      src="./about-icon-1.png"
      alt="service icon"
    />
    <div className="px-4">
      <h5 className="font-semibold text-lg mb-9 -mt-3 md:mb-11 lg:mb-10 xl:text-md">
        We Build & Research
      </h5>
      <p className="text-md leading-7 sm:text-base -mt-8 md:text-sm md:leading-6 lg:text-md lg:max-w-xl lg:leading-6">
        As your trusted IT partner, we’ll be with you every step of the way – 
        from initial planning to delivery, and beyond. Our highly versatile, 
        talented and result-driven team of software engineers create highly 
        responsive products aimed at maximizing customer ROI.
      </p>
    </div>
    <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#051753] group-hover:w-full transition-all duration-200 ease-in-out" />
  </div>

  {/* Box 2 */}
  <div className="flex flex-col justify-between bg-white h-94 w-88 py-9 p-4 sm:h-72 sm:w-138 -ml-5 sm:-ml-19 md:mb-11 lg:h-70  md:w-168 md:-ml-9 xl:h-93 xl:w-63">
    <img
      className="w-13 h-13 mb-2 ml-4 mt-4"
      src="./about-icon-2.png"
      alt="service icon"
    />
    <div className="px-4">
      <h5 className="font-semibold text-lg mb-10 mt-3 xl:">
        We Advice
      </h5>
      <p className="text-md leading-7 sm:text-base -mt-8 md:text-sm md:leading-6 lg:text-md lg:max-w-sm lg:leading-6">
        Technology will never stop evolving, it’s the nature of the beast. 
        So having an innovation advisor on your side is vital: to tailor 
        a strategy that fits, and to uncover the right tech for your 
        toughest business problems—no matter the industry.
                </p>
              </div>
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#051753] group-hover:w-full transition-all duration-200 ease-in-out" />
            </div>
            </div>
        </div>

        {/* Background grey shape */}
        <div className="absolute h-600  w-178 sm:h-504 bg-[#f7f7f7] z-[-1] -ml-15 -mt-110 md:w-full md:h-579  lg:w-294 lg:ml-45 lg:h-330 xl:w-full" />
      </div>
      {/* Solution Section */}
      <div className="mt-80 sm:-ml-7 md:mt-94 md:ml-9 lg:ml-64 xl:ml-114 xl:mt-146  ">
        <h1 className=" text-6xl ml-26 sm:text-8xl  font-semibold text-blue-900 opacity-4 -mt-44 sm:ml-40 lg:text-9xl">
          Services
        </h1>
        <div className="flex flex-col items-center -mt-12  mr-270 sm:mr-204 sm:-mt-17 lg:ml-99">
          <p className="uppercase font-semibold text-base mb-0 ">Services</p>
          <h2 className="text-3xl sm:text-4xl font-semibold sm:mt-0">
            ChainSolution<span className="inline-block w-1.5 h-1.5 bg-[#051753] rounded-full ml-0 mt-3 align-middle lg:ml-57 lg:-mt-17" />
          </h2>
        </div>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 mt-20 gap-7 -ml-2 sm:ml-6 lg:grid-cols-2 lg: lg:px-6 lg:ml-40 xl:ml-68">
        {/* Analytics */}
        <div className="flex flex-col items-center justify-center text-center border border-blue-100 bg-white max-w-sm ml-10 sm:max-w-lg   py-5 md:max-w-2xl lg:max-w-md">
          <img
            src="/analytics.png"
            className="w-90 h-55 mb-11"
            alt="Example"
            loading="lazy"
          />
          <h2 className="text-4xl font-semibold mb-6">Advanced Analytic</h2>
          <p className="text-lg font-semibold mb-8 max-w-md md:max-w-2xl lg:font-normal lg:max-w-sm">
            We do data science for only one reason, so that you can identify
            today’s opportunities and turn them to a greater ROI and make your
            data sing
          </p>
          <ul className="text-left w-full ml-20">
            <li className="flex items-center my-2 text-base font-semibold">
              <span className="w-10 h-10 border border-[#deeaf7] flex items-center justify-center mr-4 font-bold cursor-pointer hover:bg-[#051753] hover:text-white hover:border-[#051753]">
                ✓
              </span>{" "}
              Data Aggregation
            </li>
            <li className="flex items-center my-2 text-base font-semibold">
              <span className="w-10 h-10 border border-[#deeaf7] flex items-center justify-center mr-4 font-bold cursor-pointer hover:bg-[#051753] hover:text-white hover:border-[#051753]">
                ✓
              </span>{" "}
              Data Research
            </li>
            <li className="flex items-center my-2 text-base font-semibold">
              <span className="w-10 h-10 border border-[#deeaf7] flex items-center justify-center mr-4 font-bold cursor-pointer hover:bg-[#051753] hover:text-white hover:border-[#051753]">
                ✓
              </span>{" "}
              Data Analytics
            </li>
          </ul>
          
        </div>
        <div className="flex flex-col items-center justify-center text-center border border-blue-100 bg-white max-w-sm ml-10 sm:max-w-lg   py-5 md:max-w-2xl lg:max-w-md lg:-ml-44 xl:-ml-31">
          <img
            src="/blockchain.png"
            className="w-90 h-55 mb-11"
            alt="Example"
            loading="lazy"
          />
          <h2 className="text-4xl font-semibold mb-6">BlockChain Engineering</h2>
          <p className="text-lg font-semibold mb-8 max-w-md md:max-w-2xl lg:font-normal lg:max-w-sm ">
            We help businesses, startups and enterprises harness the power of blockchain technology for custom DLT development.
          </p>
          <ul className="text-left w-full ml-20">
            <li className="flex items-center my-2 text-base font-semibold">
              <span className="w-10 h-10 border border-[#deeaf7] flex items-center justify-center mr-4 font-bold cursor-pointer hover:bg-[#051753] hover:text-white hover:border-[#051753]">
                ✓
              </span>{" "}
             DApps Development
            </li>
            <li className="flex items-center my-2 text-base font-semibold">
              <span className="w-10 h-10 border border-[#deeaf7] flex items-center justify-center mr-4 font-bold cursor-pointer hover:bg-[#051753] hover:text-white hover:border-[#051753]">
                ✓
              </span>{" "}
              Smart Contract Development
            </li>
            <li className="flex items-center my-2 text-base font-semibold">
              <span className="w-10 h-10 border border-[#deeaf7] flex items-center justify-center mr-4 font-bold cursor-pointer hover:bg-[#051753] hover:text-white hover:border-[#051753]">
                ✓
              </span>{" "}
            Hyper Ledger Development
            </li>
          </ul>
          
        </div>
        <div className="flex flex-col items-center justify-center text-center border border-blue-100 bg-white max-w-sm ml-10 sm:max-w-lg   py-5 md:max-w-2xl lg:max-w-md">
          <img
            src="/webmobile.png"
            className="w-90 h-55 mb-11"
            alt="Example"
            loading="lazy"
          />
          <h2 className="text-4xl font-semibold mb-6">Web & Mobile</h2>
          <p className="text-lg font-semibold mb-8 max-w-md md:max-w-2xl lg:font-normal lg:max-w-sm ">
           We do not just design, we transform them into powerful communication channels that drive online growth and deliver results you care about.
          </p>
          <ul className="text-left w-full ml-20">
            <li className="flex items-center my-2 text-base font-semibold">
              <span className="w-10 h-10 border border-[#deeaf7] flex items-center justify-center mr-4 font-bold cursor-pointer hover:bg-[#051753] hover:text-white hover:border-[#051753]">
                ✓
              </span>{" "}
              UI & UX Design & Development
            </li>
            <li className="flex items-center my-2 text-base font-semibold">
              <span className="w-10 h-10 border border-[#deeaf7] flex items-center justify-center mr-4 font-bold cursor-pointer hover:bg-[#051753] hover:text-white hover:border-[#051753]">
                ✓
              </span>{" "}
              Development & Testing
            </li>
            <li className="flex items-center my-2 text-base font-semibold">
              <span className="w-10 h-10 border border-[#deeaf7] flex items-center justify-center mr-4 font-bold cursor-pointer hover:bg-[#051753] hover:text-white hover:border-[#051753]">
                ✓
              </span>{" "}
              Cyber Security
            </li>
          </ul>
          
        </div>
        <div className="flex flex-col items-center justify-center -ml-0 text-center border border-blue-100 bg-white max-w-sm ml-10 sm:max-w-lg py-5 md:max-w-2xl lg:max-w-md lg:-ml-44 xl:w-400 xl:ml-45 xl:!-ml-31">
          <img
            src="/concept.png"
            className="w-90 h-55 mb-11"
            alt="Example"
            loading="lazy"
          />
          <h2 className="text-4xl font-semibold mb-6">Concept Development</h2>
          <p className="text-lg font-semibold mb-8 max-w-md md:max-w-2xl lg:font-normal lg:max-w-sm">
            Our Concept development approach involves coming up with a detailed description of your idea, explained from the perspective of your customer.
          </p>
          <ul className="text-left w-full ml-20">
            <li className="flex items-center my-2 text-base font-semibold">
              <span className="w-10 h-10 border border-[#deeaf7] flex items-center justify-center mr-4 font-bold cursor-pointer hover:bg-[#051753] hover:text-white hover:border-[#051753]">
                ✓
              </span>{" "}
              Ideation
            </li>
            <li className="flex items-center my-2 text-base font-semibold">
              <span className="w-10 h-10 border border-[#deeaf7] flex items-center justify-center mr-4 font-bold cursor-pointer hover:bg-[#051753] hover:text-white hover:border-[#051753]">
                ✓
              </span>{" "}
              Concept Blueprint
            </li>
            <li className="flex items-center my-2 text-base font-semibold">
              <span className="w-10 h-10 border border-[#deeaf7] flex items-center justify-center mr-4 font-bold cursor-pointer hover:bg-[#051753] hover:text-white hover:border-[#051753]">
                ✓
              </span>{" "}
              Concept Testing
            </li>
          </ul>
          
        </div>
      
    </div>
    </div>
  );
};

export default Service;

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Design() {


  
  const settings = {
  className: "center",
  infinite: true,
  centerPadding: "20px",
  slidesToShow: 4, // Default: 4 slides (large screens)
  swipeToSlide: true,
  afterChange: function (index) {
    console.log(
      `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
    );
  },
  responsive: [
    {
      breakpoint: 1024, // <=1024px
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 640, // <=640px
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 511, // <=425px
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};


  return (
    <div className=" ml-9 w-full lg:mt-55">
      {/* First carousel */}
      <div className="w-4/5 mx-auto -mt-3 mb-33 relative z-[1] box-border lg:w-11/12 xl:w-11/12 xl:mt-63 md:mt-78">
        <Slider {...settings}>
          <div className="px-2 box-border">
            <img
              className="w-55 h-15 block filter grayscale hover:grayscale-0 transition duration-300 ease-in-out md:h-12 md:w-42 lg:w-60 lg:h-18"
              src="/bamboo.png"
              alt="bamboo"
            />
          </div>
          <div className="px-2 box-border -mt-[2.3rem] lg:-mt-0">
            <img
              className=" w-45 h-30 mt-2  block filter grayscale hover:grayscale-0 transition duration-300 ease-in-out  md:h-22 md:w-42 md:mt-4 lg:-mt-6 lg:w-60 lg:h-33 xl:-mt-6 xl:h-33 xl:w-62"
              src="/palpensions.png"
              alt="palpensions"
            />
          </div>
          <div className="px-2 box-border mt-2 lg:mt-5">
            <img
              className="h-17 w-56 block filter grayscale hover:grayscale-0 transition duration-300 ease-in-out md:mt-0 md:h-12 md:w-39 lg:w-70 lg:h-18"
              src="/verdant.png"
              alt="verdant"
            />
          </div>
          <div className="px-2 box-border mt-4 lg:mt-0">
            <img
              className="w-full h-auto block filter grayscale hover:grayscale-0 transition duration-300 ease-in-out md:-mt-1 lg:h-15 lg:w-130 lg:mt-4"
              src="/gacmotor.png"
              alt="gacmotor"
            />
          </div>
        </Slider>
      </div>

      {/* Second carousel */}
      <div className="w-4/5 mt-14 mx-auto relative z-[1] box-border  lg:w-11/12 xl:w-11/12">
        <Slider {...settings}>
          <div className="px-2 box-border   lg:-mt-0">
            <img
              className="w-50 h-33 block filter grayscale hover:grayscale-0 transition duration-300 ease-in-out  md:-mt-4 md:h-27 md:w-43 lg:-mt-4 lg:w-60 lg:h-38  xl:-mt-6 xl:w-69 xl:h-33"
              src="/bayelsa.jpeg"
              alt="bayelsa"
            />
          </div>
          <div className=" px-2 box-border mt-5 md:mt-4 lg:-mt-0">
            <img
              className="w-52 h-13 mt-4 block filter grayscale hover:grayscale-0 transition duration-300 ease-in-out md:-mt-6 md:h-22 md:w-37 lg:-mt-4 lg:w-44 lg:h-30 "
              src="/flincap.svg"
              alt="flincap"
            />
          </div>
          <div className="px-2 box-border lg:-mt-2">
            <img
              className="w-full h-auto block filter grayscale hover:grayscale-0 transition duration-300 ease-in-out md:-mt-6 md:h-29 md:w-37 lg:w-44 lg:h-30 lg:mt-1 xl:h-16 xl:w-52"
              src="rentease.svg"
              alt="rentease"
            />
          </div>
          <div className="px-2 box-border lg:mt-5">
            <img
              className="w-62 h-16 block filter grayscale hover:grayscale-0 transition duration-300 ease-in-out md:h-11 md:mt-3 " 
              src="/ohub.png"
              alt="ohub"
            />
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default Design;

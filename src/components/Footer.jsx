import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white text-black font-sans px-6 py-12 mt-170 lg:mt-110 xl:mt-10">
      <div className="max-w-6xl -ml-13 sm:ml-5 mx-auto grid grid-cols- gap-12">
        {/* Logo */}
        <div className="flex justify-center">
          <img src="/logo.png" alt="Logo" className="w-72 h-auto xl:w-65" />
        </div>

        {/* Contact Section */}
        <div className="grid grid-cols-1 gap-8 ml-14 md:grid-cols-2 lg:grid-cols-3 lg:mt-17 lg:-ml-3">
          {/* Phone */}
          <div className="flex items-start gap-4 md:ml-17">
            <img
              src="/phone-icon-1.png"
              alt="Phone Icon"
              className="7 mt-2 object-contain md:w-10 h-10 xl:7"
            />
            <div className="">
              <h3 className="text-xl font-semibold xl:text-xl ">Phone Number</h3>
              <p className="text-base xl:text-sm">+2341 454 1910 (Lagos)</p>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-start gap-4 xl:-ml-20">
            <img
              src="/email-icon-2.png"
              alt="Email Icon"
              className="7 mt-2 object-contain md:w-10 h-10"
            />
            <div className="">
              <h3 className="text-xl font-semibold xl:text-xl">Email Address</h3>
              <p className="text-base xl:text-sm">info@chainconsults.com</p>
            </div>
          </div>

          {/* Address */}
          <div className="flex items-start gap-4 -ml-42 sm:-ml-81 md:col-span-2 justify-center md:ml-4  lg:col-span-1 lg:justify-start lg:-mt-12 xl:-ml-60">
            <img
              src="/address-icon-3.png"
              alt="Location Icon"
              className="7 mt-2 object-contain md:w-10 h-10 lg:mt-13"
            />
            <div className=" xl:mt-3">
              <h3 className="text-xl font-semibold xl:text-xl ">Lagos</h3>
              <p className="text-base  leading-relaxed lg:text-lg xl:text-base">
                8th Providence Street,
                <br />
                Lekki Phase 1,
                <br />
                Lagos,
                <br />
                Nigeria.
              </p>
              
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-5 w-90 sm:w-110 ml-16 sm:ml-18 bg-[#061f71] w-3/4 mx-auto md:w-160 lg:w-220 lg:ml-6 xl:w-270"></div>

        {/* Links */}
        <div className="grid grid-cols-2 gap-8 ml-10 xl:grid-cols-3">
          {/* Services */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Service</h3>
            <ul className="space-y-4">
              {[
                "App Development",
                "UI & UX Design",
                "Support & Maintenance",
                "Consultation",
                "Blockchain Development",
                "Concept Development",
                "Web Development",
              ].map((item, idx) => (
                <li key={idx}>
                  <a
                    href="#"
                    className="relative inline-block pl-4 text-md font-semibold text-black transition-transform duration-200 hover:translate-x-2 before:content-[''] hover:before:content-['//'] before:absolute before:left-0 before:opacity-0 hover:before:opacity-100 -ml-4"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>


          
          {/* Solutions */}
          <div className="row-start-2 xl:row-start-auto">
            <h3 className="text-xl font-semibold mb-4">Solutions</h3>
            <ul className="space-y-4">
              {[
                "E-Learning",
                "Data Research & Analytics",
                "ERP Business Solutions",
                "Digital Signature",
                "CRM Software",
              ].map((item, idx) => (
                <li key={idx}>
                  <a
                    href="#"
                    className="relative inline-block pl-4 text-md font-semibold text-black transition-transform duration-200 hover:translate-x-2 before:content-[''] hover:before:content-['//'] before:absolute before:left-0 before:opacity-0 hover:before:opacity-100 -ml-4"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/* Find Us */}
          <div className="row-start-2 xl:row-start-auto">
            <h3 className="text-xl font-semibold mb-4">Find Us</h3>
            <ul className="space-y-4">
              {["Contact Us", "Cookies Policy"].map((item, idx) => (
                <li key={idx}>
                  <a
                    href="#"
                    className="relative inline-block pl-4 text-md font-semibold text-black transition-transform duration-200 hover:translate-x-2 before:content-[''] hover:before:content-['//'] before:absolute before:left-0 before:opacity-0 hover:before:opacity-100 -ml-4"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>
        
         <p className="mt-4 font-bold ml-27 text-sm sm:ml-40 mt-20 lg:text-base lg:ml-99">
                Chain Consult © 2024{" "}
                <a href="#" className="text-blue-900">
                  All Rights Reserved
                </a>
              </p>

      </div>
    </footer>
  );
};

export default Footer;

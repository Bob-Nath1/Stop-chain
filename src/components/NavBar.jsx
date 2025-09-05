import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { MdMenu } from "react-icons/md";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuClick = () => {
    setIsOpen(!isOpen);
  }

  const handleMouseEnter = (menu) => {
    setOpenDropdown(menu);
  };

  const handleMouseLeave = () => {
    setOpenDropdown(null);
  };

  return (
    <header className="grid grid-cols-[13.75rem_3fr_0.8fr] items-center w-[75rem] transform translate-y-4 relative z-[1] lg:-mt-5 xl:-ml-37">
      {/* Logo */}
      <div className="flex justify-center items-center -mt-48 sm:ml-6">
        <img
          src="/logo.png"
          alt="logo-co"
          className=" w-44 mt-47 sm:h-10 sm:w-82 sm:mr-7 md:mt-35 lg:mt-54  lg:h-8 lg:mt-7 lg:-ml-8 xl:ml-60 h-10 "
          
        />
    </div>

      <nav>
        <div onClick={handleMenuClick} className='h-13 w-13  sm:mt-4  ml-12 sm:ml-90 border border-black flex items-center justify-center md:hidden'>
      {!isOpen ? <MdMenu size={45}/> : <IoMdClose size={45}/>}
      </div> 
      
        <ul className={`flex items-center justify-between w-full text-xs md:mt-29 -ml-58 lg:text-sm xl:text-base  md:flex md:flex-row md:items-center  ${
      isOpen ?  "flex" : "hidden"} lg:mt-5 lg:-ml-29 xl:ml-3` }>
          <li className="flex items-center font-semibold text-[1.4rem] ml-0 mt-[-0.3rem] translate-x-[8.2rem] translate-y-[-0.2rem] flex-grow lg:mt-3">
            <ul className="flex gap-[2.4rem]">
              {/* Home */}
              <li>
                <a href="#" className="text-[#5e4e4e] text-xs no-underline lg:text-sm md:text-base xl:text-base">Home</a>
              </li>

              {/* Company Dropdown */}
              <li
                onMouseEnter={() => handleMouseEnter('company')}
                onMouseLeave={handleMouseLeave}
                className="relative"
              >
                <a href="#" className="text-[#333] text-xs no-underline lg:text-sm md:text-base xl:text-base lg:after:content-['+'] lg:before:mr-1 ">Company </a>
                <ul
                  className={`absolute mt-3 bg-white min-w-[17.5rem] p-3 top-[4.3rem] z-10 border-t-[4px] border-[#051753] shadow-[0_2px_4px_rgba(0,0,0,0.1),-2px_0_4px_rgba(0,0,0,0.1),2px_0_4px_rgba(0,0,0,0.1)] flex-col transition-all duration-400 ${
                    openDropdown === 'company'
                      ? 'flex opacity-100 translate-y-0 pointer-events-auto'
                      : 'hidden opacity-0 translate-y-2 pointer-events-none'
                  }`}
                >
                  <li><a href="#" className="block text-base leading-12 py-[0.1rem] px-[0.2rem] text-[#333] hover:bg-gray-200">About Us</a></li>
                  <li><a href="#" className="block text-base leading-12 py-[0.1rem] px-[0.2rem] text-[#333] hover:bg-gray-200">Our Approach</a></li>
                  <li><a href="#" className="block text-base leading-12 py-[0.1rem] px-[0.2rem] text-[#333] hover:bg-gray-200">Quality Assurance</a></li>
                </ul>
              </li>

              {/* Services Dropdown */}
              <li
                onMouseEnter={() => handleMouseEnter('services')}
                onMouseLeave={handleMouseLeave}
                className="relative"
              >
                <a href="#" className="text-[#333] text-xs no-underline lg:text-sm md:text-base xl:text-base lg:after:content-['+'] lg:before:mr-1 ">Services</a>
                <ul
                  className={`absolute mt-3 bg-white min-w-[17.5rem] p-3 top-[4.3rem] z-10 border-t-[4px] border-[#051753] shadow-[0_2px_4px_rgba(0,0,0,0.1),-2px_0_4px_rgba(0,0,0,0.1),2px_0_4px_rgba(0,0,0,0.1)] flex-col transition-all duration-400 ${
                    openDropdown === 'services'
                      ? 'flex opacity-100 translate-y-0 pointer-events-auto'
                      : 'hidden opacity-0 translate-y-2 pointer-events-none'
                  }`}
                >
                  <li><a href="#" className="block text-base leading-12 py-[0.1rem] px-[0.2rem] text-[#333]  hover:bg-gray-200">App Development</a></li>
                  <li><a href="#" className="block text-base leading-12 py-[0.1rem] px-[0.2rem] text-[#333]  hover:bg-gray-200">UI & UX Design</a></li>
                  <li><a href="#" className="block text-base leading-12 py-[0.1rem] px-[0.2rem] text-[#333]  hover:bg-gray-200">Web Development</a></li>
                  <li><a href="#" className="block text-base leading-12 py-[0.1rem] px-[0.2rem] text-[#333]  hover:bg-gray-200">Blockchain</a></li>
                  <li><a href="#" className="block text-base leading-12 py-[0.1rem] px-[0.2rem] text-[#333]  hover:bg-gray-200">Support & Maintenance</a></li>
                  <li><a href="#" className="block text-base leading-12 py-[0.1rem] px-[0.2rem] text-[#333]  hover:bg-gray-200">Consultation</a></li>
                  <li><a href="#" className="block text-base py-[0.1rem] px-[0.2rem] text-[#333]  hover:bg-gray-200">Concept Development</a></li>
                </ul>
              </li>

              {/* Solutions Dropdown */}
              <li
                onMouseEnter={() => handleMouseEnter('solutions')}
                onMouseLeave={handleMouseLeave}
                className="relative"
              >
                <a href="#" className="text-[#333]  text-xs  no-underline lg:text-sm md:text-base xl:text-base lg:after:content-['+'] lg:before:mr-1 ">Solutions </a>
                <ul
                  className={`absolute mt-3 bg-white min-w-[17.5rem] p-3 top-[4.3rem] z-10 border-t-[4px] border-[#051753] shadow-[0_2px_4px_rgba(0,0,0,0.1),-2px_0_4px_rgba(0,0,0,0.1),2px_0_4px_rgba(0,0,0,0.1)] flex-col transition-all duration-400 ${
                    openDropdown === 'solutions'
                      ? 'flex opacity-100 translate-y-0 pointer-events-auto'
                      : 'hidden opacity-0 translate-y-2 pointer-events-none'
                  }`}
                >
                  <li><a href="#" className="block text-base leading-12 py-[0.1rem] px-[0.2rem] text-[#333]  hover:bg-gray-200">ERP Business Solutions</a></li>
                  <li><a href="#" className="block text-base leading-12 py-[0.1rem] px-[0.2rem] text-[#333]  hover:bg-gray-200">CRM Software</a></li>
                  <li><a href="#" className="block text-base leading-12 py-[0.1rem] px-[0.2rem] text-[#333]  hover:bg-gray-200">ChainBOTs</a></li>
                  <li><a href="#" className="block text-base leading-12 py-[0.1rem] px-[0.2rem] text-[#333]  hover:bg-gray-200">ChainRecruits</a></li>
                </ul>
              </li>

              <li>
                <a href="#" className="text-[#333]  text-xs no-underline lg:text-sm md:text-base xl:text-base">Clients</a>
              </li>
            </ul>
          </li>
          </ul>

          {/* Right Side Buttons */}
          <div className="justify-self-end hidden lg:flex lg:-mr-4 lg:-mt-11  xl:ml-36  ">
            <div className="bg-[#051753] flex items-center  cursor-pointer hover:bg-[#02081d] relative lg:h-14 w-41 xl:ml-198 ">
              <p className="text-white text-base font-semibold ml-4 lg:text-xl lg:px-3">
                Contact us <span className="text-base">+</span>
              </p>
            </div>

            <div className="bg-amber-50 flex items-center justify-center cursor-pointer hover:bg-blue-800  transition-colors duration-300 hidden xl:w-15 xl:h-14 xl:flex ml-9 text-black hover:text-white">
              <SearchIcon className="" />
            </div>
          </div>

          
        
       
      </nav>
      
    </header>
  );
};

export default Navbar;

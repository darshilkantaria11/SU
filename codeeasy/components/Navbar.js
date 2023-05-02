
import { MdEditSquare } from "react-icons/md";
import { BsArrowRight } from "react-icons/bs";
import Link from 'next/link';
import React, { useState, useRef, useEffect } from 'react';



const Navbar = () => {
  const [isDropdownOpen1, setIsDropdownOpen1] = useState(false);

  const toggleDropdown1 = () => {
    setIsDropdownOpen(false);
    setIsDropdownOpen1(!isDropdownOpen1);
  };

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen1(false);
    setIsDropdownOpen(!isDropdownOpen);
  };


  const dropdownRef1 = useRef(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {


      setIsDropdownOpen(false);
      setIsDropdownOpen1(false);

    };

    window.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef, dropdownRef1, isDropdownOpen, isDropdownOpen1]);





  return (
    <div>
      <header className="text-black-100 body-font border-b">
        <div className="container  flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <MdEditSquare size={32} />
            <span className=" text-2xl">CodeSquareX</span>
          </a>
          <nav className="md:mr-auto md:ml-20 md:py-1 md:pl-4 text-black- flex flex-wrap items-center text-base justify-between">
            <Link className="mr-5 text-xl hover:text-blue-500 " href={'/'}> Home</Link>
            <div className="relative">
              <button
                className="mr-5 text-xl hover:text-blue-500  focus:outline-none"
                onClick={toggleDropdown1}
              >
                Templates
              </button>
              {isDropdownOpen1 && (
                <div className="absolute  z-10  mt-2 py-2 w-48 bg-white rounded-md shadow-xl">
                  <Link className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" href="#">
                    Template 1
                  </Link>
                  <Link className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" href="#">
                    Template 2
                  </Link>
                  <Link className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" href="#">
                    Template 3
                  </Link>
                </div>
              )}
            </div>
            <div className="relative">
              <button
                className="mr-5 text-xl hover:text-blue-500 focus:outline-none"
                onClick={toggleDropdown}
              >
                Components
              </button>
              {isDropdownOpen && (
                <div className="absolute  z-10 mt-2 py-2 w-48 bg-white rounded-md shadow-xl">
                  <Link className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" href="#">
                    Template 1
                  </Link>
                  <Link className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" href="#">
                    Template 2
                  </Link>
                  <Link className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" href="#">
                    Template 3
                  </Link>
                </div>
              )}
            </div>
          </nav>
          {/* <div className="flex items-center border rounded-full">
            <input className="py-2 px-3 rounded-full focus:outline-none" type="text" placeholder="Search..." />
            <button className=" py-2 px-4 "><BsArrowRight size={30} /></button>
          </div> */}
          {/* <div className="flex items-center border border-gray-900 xl:rounded-full ">
            
            <Link className="p-2 pl-4 pr-4" href="/login">Log in</Link>
          </div> */}
        </div>
      </header>
    </div>
  )
}

export default Navbar

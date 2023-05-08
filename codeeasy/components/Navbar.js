
import { MdEditSquare } from "react-icons/md";
import { BsArrowRight } from "react-icons/bs";
import Link from 'next/link';
import React, { useState, useRef, useEffect } from 'react';
import { CgUserlane } from "react-icons/cg";
import { Button } from "@material-ui/core";



const Navbar = ({ user }) => {
 
  
  const [isDropdownOpen1, setIsDropdownOpen1] = useState(false);

  const toggleDropdown1 = () => {
    setIsDropdownOpen(false);
    setIsDropdownOpen2(false);
    setIsDropdownOpen1(!isDropdownOpen1);
  };


  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen1(false);
    setIsDropdownOpen2(false);
    setIsDropdownOpen(!isDropdownOpen);
  };

  const [isDropdownOpen2, setIsDropdownOpen2] = useState(false);

  const toggleDropdown2 = () => {
    setIsDropdownOpen1(false);
    setIsDropdownOpen(false);
    setIsDropdownOpen2(!isDropdownOpen2);
  };


  const dropdownRef1 = useRef(null);
  const dropdownRef = useRef(null);
  const dropdownRef2 = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {


      setIsDropdownOpen(false);
      setIsDropdownOpen1(false);
      setIsDropdownOpen2(false);

    };

    window.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef, dropdownRef1, dropdownRef2, isDropdownOpen, isDropdownOpen2, isDropdownOpen1]);






  return (
    <div>
      <header className="text-black-100 body-font border-b">
        <div className="container  flex flex-wrap p-5 flex-col md:flex-row items-center">
          <div className="flex title-font font-medium items-center text-gray-900 mb-4  md:mb-0">
            <MdEditSquare size={32} />
            <Link href={'/'}><span className=" text-2xl">CodeSquareX</span></Link>
          </div>
          <div className="md:mr-auto md:ml-20 md:py-1 md:pl-4 text-black- flex flex-wrap items-center text-base justify-between">
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
          </div>
          {/* <button class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Button
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button> */}
          {/* <div className="flex items-center border rounded-full">
            <input className="py-2 px-3 rounded-full focus:outline-none" type="text" placeholder="Search..." />
            <button className=" py-2 px-4 "><BsArrowRight size={30} /></button>
          </div> */}
          <div className="cursor-pointer  absolute right-0 top-4 mx-5 flex">
            {user.value && (<div className="relative">
              <button
                className="mr-5 text-xl hover:text-blue-500 focus:outline-none"
                onClick={toggleDropdown2}
              >
                <CgUserlane size={24} />

              </button>
              {isDropdownOpen2 && (
                <div className="absolute right-3 z-10 mt-2 py-2 w-48 bg-white rounded-md shadow-xl">
                  <Link className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" href="#">
                    My Account
                  </Link>
                  <Link className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" href="#">
                    Template 2
                  </Link>
                  {/* <Button variant="contained" color="primary" onClick={logout1}>
                    Logout
                  </Button> */}
                </div>
              )}
            </div>
            )}
            {!user.value && <div className="flex items-center border  border-gray-900 xl:rounded-full ">

              <Link className="p-2 pl-4 pr-4" href="/loginpage">Log in</Link>
            </div>}
          </div>
        </div>
      </header>
    </div>
  )
}

export default Navbar

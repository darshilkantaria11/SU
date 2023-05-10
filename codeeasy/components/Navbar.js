
import { MdEditSquare } from "react-icons/md";
import { BsArrowRight } from "react-icons/bs";
import Link from 'next/link';
import React, { useState, useRef, useEffect } from 'react';
import { CgUserlane } from "react-icons/cg";
import { Button } from "@material-ui/core";



const Navbar = ({logout, user }) => {

  const [dropdown2, setdropdown2] = useState(false)
  const [dropdown1, setdropdown1] = useState(false)
  const [dropdown, setdropdown] = useState(false)









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
            <Link className="mr-5 text-xl hover:text-blue-500 " href={'/templates'}> Templates</Link>

            {/* <div onMouseOver={() => { setdropdown(true) }} onMouseLeave={() => { setdropdown(false) }} >

              {dropdown && <div onMouseOver={() => { setdropdown(true) }} onMouseLeave={() => { setdropdown(false) }} className="  absolute z-10  top-10 mt-2 py-4 w-36 bg-white rounded-md shadow-xl">
                <ul>
                <Link href={'/templates/html&css'}>  <li className='block px-4 py-2 text-sm text-gray-700 hover:text-blue-500'>HTML & CSS Templates</li></Link>
                  <li className='block px-4 py-2 text-sm text-gray-700 hover:text-blue-500'>Tailwaind CSS Templates</li>
                </ul>
              </div>}
              <div className="px-4 text-xl"> Templates</div>

            </div> */}
            <div onMouseOver={() => { setdropdown1(true) }} onMouseLeave={() => { setdropdown1(false) }} >

              {dropdown1 && <div onMouseOver={() => { setdropdown1(true) }} onMouseLeave={() => { setdropdown1(false) }} className=" absolute z-10 top-10 mt-2 py-4 w-36 bg-white rounded-md shadow-xl">
                <ul>
                  <li className='block px-4 py-2 text-sm text-gray-700 hover:text-blue-500'>HTML & CSS</li>
                  <li className='block px-4 py-2 text-sm text-gray-700 hover:text-blue-500'>Logout</li>
                </ul>
              </div>}
              <div className="px-4 text-xl"> Components</div>
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
            <div onMouseOver={() => { setdropdown2(true) }} onMouseLeave={() => { setdropdown2(false) }} >
              {dropdown2 && <div onMouseOver={() => { setdropdown2(true) }} onMouseLeave={() => { setdropdown2(false) }} className="absolute right-0  top-8 rounded-sm px-5 w-36 bg-white shadow-xl">
                <ul>
                  <li className='py-1 hover:text-blue-500 text-sm'>My Account</li>
                  <li onClick={logout} className='py-1 hover:text-blue-500 text-sm'>Logout</li>
                </ul>
              </div>}

              {user.value && <div className="px-4"> <CgUserlane size={34} /></div>}
            </div>
            {!user.value &&
              <div className="flex items-center border  border-gray-900 xl:rounded-full ">
                <Link className="p-2 pl-4 pr-4" href="/loginpage">Log in</Link>
              </div>}

          </div>
        </div>
      </header>
    </div>
  )
}

export default Navbar

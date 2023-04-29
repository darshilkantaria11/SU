import React from 'react'
import { MdEditSquare } from "react-icons/md";
import { BsArrowRight } from "react-icons/bs";
import Link from 'next/link';

const Navbar = () => {
  return (
    <div>
      <header className="text-black-100 body-font border-b">
        <div className="container  flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <MdEditSquare size={32} />
            <span className=" text-2xl">SquareEdits</span>
          </a>
          <nav className="md:mr-auto md:ml-20 md:py-1   md:pl-4  text-black- flex flex-wrap items-center text-base justify-between  ">
            <Link className="mr-5 text-xl hover:text-blue-500 " href={'/'}> Home</Link>
            <Link className="mr-5 text-xl hover:text-blue-500 " href={'/'}> Templates</Link>
            <Link className="mr-5 text-xl hover:text-blue-500 " href={'/'}> Components</Link>


          </nav>
          <div className="flex items-center border rounded-full">
            <input className="py-2 px-3 rounded-full focus:outline-none" type="text" placeholder="Search..."/>
              <button className=" py-2 px-4 "><BsArrowRight size={30} /></button>
          </div>

        </div>
      </header>
    </div>
  )
}

export default Navbar
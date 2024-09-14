import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
 

  return (
    <header className="bg-white h-20 shadow fixed w-full flex items-center  justify-between">

      {/* Logo */}
      <Link to="/" className="text-2xl font-bold m-5">
        Sikaria Tech
      </Link>


   
      <nav className="lg:mr-[150px]  ">
        <ul className="flex flex-row gap-8">
          <li>
            <Link to="/" className="hover:bg-blue-600 py-2 px-4 font-medium hover:text-white">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:bg-blue-600 py-2 px-4 font-medium hover:text-white">
              About
            </Link>
          </li>
        </ul>
      </nav>

    </header>
  )
};

export default Header;

import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <header className="flex justify-between items-center px-6 h-[80px] shadow fixed w-full bg-white z-10">
      <h2 className="font-bold text-2xl">
        <Link to="/">Assignment</Link>
      </h2>



 
     <div className=' h-full '>
     <ul className="flex  h-full items-center space-x-4 list-none gap-6">
        <Link to="/" className="hover:bg-blue-600 hover:text-white text-black h-full flex items-center justify-center px-4" > Home </Link>
        <Link to="/about" className="hover:bg-blue-600 hover:text-white text-black h-full flex items-center justify-center px-4" > About </Link>
      </ul>

     </div>
      






      {/* <nav className="flex  h-full items-center justify-center">
        <ul className="flex h-full items-center space-x-4 list-none">
          <li>
            <Link
              to="/"
              className="hover:bg-blue-600 hover:text-white h-full flex text-black items-center justify-center px-4"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="hover:bg-blue-600 hover:text-white text-black h-full flex items-center justify-center px-4"
            >
              About
            </Link>
          </li>
        </ul>
      </nav> */}




      <div className="flex gap-2">
        {!localStorage.getItem('token') ? (
          <>
            <Link
              to="/signup"
              className="bg-blue-500 px-4 py-2 rounded-2xl font-medium text-white hover:bg-blue-600"
            >
              SignUp
            </Link>
            <Link
              to="/login"
              className="bg-blue-500 px-4 py-2 rounded-2xl font-medium text-white hover:bg-blue-600"
            >
              Login
            </Link>
          </>
        ) : (
          <button
            className="bg-blue-500 px-4 py-2 rounded-2xl font-medium text-white hover:bg-blue-600"
            onClick={handleLogout}
          >
            Logout
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;

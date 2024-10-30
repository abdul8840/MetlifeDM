import React, { useState } from 'react';
import { Button, Navbar } from 'flowbite-react';
import { Link, useLocation } from 'react-router-dom';
import { FaMoon, FaSun, FaAngleDown, FaAngleUp } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../redux/theme/themeSlice';

const Header = () => {
  const path = useLocation().pathname; 
  const dispatch = useDispatch();
  const { theme } = useSelector((state) => state.theme);
  
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
    closeDropdown();
  };

  return (
    <div className="border-b-2">
      <Navbar className='max-w-[1000px] mx-auto flex justify-between items-center'>
        <Link to='/' className='flex self-center items-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white'>
          <span className='border border-blue-500 text-blue-500 text-lg rounded-lg p-[1px]'>MetLife</span> <span className='text-lg'>DM</span>
        </Link>
        
        <div className="flex gap-2 md:order-2">
          <Button className='w-12 h-10 sm:inline' color='gray' pill onClick={() => dispatch(toggleTheme())}>
            {theme === 'light' ? <FaSun /> : <FaMoon />}
          </Button>
          
          <Navbar.Toggle onClick={() => setIsMobileMenuOpen((prev) => !prev)} />
        </div>

        <Navbar.Collapse className={`md:max-w-20 md:flex md:items-center dark:text-white ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
          <Navbar.Link active={path === '/'} as='div'>
            <Link to='/' className={path === '/' ? 'text-blue-500 block py-2 pr-4 pl-3 md:p-0' : 'block py-2 pr-4 pl-3 md:p-0'} onClick={handleLinkClick}>Home</Link>
          </Navbar.Link>

          <Navbar.Link active={path === '/services'} as='div'>
            <div className="relative">
              <Link 
                to='/services' 
                className={path === '/services' ? 'text-blue-500 block py-2 pr-4 pl-3 md:p-0' : 'block py-2 pr-4 pl-3 md:p-0'}
                onClick={toggleDropdown}
              >
                <div className="flex items-center gap-1">Services {isDropdownOpen ? <FaAngleUp /> : <FaAngleDown />}</div>
              </Link>
              {isDropdownOpen && (
                <div className="absolute left-0 mt-2 bg-white shadow-lg rounded w-[200px]">
                  <Link to='/services/web-design' className="block text-black px-4 py-2 hover:bg-gray-200" onClick={handleLinkClick}>Web Design</Link>
                  <Link to='/services/search-engine-optimization' className="block text-black px-4 py-2 hover:bg-gray-200" onClick={handleLinkClick}>SEO</Link>
                  <Link to='/services/pay-per-click-advertising' className="block text-black px-4 py-2 hover:bg-gray-200" onClick={handleLinkClick}>Pay Per Click</Link>
                  <Link to='/services/email-and-sms-marketing' className="block text-black px-4 py-2 hover:bg-gray-200" onClick={handleLinkClick}>Email & SMS Marketing</Link>
                  <Link to='/services/social-media-marketing' className="block text-black px-4 py-2 hover:bg-gray-200" onClick={handleLinkClick}>Social Media Marketing</Link>
                </div>
              )}
            </div>
          </Navbar.Link>

          <Navbar.Link active={path === '/team'} as='div'>
            <Link to='/team' className={path === '/team' ? 'text-blue-500 block py-2 pr-4 pl-3 md:p-0' : 'block py-2 pr-4 pl-3 md:p-0'} onClick={handleLinkClick}>Team</Link>
          </Navbar.Link>
          <Navbar.Link active={path === '/contact'} as='div'>
            <Link to='/contact' className={path === '/contact' ? 'text-blue-500 block py-2 pr-4 pl-3 md:p-0' : 'block py-2 pr-4 pl-3 md:p-0'} onClick={handleLinkClick}>Contact</Link>
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;

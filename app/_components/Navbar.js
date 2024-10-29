"use client";
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';

export default function Navbar() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dropdownRef = useRef(null);
  const mobileMenuRef = useRef(null);

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
    setDropdownOpen(false); // Close dropdown when mobile menu is opened
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target) && !isMobileMenuOpen) {
      setDropdownOpen(false);
    }

    if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
      setMobileMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md p-4">
      <div className="container mx-auto flex items-center justify-between">
        {/* Left Section: Logo */}
        <div className="flex items-center space-x-2 flex-1">
          <img src="/default.png" alt="Bright Nest Logo" className="h-10 rounded-full" />
          <Link href="/">
          <div className="text-xl font-bold text-primary">Bright Nest</div>
          </Link>
        </div>

        {/* Middle Section: Links */}
        <div className="flex-1 hidden md:flex justify-center space-x-8">
          <Link href="/" passHref>
            <p className="text-gray-600 hover:text-gray-900">Home</p>
          </Link>
          <Link href="/about" passHref>
            <p className="text-gray-600 hover:text-gray-900">About Us</p>
          </Link>
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={toggleDropdown}
              className="text-gray-600 hover:text-gray-900 focus:outline-none flex items-center"
            >
              Services
              <span className="ml-1">&#9660;</span>
            </button>
            {isDropdownOpen && (
              <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md z-10">
                <Link href="/services/3d-design" passHref>
                  <p className="block px-4 py-2 text-gray-600 hover:bg-gray-100">3D Design</p>
                </Link>
                <Link href="/services/modular-kitchen" passHref>
                  <p className="block px-4 py-2 text-gray-600 hover:bg-gray-100">Modular Kitchen</p>
                </Link>
                <Link href="/services/interior-designing" passHref>
                  <p className="block px-4 py-2 text-gray-600 hover:bg-gray-100">Interior Designing</p>
                </Link>
              </div>
            )}
          </div>
        </div>

        {/* Right Section: Button */}
        <div className="flex-1 text-right hidden md:block">
          <Link href="/contact" passHref>
            <button className="bg-secondary text-white font-bold px-4 py-2 rounded hover:bg-[#b59429] focus:outline-none">
              Contact Us
            </button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMobileMenu} className="text-gray-600 focus:outline-none">
            {isMobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div
          ref={mobileMenuRef}
          className="fixed top-20 right-4 mx-4 my-2 min-w-[200px] p-6 bg-greenish text-white rounded-xl z-50"
        >
          <Link href="/" passHref>
            <p className="mb-4 text-[16px] font-medium cursor-pointer">Home</p>
          </Link>
          <Link href="/about" passHref>
            <p className="mb-4 text-[16px] font-medium cursor-pointer">About Us</p>
          </Link>
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={toggleDropdown}
              className="text-[16px] font-medium cursor-pointer flex items-center justify-between w-full"
            >
              Services
              <span className="ml-1">&#9660;</span>
            </button>
            {isDropdownOpen && (
              <div className="mt-2 w-full bg-gray-800 rounded-md">
                <Link href="/services/3d-design" passHref>
                  <p className="px-4 py-2 text-gray-300 hover:bg-gray-700">3D Design</p>
                </Link>
                <Link href="/services/modular-kitchen" passHref>
                  <p className="px-4 py-2 text-gray-300 hover:bg-gray-700">Modular Kitchen</p>
                </Link>
                <Link href="/services/interior-designing" passHref>
                  <p className="px-4 py-2 text-gray-300 hover:bg-gray-700">Interior Designing</p>
                </Link>
                <Link href="/services/false-ceiling" passHref>
                  <p className="px-4 py-2 text-gray-300 hover:bg-gray-700">False Ceiling</p>
                </Link>
                <Link href="/services/wooden-floors" passHref>
                  <p className="px-4 py-2 text-gray-300 hover:bg-gray-700">Wooden Floors</p>
                </Link>
              </div>
            )}
          </div>
          <Link href="/contact" passHref>
            <button className="bg-[#DCAA37] text-white px-4 py-2 rounded mt-6 w-full">
              Contact Us
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
}

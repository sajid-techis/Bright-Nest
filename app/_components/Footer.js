import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  const currentYear = new Date().getFullYear(); // Get the current year

  return (
    <footer className="bg-[#FDF6D7] text-gray-700 p-6 sm:p-10">
      {/* Newsletter Section */}
      <div className="text-center mb-8">
        <h2 className="text-lg sm:text-xl font-semibold text-greenish">Sign up to our newsletter</h2>
        <p className="text-[#4A4A4A] text-sm sm:text-base">
          Stay up to date with the latest news, announcements, and articles.
        </p>
        <div className="mt-4 flex flex-col sm:flex-row justify-center items-center">
          <input 
            type="email" 
            placeholder="Enter your email" 
            className="px-4 py-2 border border-gray-400 rounded-md sm:rounded-l-md outline-none w-full sm:w-auto mb-2 sm:mb-0"
          />
          <button className="px-4 py-2 bg-greenish text-white rounded-md sm:rounded-r-md hover:bg-gray-900 w-full sm:w-auto">
            Subscribe
          </button>
        </div>
      </div>
      
      {/* Links Section */}
      <div className="flex flex-wrap justify-between text-left gap-8">
        <div className="max-w-xs">
          <Image src='/default.png' width={100} height={100} className="rounded-full" alt="Logo"/>
          <p className="text-[#4A4A4A] mt-2 text-sm sm:text-base">
          At Bright Nest Design, we specialize in creating stunning interiors that enhance your living experience. Our team of dedicated professionals works closely with you to bring your vision to life, ensuring every detail reflects your unique style and preferences.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-bold text-greenish">OUR SERVICES</h3>
          <ul className="mt-2 space-y-1 text-[#4A4A4A] text-sm sm:text-base">
            <li><Link href="#">Sketch Design</Link></li>
            <li><Link href="#">Renovations</Link></li>
            <li><Link href="#">Implementation</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold text-greenish">COMPANY</h3>
          <ul className="mt-2 space-y-1 text-[#4A4A4A] text-sm sm:text-base">
            <li><Link href="#">About Us</Link></li>
            <li><Link href="#">Services</Link></li>
            <li><Link href="#">Portfolio</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold text-greenish">LEGAL</h3>
          <ul className="mt-2 space-y-1 text-[#4A4A4A] text-sm sm:text-base">
            <li><Link href="#">Return Policy</Link></li>
            <li><Link href="#">Shipping Policy</Link></li>
            <li><Link href="#">Privacy Policy</Link></li>
            <li><Link href="#">Terms of Services</Link></li>
          </ul>
        </div>
      </div>
      
      {/* Bottom Section */}
      <div className="mt-10 flex flex-col md:flex-row justify-between items-center border-t border-gray-200 pt-4">
        <p className="text-[#4A4A4A] text-sm sm:text-base">
          &copy; {currentYear} Bright Nest. All Rights Reserved
        </p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="https://wa.link/gotxh8" target="_blank"><img src="/whatsapp-icon.png" alt="WhatsApp" className="h-5 w-5 sm:h-6 sm:w-6" /></a>
          <a href="https://www.facebook.com/profile.php?id=61567469572470&mibextid=LQQJ4d" target="_blank"><img src="/fb-icon.png" alt="Facebook" className="h-5 w-5 sm:h-6 sm:w-6" /></a>
          <a href="https://www.instagram.com/brightnest__dnb/profilecard/?igsh=MWgydXNieDdyNHdmdQ==" target="_blank"><img src="/insta-icon.png" alt="Instagram" className="h-5 w-5 sm:h-6 sm:w-6" /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

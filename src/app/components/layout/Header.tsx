'use client';
import NavMenu from '../ui/NavMenu';
import Image from 'next/image';

export default function Header() {
  // Define your navigation items in an array
  return (
    <header className="flex justify-between items-center lg:items-start p-6 md:p-8 w-full">
      {/* Logo container */}
      <div className="relative w-40 h-16 sm:w-44 sm:h-18  md:w-[180px] md:h-20 mx-auto md:mx-0 flex items-center justify-center">
        <Image 
          src="/logo.svg" // Ensure the logo path is correct
          alt="FAMETONIC" 
          layout="fill" // Makes the image fill the container
          objectFit="contain" // Keeps the image within bounds

        />
      </div>
      
      {/* Navigation */}
      <NavMenu />

      {/* Mobile Hamburger Button */}
      <button className="md:hidden cursor-pointer">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </header>
  );
}

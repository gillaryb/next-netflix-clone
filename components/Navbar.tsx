
import React from 'react';
import { useCallback , useState } from 'react';
import NavbarItem from "./NavbarItem";
import { BsChevronDown,  BsSearch, BsBell } from 'react-icons/bs';
import MobileMenu from './MobileMenu';
import AccountMenu from './AccountMenu';

export default function Navbar(){
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const toggleMobileMenu = useCallback(() =>{
    setShowMobileMenu((current) => (!current));
  }, []);


  return (
    <nav className="w-full fixed z-40 px-4 lg:px-8">
      <div className="
      px-4
      md: px-16
      py-6
      flex
      flex-row
      items-center
      transition
      duration-100
      bg-zinc-900
      bg-opacity-90
      ">
        <img className="h-4 lg:h-6" src="/images/logo.png" alt="Logo"/>
        <div className="flex flex-row gap-7 ml-8 hidden lg:flex
        ">
          <NavbarItem label="Home" />
          <NavbarItem label="TV Shows" />
          <NavbarItem label="Movies" />
          <NavbarItem label="New & Popular" />
          <NavbarItem label="My List" />
          <NavbarItem label="Browse by Languages" />
        </div>
        <div onClick={toggleMobileMenu}className="lg:hidden flex flex-row items-center gap-2 ml-8 cursor-pointer relative">
          <p className="text-white text-sm ">Browse</p>
          <BsChevronDown className="text-white transition"/>
          <MobileMenu visible={showMobileMenu} />
        </div>
        <div className="flex flex-row ml-auto gap-7 items-center">
          <div className="text-gray-200 hover:text-gray-300 cursor-pointer transition">
          <BsSearch className=""/>
          </div>
          <div className="text-gray-200 hover:text-gray-300 cursor-pointer transition">
          <BsBell className=""/>
          </div>
          <div className="flex flex-row items-center gap-2 cursor-pointer relative">
            <img className="w-8 h-8 lg:h-10 rounded-md overflow-hidden" src="/images/default-blue.png" alt="icon"/>
            <AccountMenu visible />
          </div>
        </div>
      </div>
    </nav>
  )
}

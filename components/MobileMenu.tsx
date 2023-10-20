import React from 'react';

interface MobileMenuProps{
  visible?: boolean;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ visible }) => {
  if(!visible){
    return null;
  }
  return(
    <div className="bg-black w-56 absolute top-8 left-0 py-5  flex flex-col border-1 border-gray-800">
      <div className="flex flex-col gap-4">
      <div className="px-3 text-center text-white hover:underline">Home</div>
      <div className="px-3 text-center text-white hover:underline">TV Shows</div>
      <div className="px-3 text-center text-white hover:underline">Movies</div>
      <div className="px-3 text-center text-white hover:underline">New & Popular</div>
      <div className="px-3 text-center text-white hover:underline">My List</div>
      <div className="px-3 text-center text-white hover:underline">Browse by Language</div>
      </div>
    </div>
  )
}

export default MobileMenu;
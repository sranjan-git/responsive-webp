import React from 'react';
import SearchBar from './SearchBar';
import UserProfile from './UserProfile';

function Header() {
  return (
    <header className="flex flex-col justify-center pl-12 text-base max-md:pl-5">
      <div className="flex flex-wrap gap-10 justify-between items-center self-center w-full max-w-[1148px] max-md:max-w-full">
        <SearchBar />
        <UserProfile />
      </div>
      <div className="flex w-full bg-zinc-100 min-h-[1px] max-md:max-w-full" />
    </header>
  );
}

export default Header;
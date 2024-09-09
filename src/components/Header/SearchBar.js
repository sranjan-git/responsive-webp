import React from 'react';

function SearchBar() {
  return (
    <form className="flex overflow-hidden gap-10 justify-between items-center self-stretch px-4 py-2.5 my-auto whitespace-nowrap rounded border border-solid bg-neutral-50 border-neutral-200 min-w-[240px] text-zinc-400 w-[343px]">
      <label htmlFor="search" className="sr-only">Search</label>
      <input
        type="text"
        id="search"
        placeholder="Search"
        className="self-stretch my-auto bg-transparent border-none outline-none"
      />
      <button type="submit" aria-label="Submit search">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/abd33502f666ea41f6f46d2d41cb1e26a083d0d85c9d248bca4d69adf81aec19?placeholderIfAbsent=true&apiKey=5070ce5c9fb2416aac0a8fcf33e9cc20" alt="" className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square" />
      </button>
    </form>
  );
}

export default SearchBar;
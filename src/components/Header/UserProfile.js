import React from 'react';

function UserProfile() {
  const icons = [
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/39cb694edfe9f21662736a4d6fc99774a10ad899b08051cd6c310599c848a0de?placeholderIfAbsent=true&apiKey=5070ce5c9fb2416aac0a8fcf33e9cc20", alt: "Notification icon" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/936d5cb5e76cadc248e74030183e7dca1dfa7414ef87a455dc69149702432393?placeholderIfAbsent=true&apiKey=5070ce5c9fb2416aac0a8fcf33e9cc20", alt: "Messages icon" },
  ];

  return (
    <nav className="flex gap-8 justify-center items-center self-stretch py-6 pr-12 my-auto font-medium min-w-[240px] text-blue-950 w-[364px]">
      {icons.map((icon, index) => (
        <button key={index} aria-label={icon.alt}>
          <img loading="lazy" src={icon.src} alt="" className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square" />
        </button>
      ))}
      <div className="flex gap-3 items-center self-stretch my-auto min-h-[42px]">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/cfc38eae0ef5abc94c4be2e2f232cdc13151bfb268e8a2b243878ba56e11d719?placeholderIfAbsent=true&apiKey=5070ce5c9fb2416aac0a8fcf33e9cc20" alt="User avatar" className="object-contain shrink-0 self-stretch my-auto aspect-square w-[42px]" />
        <div className="flex overflow-hidden gap-1 items-center self-stretch my-auto">
          <span className="self-stretch my-auto">Admirra John</span>
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/63060adb4aec7f3efca48a2a332aa907c6e01fe10f0b8876726877aa2675a395?placeholderIfAbsent=true&apiKey=5070ce5c9fb2416aac0a8fcf33e9cc20" alt="" className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square" />
        </div>
      </div>
    </nav>
  );
}

export default UserProfile;
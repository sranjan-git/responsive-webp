import React from "react";

function DateSelector() {
  return (
    <div className="flex gap-1.5 justify-between items-center self-stretch px-1.5 my-auto text-xs leading-7 bg-white rounded border border-solid border-zinc-100 text-stone-500 w-[145px]">
      <div className="flex-1 shrink gap-2.5 self-stretch px-0.5 py-1 my-auto min-h-[27px] w-[109px]">
        Today, 13 Sep 2021
      </div>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/b0f6713cea430c3576cbab06fd90a3d13f88b44f158e8098d417dc3d41e26dc1?placeholderIfAbsent=true&apiKey=5070ce5c9fb2416aac0a8fcf33e9cc20"
        className="object-contain shrink-0 self-stretch my-auto aspect-square w-[18px]"
        alt=""
      />
    </div>
  );
}

export default DateSelector;

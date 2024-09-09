import React from "react";

function ScheduleItem({ title, time, priority }) {
  return (
    <div
      className={`flex overflow-hidden gap-7 items-center px-4 py-2.5 mt-${
        priority ? "3" : "2"
      } w-full rounded-md border-solid bg-neutral-50 border-[0.5px] border-neutral-200`}
    >
      <div className="flex flex-col flex-1 shrink self-stretch my-auto basis-0 min-w-[240px]">
        <div
          className={`text-base ${!priority ? "leading-6" : ""} text-zinc-800`}
        >
          {title}
        </div>
        <div className="mt-1.5 text-xs leading-snug text-stone-500">{time}</div>
      </div>
      <div className="flex gap-5 items-start self-stretch my-auto min-h-[24px] w-[68px]">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/d22ad518cc7dcb522fe975940f943649ce9596c9affc028cd0a3c3d49dcaaddf?placeholderIfAbsent=true&apiKey=5070ce5c9fb2416aac0a8fcf33e9cc20"
          className="object-contain shrink-0 w-6 aspect-square"
          alt=""
        />
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/a1f5fc02b09f83f4fc5bbad40e585efa4c343b2cfabfab09525e2df94d648f07?placeholderIfAbsent=true&apiKey=5070ce5c9fb2416aac0a8fcf33e9cc20"
          className="object-contain shrink-0 w-6 aspect-square"
          alt=""
        />
      </div>
    </div>
  );
}

export default ScheduleItem;

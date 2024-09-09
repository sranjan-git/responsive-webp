import React from "react";

function AnnouncementItem({ title, time, iconSrc1, iconSrc2 }) {
  return (
    <article className="flex overflow-hidden flex-wrap gap-10 items-center px-4 py-3 mt-2 w-full rounded-md border-solid bg-neutral-50 border-[0.5px] border-neutral-200 max-w-[600px] max-md:max-w-full">
      <div className="flex flex-col flex-1 shrink self-stretch my-auto basis-0 min-w-[240px]">
        <h3 className="text-base text-zinc-800">{title}</h3>
        <time className="mt-1.5 text-xs leading-snug text-stone-500">
          {time}
        </time>
      </div>
      <div className="flex gap-5 items-start self-stretch my-auto min-h-[24px] w-[68px]">
        <img
          loading="lazy"
          src={iconSrc1}
          alt=""
          className="object-contain shrink-0 w-6 aspect-square"
        />
        <img
          loading="lazy"
          src={iconSrc2}
          alt=""
          className="object-contain shrink-0 w-6 aspect-square"
        />
      </div>
    </article>
  );
}

export default AnnouncementItem;


import React from "react";
import AnnouncementItem from "./AnnouncementItem";

const announcementData = [
  {
    title: "Outing schedule for every departement",
    time: "5 Minutes ago",
    iconSrc1:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/d02701dde526b9c363c732a6233e026b7a867427eb5a85bb810fb1bff0b6c406?placeholderIfAbsent=true&apiKey=5070ce5c9fb2416aac0a8fcf33e9cc20",
    iconSrc2:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/a1f5fc02b09f83f4fc5bbad40e585efa4c343b2cfabfab09525e2df94d648f07?placeholderIfAbsent=true&apiKey=5070ce5c9fb2416aac0a8fcf33e9cc20",
  },
  {
    title: "Meeting HR Department",
    time: "Yesterday, 12:30 PM",
    iconSrc1:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/4a4b53e5df092af3c7b987228871590fb3f0b68befbad1c1ecbca6abfbaaa3c5?placeholderIfAbsent=true&apiKey=5070ce5c9fb2416aac0a8fcf33e9cc20",
    iconSrc2:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/a1f5fc02b09f83f4fc5bbad40e585efa4c343b2cfabfab09525e2df94d648f07?placeholderIfAbsent=true&apiKey=5070ce5c9fb2416aac0a8fcf33e9cc20",
  },
  {
    title: "IT Department need two more talents for UX/UI Designer position",
    time: "Yesterday, 09:15 AM",
    iconSrc1:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/4a4b53e5df092af3c7b987228871590fb3f0b68befbad1c1ecbca6abfbaaa3c5?placeholderIfAbsent=true&apiKey=5070ce5c9fb2416aac0a8fcf33e9cc20",
    iconSrc2:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/a1f5fc02b09f83f4fc5bbad40e585efa4c343b2cfabfab09525e2df94d648f07?placeholderIfAbsent=true&apiKey=5070ce5c9fb2416aac0a8fcf33e9cc20",
  },
];

function Announcement() {
  return (
    <section className="flex flex-col max-w-screen-sm">
      <div className="flex flex-col items-center pt-4 w-full bg-white rounded-xl border border-solid border-neutral-200 max-md:max-w-full">
        <div className="flex flex-wrap gap-7 justify-between items-start w-full max-w-[598px] max-md:max-w-full">
          <h2 className="text-lg font-medium leading-loose text-blue-950 w-[427px] max-md:max-w-full">
            Announcement
          </h2>
          <div className="flex gap-1.5 justify-between items-center px-1.5 text-xs leading-7 bg-white rounded border border-solid border-zinc-100 text-stone-500 w-[145px]">
            <time className="flex-1 shrink gap-2.5 self-stretch px-0.5 py-1 my-auto min-h-[27px] w-[109px]">
              Today, 13 Sep 2021
            </time>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/88ac3c2f85e9b6233e6f344c4fe9944fb3a3d1decd0c014e9b8ee4694eeb4dc3?placeholderIfAbsent=true&apiKey=5070ce5c9fb2416aac0a8fcf33e9cc20"
              alt=""
              className="object-contain shrink-0 self-stretch my-auto aspect-square w-[18px]"
            />
          </div>
        </div>
        {announcementData.map((item, index) => (
          <AnnouncementItem key={index} {...item} />
        ))}
        <button className="overflow-hidden flex-1 shrink gap-2.5 self-stretch p-2.5 text-sm font-medium leading-none text-center text-red-500 bg-white rounded-none border border-solid border-neutral-200 min-h-[39px] max-md:max-w-full">
          See All Announcement
        </button>
      </div>
    </section>
  );
}

export default Announcement;

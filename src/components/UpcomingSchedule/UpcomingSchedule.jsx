import React from "react";
import ScheduleItem from "./ScheduleItem";
import DateSelector from "./DateSelector";

const scheduleData = [
  {
    title: "Review candidate applications",
    time: "Today - 11.30 AM",
    priority: true,
  },
  {
    title: "Interview with candidates",
    time: "Today - 10.30 AM",
    priority: false,
  },
  {
    title: "Short meeting with product designer from IT Departement",
    time: "Today - 09.15 AM",
    priority: false,
  },
  {
    title: "Sort Front-end developer candidates",
    time: "Today - 08.00 AM",
    priority: false,
  },
];

function UpcomingSchedule() {
  return (
    <section className="flex overflow-hidden flex-col max-w-[427px]">
      <div className="flex flex-col pt-5 w-full bg-white rounded-xl border border-solid border-neutral-200">
        <div className="flex flex-col px-5 w-full">
          <header className="flex gap-10 justify-between items-center w-full">
            <h2 className="self-stretch my-auto text-lg font-medium leading-loose text-blue-950 w-[200px]">
              Upcoming Schedule
            </h2>
            <DateSelector />
          </header>
          <h3 className="self-start mt-6 text-xs leading-loose text-stone-500">
            Priority
          </h3>
          {scheduleData.map((item, index) => (
            <ScheduleItem key={index} {...item} />
          ))}
        </div>
        <button className="overflow-hidden z-10 flex-1 shrink gap-2.5 self-stretch p-2.5 mt-0 text-sm font-medium leading-none text-center text-red-500 bg-white rounded-none border border-solid border-neutral-200 min-h-[39px]">
          Create a New Schedule
        </button>
      </div>
    </section>
  );
}

export default UpcomingSchedule;

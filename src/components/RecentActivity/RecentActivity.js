import React from "react";
import ActivityCard from "./ActivityCard";
import ActivitySummary from "./ActivitySummary";

function RecentActivity() {
  const activityData = {
    date: "10.40 AM, Fri 10 Sept 2021",
    title: "You Posted a New Job",
    description:
      "Kindly check the requirements and terms of work and make sure everything is right.",
    totalActivities: 12,
  };

  return (
    <section className="flex flex-col max-w-[427px] rounded-xl overflow-hidden shadow-lg bg-white">
      <header className="flex items-center justify-between px-6 py-4 bg-indigo-950 text-white text-lg font-medium">
        Recently Activity
      </header>
      <div className="flex flex-col p-6 bg-indigo-950 text-white">
        <ActivityCard
          date={activityData.date}
          title={activityData.title}
          description={activityData.description}
        />
        <ActivitySummary totalActivities={activityData.totalActivities} />
      </div>
    </section>

  );
}

export default RecentActivity;

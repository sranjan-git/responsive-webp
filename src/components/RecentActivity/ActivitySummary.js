import React from "react";

function ActivitySummary({ totalActivities }) {
  return (
    <div className="flex gap-4 justify-between items-center mt-7 w-full text-sm">
      <p className="my-auto">
        Today you made {totalActivities} Activity
      </p>
      <button className="px-4 py-2.5 font-medium bg-red-500 text-white rounded hover:bg-red-600 transition">
        See All Activity
      </button>
    </div>
  );
}

export default ActivitySummary;

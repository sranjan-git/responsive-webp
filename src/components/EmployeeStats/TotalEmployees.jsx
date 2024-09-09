
import React from "react";

function TotalEmployees({ count }) {
  return (
    <div className="flex flex-col max-w-full font-medium text-blue-950 w-[147px]">
      <h2 className="text-lg leading-loose">Total Employees</h2>
      <p className="mt-6 text-5xl leading-none">{count}</p>
    </div>
  );
}

export default TotalEmployees;


import React from "react";

function EmployeeGenderBreakdown({ menCount, womenCount }) {
  return (
    <div className="flex flex-col mt-8 max-w-full text-xs text-stone-500 w-[147px]">
      <p>{menCount} Men</p>
      <p className="mt-1">{womenCount} Women</p>
    </div>
  );
}

export default EmployeeGenderBreakdown;

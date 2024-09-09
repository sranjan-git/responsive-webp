import React from "react";
import TotalEmployees from "./TotalEmployees";
import EmployeeGenderBreakdown from "./EmployeeGenderBreakdown";
import EmployeeChart from "./EmployeeChart";

function EmployeeStats() {
  return (
    <section className="flex overflow-hidden gap-10 items-center p-5 bg-white rounded-xl border border-solid border-neutral-200 max-w-[312px]">
      <div className="flex flex-col flex-1 shrink items-start self-stretch my-auto basis-0">
        <TotalEmployees count={216} />
        <EmployeeGenderBreakdown menCount={120} womenCount={96} />
      </div>
      <EmployeeChart />
    </section>
  );
}

export default EmployeeStats;

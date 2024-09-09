
import React from "react";

function EmployeeChart() {
  return (
    <div className="flex flex-col items-end self-stretch my-auto text-xs leading-6 h-[121px] text-zinc-800 w-[115px]">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/5bc86581aa4cbbbabc08a46afbfff95f2a741f1b2c6f8abe721e143e4b1a7e7f?placeholderIfAbsent=true&apiKey=5070ce5c9fb2416aac0a8fcf33e9cc20"
        className="object-contain max-w-full aspect-[1.47] w-[115px]"
        alt="Employee statistics chart"
      />
      <div className="gap-2.5 self-stretch px-2.5 mt-5 bg-orange-50 rounded">
        +2% Past month
      </div>
    </div>
  );
}

export default EmployeeChart;

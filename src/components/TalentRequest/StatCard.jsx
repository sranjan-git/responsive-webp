
import React from "react";

function StatCard({ title, count, children }) {
  return (
    <div className="flex flex-col flex-1 shrink items-start self-stretch my-auto basis-0">
      <div className="flex flex-col max-w-full font-medium text-blue-950 w-[147px]">
        <h2 className="text-lg leading-loose">{title}</h2>
        <p className="mt-6 text-5xl leading-none">{count}</p>
      </div>
      {children}
    </div>
  );
}

export default StatCard;

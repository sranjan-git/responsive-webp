
import React from "react";

function StatDetails({ details }) {
  return (
    <div className="flex flex-col mt-8 max-w-full text-xs text-stone-500 w-[147px]">
      {details.map((detail, index) => (
        <p key={index}>
          {detail.value} {detail.label}
        </p>
      ))}
    </div>
  );
}

export default StatDetails;

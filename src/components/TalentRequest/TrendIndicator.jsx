import React from "react";

function TrendIndicator({ value, period }) {
  return (
    <div className="gap-2.5 self-stretch px-2.5 mt-5 bg-orange-50 rounded">
      {value} {period}
    </div>
  );
}

export default TrendIndicator;

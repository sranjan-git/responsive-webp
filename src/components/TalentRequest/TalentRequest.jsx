
import React from "react";
import StatCard from "./StatCard";
import StatDetails from "./StatDetails";
import TrendIndicator from "./TrendIndicator";

function TalentRequest() {
  const talentData = {
    title: "Talent Request",
    count: 16,
    details: [
      { label: "Men", value: 6 },
      { label: "Women", value: 10 },
    ],
    trend: {
      value: "+5%",
      period: "Past month",
    },
  };

  return (
    <section className="flex overflow-hidden gap-10 items-center p-5 bg-white rounded-xl border border-solid border-neutral-200 max-w-[312px]">
      <StatCard title={talentData.title} count={talentData.count}>
        <StatDetails details={talentData.details} />
      </StatCard>
      <div className="flex flex-col items-end self-stretch my-auto text-xs leading-6 h-[121px] text-zinc-800 w-[115px]">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/025af4f3295404d45fd7fc8ab73134b4f296a981a8454d597d50c941d8c0de0f?placeholderIfAbsent=true&apiKey=5070ce5c9fb2416aac0a8fcf33e9cc20"
          alt="Talent request trend visualization"
          className="object-contain max-w-full aspect-[1.47] w-[115px]"
        />
        <TrendIndicator
          value={talentData.trend.value}
          period={talentData.trend.period}
        />
      </div>
    </section>
  );
}

export default TalentRequest;

import React from "react";

function ActivityCard({ date, title, description }) {
  return (
    <article className="flex flex-col w-full font-medium">
      <time className="text-xs opacity-70">{date}</time>
      <h2 className="mt-1.5 text-lg leading-loose">{title}</h2>
      <p className="mt-1.5 text-sm leading-5 text-white opacity-80">
        {description}
      </p>
    </article>
  );
}

export default ActivityCard;

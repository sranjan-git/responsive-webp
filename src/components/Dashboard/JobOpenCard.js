import React from 'react';

const JobOpenCard = ({ title, count, activeHiring }) => {
  return (
    <section className="flex overflow-hidden flex-col justify-center py-3 pr-3 pl-5 font-medium bg-indigo-50 rounded-xl text-blue-950">
      <h2 className="text-lg leading-loose">{title}</h2>
      <p className="mt-4 text-4xl leading-none">{count}</p>
      <p className="mt-4 text-base text-blue-500">{activeHiring} Active hiring</p>
    </section>
  );
};

export default JobOpenCard;
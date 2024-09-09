import React from 'react';

const AvailablePosition = ({ count, urgentCount }) => (
  <section className="flex overflow-hidden flex-col justify-center py-3 pr-3 pl-5 font-medium bg-orange-50 rounded-xl text-blue-950">
    <h2 className="text-lg leading-loose">Available Position</h2>
    <p className="mt-4 text-4xl leading-none">{count}</p>
    {urgentCount > 0 && (
      <p className="mt-4 text-base text-red-500">{urgentCount} Urgently needed</p>
    )}
  </section>
);

export default AvailablePosition;
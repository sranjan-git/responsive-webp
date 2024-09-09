import React from 'react';

const NewEmployeesCard = () => {
  return (
    <section className="flex overflow-hidden flex-col justify-center py-3 pr-3 pl-5 font-medium bg-pink-50 rounded-xl text-blue-950">
      <h2 className="text-lg leading-loose">New Employees</h2>
      <p className="mt-4 text-4xl leading-none">24</p>
      <p className="mt-4 text-base text-pink-400">4 Department</p>
    </section>
  );
};

export default NewEmployeesCard;
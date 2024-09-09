import React from 'react';
import AvailablePosition from './AvailablePosition';
import JobOpenCard from './JobOpenCard';
import NewEmployeesCard from './NewEmployeesCard';
import RecentActivity from '../RecentActivity/RecentActivity';
import './Dashboard.css'; 

const Dashboard = () => (
  <div className="dashboard-container">
    <div className="dashboard-stats">
      {/* Available Position Card */}
      <div className="stat-card">
        <p><AvailablePosition count={24} urgentCount={4} /></p>
      </div>

      {/* Job Open Card */}
      <div className="stat-card">
        <p><JobOpenCard title="Job Open" count={10} activeHiring={4} /></p>
      </div>

      {/* New Employees Card */}
      <div className="stat-card">
        <p><NewEmployeesCard title="New Employees" count={5} /></p>
      </div>
    </div>

    {/* Align Recent Activity with the New Employees Card */}
    <div className="recent-activity-container">
      <RecentActivity />

    </div>
    
    
  </div>
);

export default Dashboard;

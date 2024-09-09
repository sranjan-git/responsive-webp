import React from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import Header from './components/Header/Header';
import Dashboard from './components/Dashboard/Dashboard';  
import './App.css';
import UpcomingSchedule from './components/UpcomingSchedule/UpcomingSchedule';
import Announcement from './components/Announcement/Announcement';
import RecentActivity from './components/RecentActivity/RecentActivity';
import TalentRequest from './components/TalentRequest/TalentRequest';
import EmployeeStats from './components/EmployeeStats/EmployeeStats';

function App() {
  return (
    <div className="app-container">
      {/* Sidebar with logo */}
      <Sidebar />

      {/* Main Content Area */}
      <div className="content-area">
        {/* Header */}
        <Header />

        {/* Dashboard title */}
        <h1 className="dashboard-title">Dashboard</h1>

        {/* Dashboard statistics cards */}
        <Dashboard />

        {/* Main grid for employee and talent stats */}
        <div className="dashboard-grid">
          <EmployeeStats />
          <TalentRequest />
          <UpcomingSchedule/>
          
        </div>

        {/* Additional sections */}
        <Announcement />
       
      </div>
    </div>
  );
}

export default App;

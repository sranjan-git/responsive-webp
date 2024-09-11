import React from 'react';
import MenuItem from './MenuItem';
import MenuSection from './MenuSection';
import './Sidebar.css'; // Custom CSS for the sidebar

const mainMenuItems = [
  { icon:       "/assets/8.svg",    
  label: "Dashboard", isActive: true },
  { icon:       "/assets/11.svg",    
  label: "Recruitment" },
  { icon:       "/assets/7.svg",    
  label: "Schedule" },
  { icon:       "/assets/10.svg",    
  label: "Employee" },
  { icon: "/assets/9.svg", label: "Department" }
];

const otherMenuItems = [
  { icon: "/assets/14.svg", label: "Support" },
  { icon: "/assets/13.svg", label: "Settings" }
];

function Sidebar() {
  return (
    <nav className="sidebar-container">
      {/* Sidebar header with logo */}
      <header className="sidebar-header">
        <img
          loading="lazy"
          src="/assets/26.svg"
          alt="Company Logo"
          className="sidebar-logo"
        />
      </header>

      {/* Main menu section */}
      <MenuSection title="MAIN MENU" items={mainMenuItems} />

      {/* Other section */}
      <MenuSection title="OTHER" items={otherMenuItems} />
    </nav>
  );
}

export default Sidebar;

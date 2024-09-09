import React from 'react';
import MenuItem from './MenuItem';
import MenuSection from './MenuSection';
import './Sidebar.css'; // Custom CSS for the sidebar

const mainMenuItems = [
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/dc361d613f18df413490ec0a72a39c25270abdfeea6383ef0bc14cd084a31343?placeholderIfAbsent=true&apiKey=5070ce5c9fb2416aac0a8fcf33e9cc20", label: "Dashboard", isActive: true },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/46b74223b388ab782014b590fca4d779c8abc21528203e01c14203bfcdce2b35?placeholderIfAbsent=true&apiKey=5070ce5c9fb2416aac0a8fcf33e9cc20", label: "Recruitment" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/d3e42c172916632d67f77e628a5ca01cbf5985512e1e4f9a0552a9ec60d02508?placeholderIfAbsent=true&apiKey=5070ce5c9fb2416aac0a8fcf33e9cc20", label: "Schedule" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/9e54c062f252c50b266cd796f480c974cc297b51fe6b19b5299365adc0bc6bba?placeholderIfAbsent=true&apiKey=5070ce5c9fb2416aac0a8fcf33e9cc20", label: "Employee" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/fe6501d24f664c8bdd01daf0854627a8e4542faf457ab4901564114a997e6f9d?placeholderIfAbsent=true&apiKey=5070ce5c9fb2416aac0a8fcf33e9cc20", label: "Department" }
];

const otherMenuItems = [
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/adae3fc8d6030b0a9fc33a95bfdc19a9f194cfdc50fcea06e8abfa38ec7e6e90?placeholderIfAbsent=true&apiKey=5070ce5c9fb2416aac0a8fcf33e9cc20", label: "Support" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/13df70758d81d6eb72f4bf64947e416f13bbfd9e104fbbbd2ca4fac09f516b07?placeholderIfAbsent=true&apiKey=5070ce5c9fb2416aac0a8fcf33e9cc20", label: "Settings" }
];

function Sidebar() {
  return (
    <nav className="sidebar-container">
      {/* Sidebar header with logo */}
      <header className="sidebar-header">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/6cbac76440c3b6a57eccac9b3a1048fce2cd9b61b274ee9ea4388d7a94030e14?placeholderIfAbsent=true&apiKey=5070ce5c9fb2416aac0a8fcf33e9cc20"
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

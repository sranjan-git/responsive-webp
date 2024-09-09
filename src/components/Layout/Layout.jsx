import React from "react";
import Sidebar from "./Sidebar";
import MainContent from "./MainContent";

function Layout() {
  return (
    <div className="flex flex-wrap">
      <Sidebar />
      <MainContent />
    </div>
  );
}

export default Layout;

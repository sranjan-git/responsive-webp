import React from 'react';

function MenuItem({ icon, label, isActive }) {
  return (
    <a href="#" className={`menu-item ${isActive ? 'menu-item-active' : ''}`}>
      <img src={icon} alt={`${label} icon`} />
      {label}
    </a>
  );
}

export default MenuItem;

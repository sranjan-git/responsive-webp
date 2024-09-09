import React from 'react';
import MenuItem from './MenuItem';

function MenuSection({ title, items }) {
  return (
    <div className="menu-section">
      <h3 className="menu-section-title">{title}</h3>
      {items.map((item, index) => (
        <MenuItem 
          key={index} 
          icon={item.icon} 
          label={item.label} 
          isActive={item.isActive} 
        />
      ))}
    </div>
  );
}

export default MenuSection;

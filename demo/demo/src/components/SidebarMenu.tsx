import React from 'react';

const menuItems = [
  { icon: '🏠', text: 'Home', selected: true },
  { icon: '🍱', text: 'Value Meals' },
  { icon: '🍔', text: 'Burgers & Wraps' },
  { icon: '🍗', text: 'Festive Sharing Meals' },
];

export const SidebarMenu = () => {
  return (
    <div className="sidebar-menu">
      {menuItems.map((item, index) => (
        <div key={index} className={`menu-item ${item.selected ? 'selected' : ''}`}>
          <span>{item.icon}</span>
          <span>{item.text}</span>
        </div>
      ))}
    </div>
  );
};

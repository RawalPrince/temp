import React from 'react';
import { CategoryCard, PromoCard, SidebarMenu, NewItemsGrid, Footer } from './components';
import './styles/app.css';

const McDonaldsMenu = () => {
  return (
    <div className="menu-container">
      <header className="header">
        <img src="/components/mcdonalds-logo.png" alt="McDonald's Logo" className="logo" />
        <h1>Meals at McDonald's®</h1>
      </header>

      <h2>Discover Our Menu</h2>

      <div className="menu-grid">
        <CategoryCard overlay="rgba(22, 163, 74, 0.6)" image="/components/veg-burgers.png" title="Veg Burgers" />
        <CategoryCard overlay="rgba(220, 38, 38, 0.6)" image="/components/chicken-burgers.png" title="Chicken Burgers" />
        <PromoCard title="McCafe Cappuccino" subtitle="Enjoy a cup of" image="/components/mccafe-cup.png" />
        <PromoCard
          title="Chocolate Overload"
          subtitle="Try the new"
          image="/components/chocolate-overload.png"
          background="#1f2937"
          color="white"
        />
      </div>

      <SidebarMenu />
      <img src="/components/loyalty-banner.png" alt="Loyalty Banner" className="loyalty-banner" />
      <NewItemsGrid />
      <Footer />
    </div>
  );
};

export default McDonaldsMenu;

import React from 'react';

type Props = {
  overlay: string;
  image: string;
  title: string;
};

export const CategoryCard = ({ overlay, image, title }: Props) => {
  return (
    <div className="category-card" style={{ background: overlay }}>
      <img src={image} alt={title} className="category-image" />
      <h3>{title}</h3>
    </div>
  );
};

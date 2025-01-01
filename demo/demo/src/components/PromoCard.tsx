import React from 'react';

type Props = {
  title: string;
  subtitle: string;
  image: string;
  background?: string;
  color?: string;
};

export const PromoCard = ({ title, subtitle, image, background = '#f3f4f6', color = '#1f2937' }: Props) => {
  return (
    <div className="promo-card" style={{ background, color }}>
      <img src={image} alt={title} className="promo-image" />
      <div>
        <p className="subtitle">{subtitle}</p>
        <p className="title">{title}</p>
      </div>
    </div>
  );
};

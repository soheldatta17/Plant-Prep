import React from 'react';

interface FadeInOnScrollProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export const FadeInOnScroll: React.FC<FadeInOnScrollProps> = ({ children, className = '', style }) => {
  return (
    <div className={className} style={style}>
      {children}
    </div>
  );
};
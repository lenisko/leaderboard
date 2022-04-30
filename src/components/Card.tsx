import { FC } from 'react';

interface CardProps {
  className?: string;
}

export const Card: FC<CardProps> = ({ children, className }) => {
  return <div className={`bg-white-100 text-black box-border rounded ${className || ''}`}>{children}</div>;
};

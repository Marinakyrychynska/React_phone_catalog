import React from 'react';
import { useLocation } from 'react-router-dom';
import './CardEmpty.scss';

export const CardEmpty: React.FC = () => {
  const { pathname } = useLocation();

  return (
    <div className="cardEmpty">
      <p className="cardEmpty__text">
        {`Your ${pathname.slice(1)} is empty ...`}
      </p>
    </div>
  );
};

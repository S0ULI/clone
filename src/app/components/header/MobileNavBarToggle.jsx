'use client';

import { useState, useEffect } from 'react';

const MobileNavBarToggle = ({ click, toggle }) => {
  return (
    <div>
      <div onClick={click} className={`wrapper-menu ${toggle ? 'open' : ''}`}>
        <div className="line-menu half start"></div>
        <div className="line-menu"></div>
        <div className="line-menu half end"></div>
      </div>
    </div>
  );
};

export default MobileNavBarToggle;

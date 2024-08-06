import React, { useState } from 'react';
import './Progress.css';

const Progress = ({ goalAmount }) => {
  const [totalAmount, setTotalAmount] = useState(0);

  

  const percentage = (totalAmount / goalAmount) * 100;

  return (
    <div className="progress-bar-container">
      <div className="progress-bar">
        <div
          className="progress-bar-fill"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
      <p className="progress-bar-text">
        ${(totalAmount / 100).toFixed(2)} raised of ${(goalAmount / 100).toFixed(2)} goal
      </p>
    </div>
  );
};

export default Progress;
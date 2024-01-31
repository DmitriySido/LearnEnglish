import React, { useState, useEffect } from 'react';
import './CircularProgressBar.scss'; // Импортируйте стили из файла CircularProgressBar.css

const CircularProgressBar = ({ percent }) => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const progressOffset = (100 - percent) / 100 * 1740; // 440 - длина окружности круга
    setOffset(progressOffset);
  }, [percent]);

  return (
    <div className="circular-progress-container">
      <p className='circle-bar-percent'>{percent}/17</p>
      <svg>
        <circle
          className="circular-progress-ring"
          cx="50%"
          cy="50%"
          r="40%"
        />
        <circle
          className="circular-progress-fill"
          cx="50%"
          cy="50%"
          r="40%"
          style={{ strokeDashoffset: offset }}
        />
      </svg>
    </div>
  );
};

export default CircularProgressBar;
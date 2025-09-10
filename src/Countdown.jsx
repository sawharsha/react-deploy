// src/components/Countdown.js
import React, { useState, useEffect } from 'react';

const Countdown = ({ targetDate, onFinish }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};
    if (difference > 0) {
      timeLeft = {
         days: Math.floor(difference / (1000 * 60 * 60 * 24)),
         hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
         minutes: Math.floor((difference / 1000 / 60) % 60),
         seconds: Math.floor((difference / 1000) % 60)
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      const newTime = calculateTimeLeft();
      setTimeLeft(newTime);
      if (Object.keys(newTime).length === 0) onFinish();
    }, 1000);
    return () => clearTimeout(timer);
  });

  if (Object.keys(timeLeft).length === 0) return null;

  return (
    // <div>
    //   <h2>Countdown to Birthday:</h2>
    //   <p>{`${timeLeft.days}d ${timeLeft.hours}h ${timeLeft.minutes}m ${timeLeft.seconds}s`}</p>
    // </div>
    <div className="countdown-container">
      <h2 className="title blink">🎈 Birthday Countdown 🎈</h2>
      <div className="timer">
        <span className="time-box">{timeLeft.days}<span>d</span></span>
        <span className="time-box">{timeLeft.hours}<span>h</span></span>
        <span className="time-box">{timeLeft.minutes}<span>m</span></span>
        <span className="time-box">{timeLeft.seconds}<span>s</span></span>
      </div>
    </div>
  );
};

export default Countdown;

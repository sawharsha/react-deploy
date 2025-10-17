// src/App.js
import React, { useState } from 'react';
import Countdown from './Countdown';
import BirthdayWish from './BirthdayWish';
import './App.css';

function App() {
  const [isBirthday, setIsBirthday] = useState(false);

  const targetDate = '2025-10-21T00:00:00';

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      {!isBirthday ? (
        <Countdown targetDate={targetDate} onFinish={() => setIsBirthday(true)} />
      ) : (
        <BirthdayWish />
      )}
    </div>
  );
}

export default App;
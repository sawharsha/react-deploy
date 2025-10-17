// // src/components/BirthdayWish.js
// import React, { useRef, useState } from 'react';
// import birthdaySong from './assets/Birthday.mp3';

// const BirthdayWish = () => {
//   const audioRef = useRef(null);
//   const [played, setPlayed] = useState(false);

//   const handlePlay = () => {
//     audioRef.current.play();
//     setPlayed(true);
//   };

//   // useEffect(() => {
//   //   audioRef.current.play();
//   // }, []);

//   return (
//     <div>
//       {!played && (
//         <button onClick={handlePlay} style={buttonStyle}>
//           For you
//         </button>
//       )}
//       <audio ref={audioRef} src={birthdaySong} />
//       <h1>Happy Birthday_@DOLL #SWETHA_GARU..!</h1>
//       <p>Just wanted to remind you-you're my favorite person. my days are better, smiles are wider, and life is sweeter because of you.</p>
//       <div></div><p>I hope your birthday is full of love, magic, and everything that makes you smile</p>
//       <div>
//         <p>May every wish you make today come true.You deserve the world, and I'll always be here to remind you of that. </p>
//         <div></div><p>
//           Let's always stay like this... together, forever
//         </p>
//       </div>
//       {/* {!played && (
//         <button onClick={handlePlay} style={buttonStyle}>
//           For you
//         </button>
//       )}
//       <audio ref={audioRef} src={birthdaySong} /> */}
//     </div>
//   );
// };

// const buttonStyle = {
//   marginTop: '20px',
//   padding: '12px 24px',
//   fontSize: '1rem',
//   backgroundColor: '#ff4081',
//   color: 'white',
//   border: 'none',
//   borderRadius: '10px',
//   cursor: 'pointer',

// };
// export default BirthdayWish;
import React, { useState, useRef } from 'react';
import './BirthdayCard.css';
import birthdaySong from './assets/Birthday1.mp3';

const BirthdayCard = () => {
  const [opened, setOpened] = useState(false);
  const audioRef = useRef(null);

  const handleOpen = () => {
    setOpened(true);
    audioRef.current.play();
  };

  return (
    <div className="birthday-bg">
      <div className="confetti-container"></div>
      <div className="card">
        <h1 className="birthday-title">🎉 Happy Birthday!</h1>
        <h2 className="subtitle">🎂✨  ABHIGNA_GARU
</h2>

        {!opened ? (
          <div className="gift-box" onClick={handleOpen}>
            <p>Tap to open your card</p>
            <span role="img" aria-label="gift">🎁</span>
          </div>
        ) : (
          <div className="card-content">
            <p>Happy Birthday_@ABHIGNA_GARU🎂 
 </p>
            <p className="middle">I hope all your dreams and goals come true soon ✨ May every wish you make today come true 🎂 You deserve the world 🌍 </p>
            {/* <p>May every wish you make today come true. You deserve the world, and I’ll always be here to remind you of that.</p> */}
            {/* <p className="closing">Let’s always stay like this… together, forever 🫶</p> */}
          </div>
        )}
        <div className="last"> 
          <p>Always stay strong 💪, keep smiling 😊, and never stop lifting 🏋‍♀ </p>
          <p className="closing">You truly deserve all the good things in life 😊</p>
        </div>
        <audio ref={audioRef} src={birthdaySong} />
      </div>
    </div>
  );
};

export default BirthdayCard;
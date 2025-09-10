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
        <h2 className="subtitle">🎂✨❤ @BUJJI #Nanna #Bujjilu #Swathodu #Doctor_Amma #kittodu #Bangaram #MY LIFE #MY_EVERYTHING...🫴🫀👸🏼
</h2>

        {!opened ? (
          <div className="gift-box" onClick={handleOpen}>
            <p>Tap to open your card</p>
            <span role="img" aria-label="gift">🎁</span>
          </div>
        ) : (
          <div className="card-content">
            <p>Just wanted to remind you—you’re my favorite person 💖. Naku nee B'day ante naku chela istam naku pedda festival..🎊🥳
Nee next B'Day aena nitho ne pakka vundi celebrate chesukovali ani vundhi..🥹🤗 </p>
            <p className="middle">Niko vishyam telusa potti nenu ndhuku lv chesanu telusaa ninnu nv namedha chupinchina premaki padipoyane niku..💘👸.<br />
Parichayam Chalu Anukunna 🤝,<br/>
Prapancham Aypoyavu 🌍❤.<br/>
Kasepu Chusi Agipodam Anukunna 👀⏸,<br/>
Prema Aypoyavu 💘.<br/>
Koncham Samyam Ichhi Chudam Anukunna ⏳🤔,<br/>
Sarvasvam Aypoyavu 💞🙏.<br/>
Life long nitho brathakali Anukunnanu 💑🌟,<br/>
Vadhilesi Vellipoyavu 💔🚶‍♀.<br/>
<br/><br/>
Ika medha na lyf veru kadha 🚫❤<br/>
Andhulo nv vundav 😔💔<br/>
Eppudu kavalante appudu ninnu chudalenu 👀❌<br/>
Nee matalu vinnalenu 🎧🚫<br/>
Niku nachela edhi cheyalenu 🤷‍♂💭<br/>
Idhantha naaa valla avuthundhaaa 😢🤯
</p>
            {/* <p>May every wish you make today come true. You deserve the world, and I’ll always be here to remind you of that.</p> */}
            {/* <p className="closing">Let’s always stay like this… together, forever 🫶</p> */}
          </div>
        )}
        <div className="last"> 
          <p>“Niku eppudaina life lo emaina problem vachina 💔 <br/>
Ledha ontariga vunnanu anipinchina 😔<br/>
Niku ee problem vachina nee mundhu addamga nilabadipothaanu 💪✨<br/>
Ee world motham niku opposite gaa vunna nenu matram nethone vuntanu 🤗❤<br/>
Just naku Hi ani msg cheyu chalu 📩🙂<br/>
Nee msg kosam eppudu wait chesthune vuntanu ⏳💙<br/>
</p>
          <p className="closing">Dr. Amma_garu meremo jagrathaga vundali andi 😢🙏<br/>
Baga chadhivesukovali 📚💡<br/>
Tym ki ammu thinneyali 🍲⏰ and tym ki bajjovali ☕🥪<br/>
Manushulatho jagrathaga vundali 🧍‍♀⚠ sare naa… 😔❤<br/>
Miss u so much Bujji 😭💖<br/>
Love u 💕🤗”
 🫶</p>
        </div>
        <audio ref={audioRef} src={birthdaySong} />
      </div>
    </div>
  );
};

export default BirthdayCard;
import React, { useState } from 'react';
import '../styles/component/SlimeText.scss'

function SlimeText({ text }) {
  const primaryTextSize = '50px';
  const secondaryTextSize = '40px';
  const tertairyTextSize = '35px';

  const [primaryText, setPrimaryText] = useState(null);

  const [rightSecondaryText, setrightSecondaryText] = useState(null);
  const [rightTertairyText, setrightTertairyText] = useState(null);

  const [leftSecondaryText, setLeftSecondaryText] = useState(null);
  const [leftTertairyText, setLeftTertairyText] = useState(null);

  const splitText = text.split('');
  function getFontSize(i) {
    if (primaryText === i) {
      return primaryTextSize;
    } else if (rightSecondaryText === i || leftSecondaryText === i) {
      return secondaryTextSize;
    } else if (rightTertairyText === i || leftTertairyText === i) {
      return tertairyTextSize;
    } else {
      return '25px';
    }
  }
  const mouseOverText = (i) => {
    setPrimaryText(i);
    if (i >= 2 && i <= splitText.length - 3) {
      setrightSecondaryText(i - 1);
      setrightTertairyText(i - 2);
      setLeftSecondaryText(i + 1);
      setLeftTertairyText(i + 2);
    }
  }
  const mouseOutText = () => {
    setPrimaryText(null);
    setrightSecondaryText(null);
    setrightTertairyText(null);
    setLeftSecondaryText(null);
    setLeftTertairyText(null);
  }
  const textBlocked = splitText.length > 5 ? splitText.map((l, i) => {
    return <span
      className="slimeLetter"
      style={{ fontSize: getFontSize(i) }}
      onMouseOver={() => mouseOverText(i)}
      onMouseOut={mouseOutText}
      key={i}>{l}</span>
  }) : "Min 5 characters long"
  // console.log("primaryText, secondaryText, tertairyText", primaryText, rightSecondaryText, rightTertairyText);
  return (
    <>
      <div style={{ height: "50px", display: 'flex', alignItems: "end" }}>
        {/* <div> */}
        {textBlocked}
        {/* </div> */}
      </div>
    </>
  )
}

export default SlimeText

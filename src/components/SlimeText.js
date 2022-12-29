import React, { useState } from 'react';
import '../styles/component/SlimeText.scss';
import {
  SLIME_TEXT_SIZES,
  DEFAULT_TEXT_SIZE_KEY,
  PRIMARY_TEXT_SIZE_KEY,
  SECONDARY_TEXT_SIZE_KEY,
  TERTAIRY_TEXT_SIZE_KEY
} from '../static/constant';
// all sizes (xs, sm, md, lg, xl);
function SlimeText({ text, size = "md" }) {
  const primaryTextSize = SLIME_TEXT_SIZES[size][PRIMARY_TEXT_SIZE_KEY];
  const secondaryTextSize = SLIME_TEXT_SIZES[size][SECONDARY_TEXT_SIZE_KEY];
  const tertairyTextSize = SLIME_TEXT_SIZES[size][TERTAIRY_TEXT_SIZE_KEY];

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
      return SLIME_TEXT_SIZES[size][DEFAULT_TEXT_SIZE_KEY];
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

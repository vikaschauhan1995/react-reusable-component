import React from 'react';
import styleVariable from '../../styles/_variables.scss';

function TextColorWrapper({ children }) {
  return (
    <div style={{ color: styleVariable.whiteColor }}>
      {children}
    </div>
  )
}

export default TextColorWrapper;
import React from 'react';

// style
import './GrayButton.css';

const GrayButton = (props) => {
  const { text } = props;
  return <div className={"grayBtn"}>
      {text}
      </div>
}

export default GrayButton

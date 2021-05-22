import React from 'react';

// style
import './OrangeButton.css';

const OrangeButton = ({text, onClickBtn}) => {

  return <div className={"orangeBtn"} onClick={onClickBtn}>
      {text}
      </div>
}

export default OrangeButton

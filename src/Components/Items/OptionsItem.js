import React from 'react';

// style
import './OptionsItem.css';

const OptionsItem = ({item}) => {
  let amount = item.amount * item.unit;

  return <div className="items">
        <span>·{amount}g </span>
        <span>{item.name}&nbsp;&nbsp;</span>
      </div>
}

export default OptionsItem

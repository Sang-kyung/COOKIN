import React from 'react';

// style
import './OptionsItem.css';

const OptionsItem = ({item}) => {
  console.log(item.amount, item.unit);
  let amount = item.amount * item.unit;

  return <div className="items">
        <span>·{amount}g </span>
        <span>{item.name}&nbsp;</span>
      </div>
}

export default OptionsItem

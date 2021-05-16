import React from 'react';

// style
import './OptionsItem.css';

const OptionsItem = ({item}) => {

  return <div className="items">
        <span>{item.amount} of </span>
        <span>{item.name}, </span>
      </div>
}

export default OptionsItem

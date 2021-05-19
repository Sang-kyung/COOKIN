import React from 'react';

// style
import './OptionsItem.css';

const OptionsItem = ({item}) => {

  return <div className="items">
        <span>{item.name} </span>
        <span>{item.amount}, </span>
      </div>
}

export default OptionsItem

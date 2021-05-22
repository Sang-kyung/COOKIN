import React from 'react';
import { Link } from 'react-router-dom';

import './HomePageButton.css'


const HomePageButton = () => {

  return (
    <Link to="/">
      <div className="homeTitleWrapper">
        <img className="icon" src={require(`../../img/Main/chef.png`).default} />
        <div className="titleWrapper">
          <h1>CookIn</h1>
          <span>Find the best kitchen for you!</span>
        </div>
    </div>
    </Link>
  ) 
}

export default HomePageButton

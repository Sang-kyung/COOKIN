import React from 'react';
import './MainHeaderView.css'
import MyPageButton from '../Buttons/MyPageButton';
import HomePageButton from '../Buttons/HomePageButton';

const MainHeaderView = () => {

  return (
    <div className="headerWrapper">
      <HomePageButton />
      <MyPageButton />
    </div>
  )
}

export default MainHeaderView

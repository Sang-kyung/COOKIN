import React from 'react';
import './HeaderView.css'
import MainHeaderViewLeft from './MainHeaderViewLeft';
// view
import MyPageButton from '../Buttons/MyPageButton';

const MainHeaderView = () => {

  return <div>
    <MainHeaderViewLeft />
    <div id= "HeaderRight">
    <MyPageButton />
    </div>
    
  </div>
}

export default MainHeaderView

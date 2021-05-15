import React from 'react';
import './HeaderView.css'
import MainHeaderViewLeft from './MainHeaderViewLeft';
import HeaderViewRight from './HeaderViewRight';
//<div id= "HeaderRight">
//<MyPageButton />
//</div>
// view
import MyPageButton from './Buttons/MyPageButton';

const MainHeaderView = () => {

  return <div>
    <MainHeaderViewLeft />
    <HeaderViewRight />
    
  </div>
}

export default MainHeaderView

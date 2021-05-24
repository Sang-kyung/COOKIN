import React from 'react';
import DetailHeaderViewLeft from './DetailHeaderViewLeft';
import MyPageButton from '../Buttons/MyPageButton';


const DetailHeaderView = () => {

  return <div className="searchHeader">
    <DetailHeaderViewLeft />
    <MyPageButton />
  </div>
}

export default DetailHeaderView

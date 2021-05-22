import React from 'react';
// import './HeaderView.css'
import SearchHeaderViewLeft from './SearchHeaderViewLeft';
import HeaderViewRight from './HeaderViewRight';
import MyPageButton from '../Buttons/MyPageButton';


const SearchHeaderView = () => {

  return <div className="headerWrapper">
    <SearchHeaderViewLeft />
    <MyPageButton />
  </div>
}

export default SearchHeaderView

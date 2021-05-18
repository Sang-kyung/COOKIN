import React from 'react';
import './HeaderView.css'
import SearchHeaderViewLeft from './SearchHeaderViewLeft';
import HeaderViewRight from './HeaderViewRight';
//<div id= "HeaderRight">
//<MyPageButton />
//</div>
// view
import MyPageButton from '../Buttons/MyPageButton';

const SearchHeaderView = () => {

  return <div>
    <SearchHeaderViewLeft />
    <HeaderViewRight />
    
  </div>
}

export default SearchHeaderView

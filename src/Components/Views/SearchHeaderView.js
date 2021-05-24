import React from 'react';
import './MainHeaderView'
import SearchHeaderViewLeft from './SearchHeaderViewLeft';
import MyPageButton from '../Buttons/MyPageButton';


const SearchHeaderView = () => {

  return <div className="searchHeader">
    <SearchHeaderViewLeft />
    <MyPageButton />
  </div>
}

export default SearchHeaderView

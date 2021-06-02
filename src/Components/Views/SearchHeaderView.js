import React from 'react';
import SearchHeaderViewLeft from './SearchHeaderViewLeft';
import MyPageButton from '../Buttons/MyPageButton';


const SearchHeaderView = (props) => {
  const { onClickRecommend } = props
  return <div className="searchHeader">
    <SearchHeaderViewLeft onClickRecommend={onClickRecommend}/>
    <MyPageButton />
  </div>
}

export default SearchHeaderView

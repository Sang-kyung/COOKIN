import React from 'react';
import {Link, useHistory} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'

// view
import MainHeaderView from '../Components/Views/MainHeaderView';
import SearchView from '../Components/Views/SearchView';

import { deleteFirstCity, deleteSecondCity, deleteThirdCity,deleteFourthCity,} from '../reducers/searchCity';
import * as SearchMap from '../Components/Views/SearchMap'

const Home = () => {
  const dispatch = useDispatch();
  dispatch(deleteFirstCity());
  dispatch(deleteSecondCity());
  dispatch(deleteThirdCity());
  dispatch(deleteFourthCity());
  return <div>
    <MainHeaderView />
    <SearchView />
  </div>
}

export default Home

import React from 'react';
import {Link, useHistory} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'

// view
import MainHeaderView from '../Components/Views/MainHeaderView';
import SearchView from '../Components/Views/SearchView';
import QuestionView from '../Components/Views/QuestionView';

import { deleteFirstCity, deleteSecondCity, deleteThirdCity,deleteFourthCity,} from '../reducers/searchCity';
import * as SearchMap from '../Components/Views/SearchMap'

const Home = () => {
  return <div>
    <MainHeaderView />
    <SearchView />
    <QuestionView />
  </div>
}

export default Home

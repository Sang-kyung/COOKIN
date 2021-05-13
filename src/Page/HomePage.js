import React from 'react';
import {Link, useHistory} from 'react-router-dom';
import { useSelector } from 'react-redux'

// view
import MainHeaderView from '../Components/MainHeaderView';
import SearchView from '../Components/SearchView';

const Home = () => {

  return <div>
    <MainHeaderView />
    <SearchView />
  </div>
}

export default Home

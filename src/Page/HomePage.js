import React from 'react';
import {Link, useHistory} from 'react-router-dom';
import { useSelector } from 'react-redux'

// view
import MainHeaderView from '../Components/Views/MainHeaderView';
import SearchView from '../Components/Views/SearchView';


const Home = () => {

  return <div>
    <MainHeaderView />
    <SearchView />
  </div>
}

export default Home

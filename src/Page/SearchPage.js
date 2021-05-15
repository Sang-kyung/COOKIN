import React from 'react';
import {Link, useHistory} from 'react-router-dom';
import { useSelector } from 'react-redux'
<<<<<<< HEAD
import MapContainer from '../Components/Views/SearchMap';
import MainHeaderView from '../Components/Views/MainHeaderView';
=======
import MapContainer from '../Components/SearchMap';
import SearchHeaderView from '../Components/SearchHeaderView';
import ListMapView from '../Components/ListMapView';
>>>>>>> acc706cdcbf8583d73f864aa96718c32523173e2
import './SearchPage.css'
const SearchPage = () => {

  return <div>
    <SearchHeaderView />
    <div id="leftBox">
      <div>
        <ListMapView />
      </div>
      <div>
        <ListMapView />
      </div>
    </div>
    <div id="rightBox">
      <MapContainer />
    </div>

  </div>
}

export default SearchPage

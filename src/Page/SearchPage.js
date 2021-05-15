import React from 'react';
import {Link, useHistory} from 'react-router-dom';
import { useSelector } from 'react-redux'
import MapContainer from '../Components/SearchMap';
import MainHeaderView from '../Components/MainHeaderView';
import ListMapView from '../Components/ListMapView'
import './SearchPage.css'
const SearchPage = () => {

  return <div>
    <MainHeaderView />
    <div id="leftBox">
      <div>
        <ListMapView />
      </div>
      <div>
        <ListMapView />
      </div>
      <div>
        <ListMapView />
      </div>
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

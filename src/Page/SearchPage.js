import React from 'react';
import {Link, useHistory} from 'react-router-dom';
import { useSelector } from 'react-redux'
import MapContainer from '../Components/Views/SearchMap';
import SearchHeaderView from '../Components/Views/SearchHeaderView';
import ListMapView from '../Components/Views/ListMapView';
import './SearchPage.css'
const SearchPage = () => {

  return <div>
    <SearchHeaderView />
    <div id="leftBox">
      <div id="recommend">
        Recommended place is ....
      </div>
      <div id="ListMapView">
        <div>
          <ListMapView />
        </div>
        <div>
          <ListMapView />
        </div>
      </div>  
    </div>
    <div id="rightBox">
      <MapContainer />
    </div>

  </div>
}

export default SearchPage

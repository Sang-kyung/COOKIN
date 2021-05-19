import React from 'react';
import {Link, useHistory} from 'react-router-dom';
import { useSelector } from 'react-redux'
import MapContainer from '../Components/Views/SearchMap';
import SearchHeaderView from '../Components/Views/SearchHeaderView';
import ListMapView from '../Components/Views/ListMapView';
import './SearchPage.css'
const SearchPage = () => {
  const recommendedPlace = useSelector((state:any) => state.searchCity.recommendedPlace);
  var recommendedPlaceDisplay = '...';
  return <div>
    <SearchHeaderView />
    <div id="leftBox">
      <div id="recommend">
        Recommended place is  {recommendedPlace}
      </div>
      <div id="ListMapView">
        <div className="ListMapView">
          <ListMapView />
        </div>
        <div className="ListMapView">
          <ListMapView />
        </div>
        <div className="ListMapView">
          <ListMapView />
        </div>
        <div className="ListMapView">
          <ListMapView />
        </div>
        <div className="ListMapView">
          <ListMapView />
        </div>
        <div className="ListMapView">
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

import React from 'react';
import {Link, useHistory} from 'react-router-dom';
import { useSelector } from 'react-redux'
import MapContainer from '../Components/SearchMap';
import './SearchPage.css'
const SearchPage = () => {

  return <div>
    <div id="leftBox"></div>
    <div id="rightBox">
      <MapContainer />
    </div>

  </div>
}

export default SearchPage

import React, { useState, useEffect } from 'react';
import {Link, useHistory} from 'react-router-dom';
import { useSelector } from 'react-redux'
import MapContainer from '../Components/Views/SearchMap';
import SearchHeaderView from '../Components/Views/SearchHeaderView';
import ListMapView from '../Components/Views/ListMapView';
import './SearchPage.css'
import db from './../firebase';

const SearchPage = () => {
  

  var allRestaurants = db.collection("kitchen_list");

  var query = allRestaurants.where("place", "==", "gangnam");
  console.log(query);


  const [kitchenList, onLoad] = useState({});

  useEffect(() => {
      loadKitchenList();
  });

  const loadKitchenList = () => {
    onLoad(query);
  }

  // load kitchen data from firebase
  /*const loadKitchenList = () => {
      // hard coded -> database loading
      const list = {
        places: [
          {place: "Din Tai Fung", 
          imgUrl: "Dintaifung_1", 
          price: 40000, 
          utensils: [
            {name: "Stove", num: 6},
            {name: "Pan", num: 5},
            {name: "Wok", num: 3},
            {name: "Oven", num: 1},
            {name: "Sink", num: 1}
          ],
          ingredients: ["Bok choy", "Cilantro", "Onion", "Green Onion"]
        }
        ]
      };
      onload(list);
    } */

  return <div>
    <SearchHeaderView />
    <div id="leftBox">
      <div id="recommend">
        Recommended place is ....
      </div>
      <div id="ListMapView">
        <div className="ListMapView">
          {kitchenList.places && kitchenList.places.map((restaurant) => {
            return <ListMapView restaurant={restaurant} />
          })}
        </div>
      </div>  
    </div>
    <div id="rightBox">
      <MapContainer />
    </div>
  </div>
}

export default SearchPage

import React, { useState, useEffect } from 'react';
import { collection, query, where } from "firebase/firestore";
import {Link, useHistory} from 'react-router-dom';
import { useSelector } from 'react-redux'
import MapContainer from '../Components/Views/SearchMap';
import SearchHeaderView from '../Components/Views/SearchHeaderView';
import ListMapView from '../Components/Views/ListMapView';
import './SearchPage.css'
import db from './../firebase';

const SearchPage = () => {
  const recommendedPlace = useSelector((state:any) => state.searchCity.recommendedPlace);
  var recommendedPlaceDisplay = '...';
  switch(recommendedPlace){
    case 'gangnam':{
      recommendedPlaceDisplay = 'Gangnam'
    }
    case 'hongdae':{
      recommendedPlaceDisplay = 'Hongdae'
    }
    case 'yeoyido':{
      recommendedPlaceDisplay = 'Yeouido'
    }
    case 'jonglo':{
      recommendedPlaceDisplay = 'Jonglo'
    }
  }
  
  const [kitchenList, onLoad] = useState([]);
  var kitchen_list = [];

  db.collection("kitchen_list").where("place", "==", "Gangnam")
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        kitchen_list.push(doc.data());
      });
    });

  useEffect(() => {
      loadKitchenList();
  });

  const loadKitchenList = () => {
    onLoad(kitchen_list);
    console.log(kitchen_list);
  }

  /* hardcoded eg
  const loadKitchenList = () => {
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
        Recommended place is {recommendedPlaceDisplay}
      </div>
      <div id="ListMapView">
        <div className="ListMapView">
          {kitchenList.map((restaurant) => {
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

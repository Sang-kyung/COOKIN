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
  
  const [kitchenList, setKitchenList] = useState([]);
  var kitchen_list = [];

  const fetchData = (() => {
    db.collection("kitchen_list")
    .get()
    .then(query => {
        query.forEach((doc) => {
          if (doc.data().place == "Gangnam") {
            kitchen_list.push(doc.data());
            console.log(kitchen_list);
            setKitchenList(kitchen_list);
          }
        })}
    );
  });
/*
// Select the node that will be observed for mutations
const targetNode = document.getElementById("recommend");

// Callback function to execute when mutations are observed
const callback = function(mutationsList, observer) {
    // Use traditional 'for loops' for IE 11
    for(const mutation of mutationsList) {
        if (mutation.type === 'characterData') {
            fetchData();
            document.getElementsByClassName("ListMapView").style.visibility = "none";
        }
    }
};

// Create an observer instance linked to the callback function
const observer = new MutationObserver(callback);

// Start observing the target node for configured mutations
observer.observe(targetNode, {CharacterData: true});
*/
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
      setKitchenList(places);
    } */
  
  return <div>
          <SearchHeaderView />
          <div id="leftBox">
            <div id="recommend">
              Recommended place is {recommendedPlaceDisplay}
            </div>
            <div id="ListMapView">
              <div className="ListMapView">
                {kitchenList.map((kitchen) => {
                    return <ListMapView kitchen={kitchen} />
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

import React, { useState, useEffect } from 'react';
import { collection, query, where } from "firebase/firestore";
import {Link, useHistory} from 'react-router-dom';
import { useSelector } from 'react-redux'
import ReactDOM from 'react-dom';
import MapContainer from '../Components/Views/SearchMap';
import SearchHeaderView from '../Components/Views/SearchHeaderView';
import ListMapView from '../Components/Views/ListMapView';
import './SearchPage.css'
import db from './../firebase';

const SearchPage = () => {
  const recommendedPlace = useSelector((state) => state.searchCity.recommendedPlace);

  const [kitchenList, onLoad] = useState([]);

  useEffect(() => {
    loadKitchenInfo();
  }, []);

  const loadKitchenInfo = () => {
    var kitchen_list = []
    db.collection("kitchen_list")
    .get()
    .then(query => {
        query.forEach((doc) => {
          if (doc.data().place === recommendedPlace) {
            kitchen_list.push(doc.data());
          }
          else {
            kitchen_list = [];
            
          }
        })
      onLoad(kitchen_list);  
    });
  }

  return <div>
          <SearchHeaderView />
          <div className="leftBox">
            <div id="recommend">
              Recommended place is {recommendedPlace}
            </div>
            <button type="button" onClick={loadKitchenInfo}>fetch</button>
            <div id="ListMapView">
              <div class="ListMapView">
                {kitchenList && kitchenList.map((items) => {
                    return <ListMapView kitchen={items} />
                  })}
              </div>  
            </div>  
          </div>
          <div className="rightBox">
            <MapContainer />
          </div>
        </div>
 /* return <div>
    <SearchHeaderView />
    <div className="leftBox">
      <div>leftbox</div>
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
    <div className="rightBox">
      <MapContainer />
    </div>

  </div>*/
}

export default SearchPage

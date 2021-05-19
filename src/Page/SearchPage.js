import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux'
import MapContainer from '../Components/Views/SearchMap';
import SearchHeaderView from '../Components/Views/SearchHeaderView';
import ListMapView from '../Components/Views/ListMapView';
import './SearchPage.css'
import db from './../firebase';

const SearchPage = () => {

  const [kitchensInfo, onLoad] = useState([]);
  const recommendedPlace = useSelector((state) => state.searchCity.recommendedPlace);

  useEffect(() => {
    // Update the document title using the browser API
    loadKitchenInfo();
  }, []);

  const loadKitchenInfo = () => {
    let kitchens = [];
    db.collection("kitchen_list")
    .get()
    .then(query => {
      query.forEach((doc) => {
        if (doc.data().place === recommendedPlace) {
          kitchens.push(doc.data())
        }
      })
      onLoad(kitchens);
    })
  } 

  return <div>
          <SearchHeaderView />
          <div className="leftBox">
            <div id="recommend">
              Recommended place is {recommendedPlace}
            </div>
            <button type="button" onClick={loadKitchenInfo}>fetch</button>
            <div id="ListMapView">          
                {kitchensInfo && kitchensInfo.map((item, index) => {
                  return <ListMapView key={index} kitchen={item}/>
                })}
            </div>  
          </div>
          <div className="rightBox">
            <MapContainer />
          </div>
        </div>
}

export default SearchPage


  // const fetchData = (() => {
  //   db.collection("kitchen_list")
  //   .get()
  //   .then(query => {
  //       query.forEach((doc) => {
  //         if (doc.data().place === "Gangnam") {
  //           var utensil = [];
  //           var i = 0;
  //           for (i=0;i<doc.data().utensils.length;i++) {
  //             utensil.push(doc.data().utensils);
  //           }
  //           //var kitchen = {name: doc.data().name, img: doc.data().img, ingredients: doc.data().ingredients, price: doc.data().price, utensils: doc.data().utensils};
  //           var element = <div className="ListMapView"> <ListMapView kitchen= {{name: doc.data().name, img: doc.data().img, ingredients: doc.data().ingredients, price: doc.data().price, /*utensils: doc.data().utensils*/}} /> </div>;
  //           ReactDOM.render(element, document.getElementById('ListMapView'));
  //           console.log(element)
  //         }
  //       })}
  //   );
  // });

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
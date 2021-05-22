import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import MapContainer from '../Components/Views/SearchMap';
import SearchHeaderView from '../Components/Views/SearchHeaderView';
import ListMapView from '../Components/Views/ListMapView';
import { setRecommendedPlace } from './../reducers/searchCity';
import './SearchPage.css'
import * as SearchMap from '../Components/Views/SearchMap'
import db from './../firebase';

const SearchPage = () => {
  const [kitchensInfo, onLoad] = useState([]);
  const recommendedPlace = useSelector((state) => state.searchCity.recommendedPlace);
  var localRecommmended = '';
  const firstCity = useSelector((state) => state.searchCity.firstCity);
  const secondCity = useSelector((state) => state.searchCity.secondCity);
  const thirdCity = useSelector((state) => state.searchCity.thirdCity);
  const fourthCity = useSelector((state) => state.searchCity.fourthCity);
  const firstCoord = useSelector((state) => state.searchCity.firstCityCoord);
  const secondCoord = useSelector((state) => state.searchCity.secondCityCoord);
  const thirdCoord = useSelector((state) => state.searchCity.thirdCityCoord);
  const fourthCoord = useSelector((state) => state.searchCity.fourthCityCoord);
  const cities = useSelector((state) => state.searchCity);
  const gangnamCoord = {x : 37.49790442354252, y: 127.02801745530111};
  const hongdaeCoord = {x : 37.55716905256646, y:126.92429475166031};
  const jongloCoord = {x: 37.572251494413585,y: 126.98713159681843};
  const yeoyidoCoord = {x: 37.52209681000769, y:126.92420114948074};
  const dispatch = useDispatch();
  const history = useHistory();
  const getMinimum = (gn, hd, jl, yd, sd) => {
    switch (sd){
      case (gn):{
        console.log('gangnam');
        return {location:'Gangnam',
        coord: gangnamCoord};

      }
      case (hd):{
        console.log('hongdae');
        return {location:'Hongdae', 
        coord: hongdaeCoord};

      }
      case (yd):{
        console.log('yeoyido');
        return {location: 'Yeouido', 
        coord: yeoyidoCoord};

      }
      case (jl):{
        console.log('jonglo');
        return {location:'Jonglo', 
        coord: jongloCoord};

      } 
    }
  }

  const getRecommendation = () => {
    if(firstCoord == '-'){
      alert('You need to input at least one city');
    }
    else{
      console.log(cities);
    var count = 0;
    var x_coord = 0;
    var y_coord = 0;
    var nearestPlace = '';
    var nearestDistance = 99999;
    var nearestCoord;
    if(firstCoord != '-'){
      count = 1;
      x_coord += firstCoord.Ma;
      y_coord += firstCoord.La;
      console.log(x_coord, y_coord);
      if(secondCoord != '-'){
        count = 2;
        x_coord += secondCoord.Ma;
        y_coord += secondCoord.La;
        console.log(x_coord, y_coord);
        if(thirdCoord != '-'){
          count = 3;
          x_coord += thirdCoord.Ma;
          y_coord += thirdCoord.La;
          console.log(x_coord, y_coord);
          if(fourthCoord != '-'){
            count = 4
            x_coord += fourthCoord.Ma;
            y_coord += fourthCoord.La;
            console.log(x_coord, y_coord);
          }
        }
      }
    }
    x_coord = x_coord/count;
    y_coord = y_coord/count;
    console.log(x_coord, y_coord);
    var gangnamDistance = parseInt(Math.sqrt(Math.pow(gangnamCoord.x - x_coord,2)+Math.pow(gangnamCoord.y - y_coord, 2))*10000);
    var hongdaeDistance = parseInt(Math.sqrt(Math.pow(hongdaeCoord.x - x_coord,2)+Math.pow(hongdaeCoord.y - y_coord, 2))*10000);
    var jongloDistance = parseInt(Math.sqrt(Math.pow(jongloCoord.x - x_coord,2)+Math.pow(jongloCoord.y - y_coord, 2))*10000);
    var yeoyidoDistance = parseInt(Math.sqrt(Math.pow(yeoyidoCoord.x - x_coord,2)+Math.pow(yeoyidoCoord.y - y_coord, 2))*10000);
    const smallestDistance = Math.min(gangnamDistance, hongdaeDistance, jongloDistance, yeoyidoDistance);
    console.log('gn',gangnamDistance, 'hd',hongdaeDistance,'jl', jongloDistance,'yd', yeoyidoDistance, smallestDistance);
    var minInfo = getMinimum(gangnamDistance, hongdaeDistance, jongloDistance, yeoyidoDistance, smallestDistance);
    nearestPlace = minInfo.location;
    nearestCoord = minInfo.coord;
    console.log(nearestCoord);
    SearchMap.setMapCenter(nearestCoord.x,nearestCoord.y);
    //SearchMap.setMapCenter(x_coord,y_coord);
    SearchMap.setMapZoom(4);
    dispatch(setRecommendedPlace(nearestPlace));
    localRecommmended = nearestPlace;
    }
  }  

  const loadKitchenInfo = () => {
    var kitchens = [];
    db.collection("kitchen_list")
    .get()
    .then(query => {
      query.forEach((doc) => {
        if (doc.data().place === localRecommmended) {
          kitchens.push(doc.data())
        }
      })
      onLoad(kitchens);
    })
  } 

  const clickfunction = function() {
    getRecommendation();
    //setTimeout(function(){loadKitchenInfo()},500);
    loadKitchenInfo()
    if(firstCity== "-"){
      document.getElementById("recommend").style.visibility = "hidden";
    }
    else{
      document.getElementById("recommend").style.visibility = "visible";
    }
  }

  useEffect(() => {
    if(recommendedPlace!= ". . ."){
      console.log(recommendedPlace);
      clickfunction();
    }
    else{
      console.log("it is this")
    }
  }, [])
  
  return <div>
          <SearchHeaderView />
          <div className="leftBox">
            <div id="recommend">
              Recommended place is <b>{recommendedPlace}</b>
            </div>
            <div id="ListMapView">          
                {kitchensInfo && kitchensInfo.map((item, index) => {
                  return <ListMapView class="ListMapView" key={index} kitchen={item}/>
                })}
            </div>
            <button className="fetchButton" type="button" onClick={(e) => {clickfunction()}}>fetch</button>
          </div>
          <div className="rightBox">
            <MapContainer />
          </div>
        </div>
}

export default SearchPage
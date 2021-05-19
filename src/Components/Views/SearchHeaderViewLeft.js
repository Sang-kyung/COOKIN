import React from 'react';
import './HeaderView.css'
import HomePageButton from '../Buttons/homePageButton';
import { Route, Link, Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { deleteFirstCity, setFirstCity,deleteSecondCity, setSecondCity,deleteThirdCity, setThirdCity,deleteFourthCity, setFourthCity, setFirstCoord, setSecondCoord, setThirdCoord, setFourthCoord, setRecommendedPlace } from '../../reducers/searchCity';
import * as SearchMap from './SearchMap'


const SearchHeaderViewLeft = () => {
  const firstCity = useSelector((state:any) => state.searchCity.firstCity);
  const secondCity = useSelector((state:any) => state.searchCity.secondCity);
  const thirdCity = useSelector((state:any) => state.searchCity.thirdCity);
  const fourthCity = useSelector((state:any) => state.searchCity.fourthCity);
  const firstCoord = useSelector((state:any) => state.searchCity.firstCityCoord);
  const secondCoord = useSelector((state:any) => state.searchCity.secondCityCoord);
  const thirdCoord = useSelector((state:any) => state.searchCity.thirdCityCoord);
  const fourthCoord = useSelector((state:any) => state.searchCity.fourthCityCoord);
  const cities = useSelector((state:any) => state.searchCity);
  if(firstCity != '-' && firstCoord =='-'){
    setTimeout(function(){dispatch(setFirstCoord(SearchMap.getMapCenter()))},500);
  }
  const gangnamCoord = {x : 37.49790442354252, y: 127.02801745530111};
  const hongdaeCoord = {x : 37.55716905256646, y:126.92429475166031};
  const jongloCoord = {x: 37.572251494413585,y: 126.98713159681843};
  const yeoyidoCoord = {x: 37.52209681000769, y:126.92420114948074};
  const dispatch = useDispatch();
  var currentCoord = 0;
  const updateCity = () => {
    var thisInput = document.getElementById("searchInput");
    var thisInputValue = thisInput.value;
    if(firstCity == '-'){
      dispatch(setFirstCity(thisInputValue));
      SearchMap.searchMapKeyWord(thisInputValue);
      setTimeout(function(){dispatch(setFirstCoord(SearchMap.getMapCenter()))},500);
    }
    else if(secondCity == '-'){
      dispatch(setSecondCity(thisInputValue));
      SearchMap.searchMapKeyWord(thisInputValue);
      setTimeout(function(){dispatch(setSecondCoord(SearchMap.getMapCenter()))},500);
    }
    else if(thirdCity == '-'){
      dispatch(setThirdCity(thisInputValue));
      SearchMap.searchMapKeyWord(thisInputValue);
      setTimeout(function(){dispatch(setThirdCoord(SearchMap.getMapCenter()))},500);
    }
    else if(fourthCity == '-'){
      dispatch(setFourthCity(thisInputValue));
      SearchMap.searchMapKeyWord(thisInputValue);
      setTimeout(function(){dispatch(setFourthCoord(SearchMap.getMapCenter()))},500);
    }
    setTimeout(function(){console.log(SearchMap.getMapCenter())}, 500);
    console.log(firstCoord);
    thisInput.value = "";
    
    //SearchMap.setMapCenter(35.166668,129.066666);
    
    //dispatch(deleteFirstCity())
  }
  const deleteCity = () => {
    if(fourthCity != '-'){
      dispatch(deleteFourthCity())
    }
    else if (thirdCity != '-'){
      dispatch(deleteThirdCity())
    }
    else if (secondCity != '-'){
      dispatch(deleteSecondCity())
    }
    else if (firstCity != '-'){
      dispatch(deleteFirstCity())
    }
  }

  const getRecommendation = () => {
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
    var currentDistance = Math.sqrt(Math.pow(gangnamCoord.x - x_coord,2)+Math.pow(gangnamCoord.y - y_coord, 2));
    console.log('gangnam', currentDistance);
    if(currentDistance<nearestDistance){
      nearestDistance = currentDistance;
      nearestPlace = 'gangnam';
      nearestCoord = gangnamCoord;
    }
    var currentDistance = Math.sqrt(Math.pow(hongdaeCoord.x - x_coord,2)+Math.pow(hongdaeCoord.y - y_coord, 2));
    console.log('hongdae', currentDistance);
    if(currentDistance<nearestDistance){
      nearestDistance = currentDistance;
      nearestPlace = 'hongdae';
      nearestCoord = hongdaeCoord;
    }
    var currentDistance = Math.sqrt(Math.pow(jongloCoord.x - x_coord,2)+Math.pow(jongloCoord.y - y_coord, 2));
    console.log('jonglo', currentDistance);
    if(currentDistance<nearestDistance){
      nearestDistance = currentDistance;
      nearestPlace = 'jonglo';
      nearestCoord = jongloCoord;
    }
    var currentDistance = Math.sqrt(Math.pow(yeoyidoCoord.x - x_coord,2)+Math.pow(yeoyidoCoord.y - y_coord, 2));
    console.log('yeoyido', currentDistance);
    if(currentDistance<nearestDistance){
      nearestDistance = currentDistance;
      nearestPlace = 'yeoyido';
      nearestCoord = yeoyidoCoord;
    }
    console.log(nearestCoord);
    SearchMap.setMapCenter(nearestCoord.x,nearestCoord.y);
    //SearchMap.setMapCenter(x_coord,y_coord);
    SearchMap.setMapZoom(4);
    dispatch(setRecommendedPlace(nearestPlace));
  }
  var this_div = 
  <div id= "HeaderLeft">
      <div style={{height: "100%", width:'100%', backgroundColor:'black', float: 'left'}}>
        <div style={{height: "100%",  backgroundColor:'purple', float: 'left'}}>
        <HomePageButton />
        </div>
        <div style={{height: "50%", width:'100%', backgroundColor:'orange'}}>
          {firstCity}
          {secondCity}
          {thirdCity}
          {fourthCity}
          
        </div>
        <div style={{height: "50%", width:'100%', backgroundColor:'red'}}>
          <input id="searchInput" style={{height: "80%", width: '30%'}} onKeyDown = {function(e){
      if(e.keyCode == 13){
        updateCity();
      }
    }}></input>
          <button style= {{height:'80%', width: '5%'}} onClick={(e:any) => {updateCity()}}></button>
          <button style= {{height:'80%', width: '5%'}} onClick={(e:any) => {deleteCity()}}></button>
          <button style= {{height:'80%', width: '5%'}} onClick={(e:any) => {getRecommendation()}}></button>
        </div>
      
      </div>
  </div>
  return this_div
}

export default SearchHeaderViewLeft

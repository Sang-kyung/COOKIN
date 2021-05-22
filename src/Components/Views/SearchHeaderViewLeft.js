import React from 'react';
import './HeaderView.css'
import HomePageButton from '../Buttons/homePageButton';
import SearchResult from './SearchTagItem'
import { useDispatch, useSelector } from 'react-redux'
import { deleteFirstCity, setFirstCity,deleteSecondCity, setSecondCity,deleteThirdCity, setThirdCity,deleteFourthCity, setFourthCity, setFirstCoord, setSecondCoord, setThirdCoord, setFourthCoord, setRecommendedPlace } from '../../reducers/searchCity';
import * as SearchMap from './SearchMap'

import './SearchHeaderViewLeft.css';


const SearchHeaderViewLeft = () => {
  const firstCity = useSelector((state) => state.searchCity.firstCity);
  const secondCity = useSelector((state) => state.searchCity.secondCity);
  const thirdCity = useSelector((state) => state.searchCity.thirdCity);
  const fourthCity = useSelector((state) => state.searchCity.fourthCity);
  const firstCoord = useSelector((state) => state.searchCity.firstCityCoord);
  const secondCoord = useSelector((state) => state.searchCity.secondCityCoord);
  const thirdCoord = useSelector((state) => state.searchCity.thirdCityCoord);
  const fourthCoord = useSelector((state) => state.searchCity.fourthCityCoord);
  const cities = useSelector((state) => state.searchCity);
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
    if(fourthCity!='-'){
      getRecommendation()
    }
    else if(thisInputValue!= ""){
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
      thisInput.value = "";
    }
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

  const deleteFC = () => {
    dispatch(setFirstCity(secondCity))
    dispatch(setFirstCoord(secondCoord))
    dispatch(setSecondCity(thirdCity))
    dispatch(setSecondCoord(thirdCoord))
    dispatch(setThirdCity(fourthCity))
    dispatch(setThirdCoord(fourthCoord))
    dispatch(deleteFourthCity())
  }

  const deleteSC = () => {
    dispatch(setSecondCity(thirdCity))
    dispatch(setSecondCoord(thirdCoord))
    dispatch(setThirdCity(fourthCity))
    dispatch(setThirdCoord(fourthCoord))
    dispatch(deleteFourthCity())
  }
  const deleteTC = () => {
    dispatch(setThirdCity(fourthCity))
    dispatch(setThirdCoord(fourthCoord))
    dispatch(deleteFourthCity())
  }

  const deleteFoC = () => {
    dispatch(deleteFourthCity())
  }


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
    }
    
  }

  // const tagItems = [
  //   {city: "la", func: () => {}},
  //   {city: "la", func: () => {}},
  //   {city: "la", func: () => {}},
  //   {city: "la", func: () => {}}
  // ]

  var this_div = 
    <div className="leftHeaderWrapper">
      <div className="homePageBtnWrapper">
      <HomePageButton />
      </div>
      
      <div className="searchWrapper">
        <div className="tagWrapper">

          {/* {tagItems.map((item, index) => {
            <SearchResult item={item} index={index} />
          })} */}

          <SearchResult item= {{city: firstCity, func: deleteFC}} />
          <SearchResult item= {{city: secondCity, func: deleteSC}} />
          <SearchResult item= {{city: thirdCity, func: deleteTC}} />
          <SearchResult item= {{city: fourthCity, func: deleteFoC}} />

        </div>
        <div className="searchInputWrapper">
          <input id="searchInput" className="searchInput" onKeyDown = {function(e){
            if(e.keyCode == 13){
              updateCity();
            }
          }}></input>
          <button className="plusBtn" onClick={(e) => {updateCity()}}>+</button>
        </div>
      </div>
    
    </div>

  return this_div
}

export default SearchHeaderViewLeft

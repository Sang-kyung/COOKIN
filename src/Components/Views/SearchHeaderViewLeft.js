import React, { useState, useEffect } from 'react';
import './HeaderView.css'
import HomePageButton from '../Buttons/HomePageButton';
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
    if(thisInputValue!= ""){
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
      else if(fourthCity!='-'){
        alert('Please follow COVID19 government regulation');
      }
      thisInput.value = "";
    }
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
        return {location:'Gangnam',
        coord: gangnamCoord};

      }
      case (hd):{
        return {location:'Hongdae', 
        coord: hongdaeCoord};

      }
      case (yd):{
        return {location: 'Yeouido', 
        coord: yeoyidoCoord};

      }
      case (jl):{
        return {location:'Jonglo', 
        coord: jongloCoord};

      } 
    }
  }
  
  useEffect(() => {
    if(firstCity!= "-"){
      SearchMap.searchMapKeyWord(firstCity);
      setTimeout(function(){dispatch(setFirstCoord(SearchMap.getMapCenter()))},500);
    }
  }, [])

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

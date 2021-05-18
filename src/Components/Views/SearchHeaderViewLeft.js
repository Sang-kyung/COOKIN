import React from 'react';
import './HeaderView.css'
import HomePageButton from '../Buttons/homePageButton';
import { Route, Link, Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { deleteFirstCity, setFirstCity,deleteSecondCity, setSecondCity,deleteThirdCity, setThirdCity,deleteFourthCity, setFourthCity } from '../../reducers/searchCity';
import * as SearchMap from './SearchMap'


const SearchHeaderViewLeft = () => {
  const firstCity = useSelector((state:any) => state.searchCity.firstCity);
  const secondCity = useSelector((state:any) => state.searchCity.secondCity);
  const thirdCity = useSelector((state:any) => state.searchCity.thirdCity);
  const fourthCity = useSelector((state:any) => state.searchCity.fourthCity);
  const cities = useSelector((state:any) => state.searchCity);
  const dispatch = useDispatch();
  const updateCity = () => {
    var thisInput = document.getElementById("searchInput")
    var thisInputValue = thisInput.value;
    if(firstCity == '-'){
      dispatch(setFirstCity(thisInputValue));
      SearchMap.searchMapKeyWord(thisInputValue);
    }
    else if(secondCity == '-'){
      dispatch(setSecondCity(thisInputValue));
      SearchMap.searchMapKeyWord(thisInputValue);
    }
    else if(thirdCity == '-'){
      dispatch(setThirdCity(thisInputValue));
      SearchMap.searchMapKeyWord(thisInputValue);
    }
    else if(fourthCity == '-'){
      dispatch(setFourthCity(thisInputValue));
      SearchMap.searchMapKeyWord(thisInputValue);
    }
    console.log(SearchMap.getMapCenter());
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
          <input id="searchInput" style={{height: "80%", width: '30%'}}></input>
          <button style= {{height:'80%', width: '5%'}} onClick={(e:any) => {updateCity()}}></button>
          <button style= {{height:'80%', width: '5%'}} onClick={(e:any) => {deleteCity()}}></button>
        </div>
      
      </div>
  </div>
  return this_div
}

export default SearchHeaderViewLeft

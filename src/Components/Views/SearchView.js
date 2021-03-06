import React from 'react';
import './SearchView.css'
import * as SearchMap from './SearchMap'
import { deleteFirstCity, deleteFourthCity, deleteSecondCity, deleteThirdCity, setFirstCity, setRecommendedPlace} from '../../reducers/searchCity';
import { useDispatch} from 'react-redux'
import { useHistory } from 'react-router-dom';
// import QuestionButton from '../Buttons/QuestionButton';

const SearchView = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const clickfunctionReco = () => {
    var input = document.getElementById("input").value;
    if(input!= ""){
      dispatch(deleteFirstCity());
      dispatch(setFirstCity(input));
      dispatch(deleteSecondCity());
      dispatch(deleteThirdCity());
      dispatch(deleteFourthCity());
      dispatch(setRecommendedPlace(". . ."))
      SearchMap.searchMapKeyWord(input);
      history.push({
        pathname:"/search",
        state:{
            data: '1'
         }
      });
    }
  }  
  
  const clickfunctionAdd = () => {
    var input = document.getElementById("input").value;
    if(input!= ""){
      dispatch(deleteFirstCity());
      dispatch(setFirstCity(input));
      dispatch(deleteSecondCity());
      dispatch(deleteThirdCity());
      dispatch(deleteFourthCity());
      dispatch(setRecommendedPlace(". . ."))
      SearchMap.searchMapKeyWord(input);
      history.push({
        pathname:"/search",
        state:{
            data: '0'
         }
      });
    }
  }  

  var this_div = 
  <div id="mainContainer">
    <div className= 'inputWrapper' >
      <input type="text" id='input' placeholder="Add your locations" onKeyDown = {function(e){
        if(e.keyCode == 13){
          clickfunctionAdd();
        }
      }}>
      </input>
    </div>
    <div className="btn_wrapper">
      <div onClick={clickfunctionAdd} className="add_btn">
        <img  className="add_img" src={require(`../../img/Buttons/plus.png`).default} />
        <div className="btnText">Add Location</div>
      </div>
      <div onClick={clickfunctionReco} className="recommend_btn">
        <img  className="recommend_img" src={require(`../../img/Buttons/recommend.png`).default} />
        <div className="btnText">Recommend Me</div>
      </div>
    </div>
  </div>
  return this_div
}

export default SearchView

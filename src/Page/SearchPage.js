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
    db.collection("kitchen_list").where("place", "==", "Gangnam")
    .get()
    .then(query => {
        query.forEach((doc) => {
          kitchen_list.push(doc.data());
          console.log(kitchen_list);
        })}
    );
  });

//여기서부터 감시코드
  const targetNode = document.getElementById('recommend');
 
  // 변화 감지 설정입니다.
  const config = {characterData: true};
  // 옵션 설명
  //  - childList : 대상 노드의 하위 요소가 추가되거나 제거되는 것을 감지합니다.
  //  - attributes : 대상 노드의 속성 변화를 감지합니다.
  //  - characterData : 대상 노드의 데이터 변화를 감지합니다.
  //  - subtree : 대상의 하위의 하위의 요소들까지의 변화를 감지합니다.
  //  - attributeOldValue : 변화 이전의 속성 값을 기록합니다.
  //  - characterDataOldValue : 변화 이전의 데이터 값을 기록합니다.
  //  - attributeFilter : 모든 속성의 변화를 감지할 필요가 없는 경우 속성을 배열로 설정합니다.
   
  // 변화가 감지될 때 실행할 콜백 함수
  const callback = function(mutationsList, observer) {
    for(let mutation of mutationsList) {
      if (mutation.type === 'characterData') {
        // 자식 노드가 추가되거나 제거되었습니다.
        fetchData();
        setKitchenList(kitchen_list);
        document.getElementsByClassName("ListMapView").style.visibility = "none";
      }
    }
  };
   
  // 콜백 함수가 연결된 옵저버 인스턴스를 생성합니다.
  const observer = new MutationObserver(callback);
   
  // 선택한 노드의 변화 감지를 시작합니다.
  observer.observe(targetNode, config);

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

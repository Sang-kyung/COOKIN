import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import {setFirstCoord} from '../../reducers/searchCity';
import db from './../../firebase';
import './SearchMap.css'
const { kakao } = window;



var map;
var center;

export function setMapCenter(Lat, Lng) {
    var moveLatLon = new kakao.maps.LatLng(Lat, Lng);
    map.setCenter(moveLatLon);
}

export function setMapZoom(level) {
    map.setLevel(level);
}


export function searchMapKeyWord(keyword) {
    var ps = new kakao.maps.services.Places(); 
    ps.keywordSearch(keyword, placesSearchCB); 
}

export function getMapCenter() {
    return center;
}

export function initializeMarkers(){
    db.collection("kitchen_list")
    .get()
    .then(query => {
      query.forEach((doc) => {
            var kitchenName = doc.data().name
            console.log("<div>"+kitchenName)
            var kitchenLat = doc.data().lat
            var kitchenLong = doc.data().long
            var latlng = new kakao.maps.LatLng(kitchenLat, kitchenLong);
            console.log(doc.data())
            var marker = new kakao.maps.Marker({
                map: map, // 마커를 표시할 지도
                position: latlng // 마커의 위치
            });
            var infowindow = new kakao.maps.InfoWindow({
                content: "<div>"+kitchenName+"</div>" // 인포윈도우에 표시할 내용
            });
            kakao.maps.event.addListener(marker, 'mouseover', makeOverListener(map, marker, infowindow));
            kakao.maps.event.addListener(marker, 'mouseout', makeOutListener(infowindow));
        
      })
    })
    
}

function makeOverListener(map, marker, infowindow) {
    return function() {
        infowindow.open(map, marker);
    };
}

// 인포윈도우를 닫는 클로저를 만드는 함수입니다 
function makeOutListener(infowindow) {
    return function() {
        infowindow.close();
    };
}

function placesSearchCB (data, status, pagination) {
    if (status === kakao.maps.services.Status.OK) {

        // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
        // LatLngBounds 객체에 좌표를 추가합니다
        var bounds = new kakao.maps.LatLngBounds();

        for (var i=0; i<data.length; i++) {
            bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
        }       
        // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
        map.setBounds(bounds);
        center = map.getCenter(); 
        console.log(center);
    } 
}



const MapContainer = () => {
    const firstCity = useSelector((state) => state.searchCity.firstCity);
    useEffect(() => {
        const container = document.getElementById('myMap');
		const options = {
			center: new kakao.maps.LatLng(33.450701, 126.570667),
			level: 3
		};
        map = new kakao.maps.Map(container, options);
        searchMapKeyWord(firstCity);
        initializeMarkers();
        container.style.width = 'calc(100%)';
        container.style.height = 'calc(100%)'; 
        
        map.relayout();
    }, []);
    const dispatch = useDispatch();
    setTimeout(function(){dispatch(setFirstCoord(getMapCenter()))},500);
    
    return (
        <div id='myMap' style={{width: '96%', margin: '0 2%'}}></div>
    );
}

export default MapContainer; 
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
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
    }, []);

    return (
        <div id='myMap' style={{width: '96%', height: '1000px', margin: '0 2%', overflow: 'visible'}}></div>
    );
}

export default MapContainer; 
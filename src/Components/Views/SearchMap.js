import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import db from './../../firebase';
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
    var markerPosition  = new kakao.maps.LatLng(37.49852839174016, 127.02573024214128); 
    var positions = [];

    db.collection("kitchen_list")
    .get()
    .then(query => {
      query.forEach((doc) => {
            console.log("dintaifung checked")
            var kitchenName = doc.data().name
            console.log("<div>"+kitchenName)
            var kitchenLat = doc.data().lat
            var kitchenLong = doc.data().long
            var latlng = new kakao.maps.LatLng(kitchenLat, kitchenLong);
            // positions.push(
            //     {
            //         content: '<div>hello</div>', 
            //         latlng: new kakao.maps.LatLng(33.450705, 126.570677)
            //     }
            //    )
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
    
    console.log("here it is")
    console.log(positions)
    for (var i = 0; i < positions.length; i ++) {
        // 마커를 생성합니다
        var marker = new kakao.maps.Marker({
            map: map, // 마커를 표시할 지도
            position: positions[i].latlng // 마커의 위치
        });
        map.setCenter(positions[i].latlng);
    
        // 마커에 표시할 인포윈도우를 생성합니다 
        var infowindow = new kakao.maps.InfoWindow({
            content: positions[i].content // 인포윈도우에 표시할 내용
        });
    
        // 마커에 mouseover 이벤트와 mouseout 이벤트를 등록합니다
        // 이벤트 리스너로는 클로저를 만들어 등록합니다 
        // for문에서 클로저를 만들어 주지 않으면 마지막 마커에만 이벤트가 등록됩니다

    }
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
    }, []);

    return (
        <div id='myMap' style={{width: '96%', height: '80vh', margin: '0 2%', overflow: 'visible'}}></div>
    );
}

export default MapContainer; 
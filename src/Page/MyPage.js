import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import React, { useState, useEffect } from 'react';
import db from '../firebase';

// view
import MyinformationView from '../Components/Views/MyinformationView';
import MyreservationView from '../Components/Views/MyreservationView';
import MainHeaderViewLeft from '../Components/Views/MainHeaderViewLeft';

const MyPage = () => {
  const history = useHistory();
  const user = useSelector(state => state.user);

  const [reservationInfo, onLoad] = useState([]);
  const [show, onLoadUpdate] = useState(false);

  useEffect(() => {
      fetchReservationInfo();
  }, []);

  const fetchReservationInfo = () => {
    console.log("fetchReservationInfo");
    db.collection('reservation_list')
    .doc(user.phone)
    .get()
    .then((doc) => {
      console.log(user.phone);
      console.log(doc);
      if (doc.exists) {
        console.log("doc.exists");
        onLoad(doc.data().reservations);
        onLoadUpdate(true);
        console.log('aa');
      }
      else{
        console.log('bb');
      }
    })
  }

  console.log("return go");

  return <div>
              {user.isloggedIn 
              ?
              (<div>
                { show &&
                  <div>
                    <MainHeaderViewLeft />
                    <MyinformationView name={user.name} res_num={reservationInfo.length} Upcoming={3}/>
                    <MyreservationView reservations={reservationInfo} />
                  </div>
                }
              </div>)
              :
              (alert('You did not log in.') || history.push("/"))
              }         
          </div>
}

export default MyPage
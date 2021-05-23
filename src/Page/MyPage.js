import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import React, { useState, useEffect } from 'react';
import db from '../firebase';
import './MyPage.css';

// view
import MyinformationView from '../Components/Views/MyinformationView';
import MyreservationView from '../Components/Views/MyreservationView';
import HomePageButton from '../Components/Buttons/HomePageButton';

const MyPage = () => {
  const history = useHistory();
  const user = useSelector(state => state.user);

  const [reservationInfo, onLoad] = useState({});
  const [show, onLoadUpdate] = useState(false);

  useEffect(() => {
    user.isloggedIn && fetchReservationInfo();
  }, []);

  const fetchReservationInfo = () => {
    console.log("fetchReservationInfo");
    db.collection('reservation_list')
    .doc(user.phone).get()
    .then((doc) => {
      let ups_list  = []
      let pasts_list = []
      if (doc.exists) {
        doc.data().reservations.map((item) => {
          item.date = new Date(item.date.toDate());
          if(item.date >= new Date()) {
            ups_list.push(item);
          } else {
            pasts_list.push(item);
          }
        });
        onLoad({ups: ups_list, pasts: pasts_list});
        onLoadUpdate(true);
      }
      else{
        onLoad({ups: ups_list, pasts: pasts_list});
        onLoadUpdate(true);
      }
    })
  }
  return (
          <div> 
              {user.isloggedIn 
              ?
              (<div>
                { show &&
                  <div>
                    <div className="headwrapper">
                      <HomePageButton />
                    </div>
                    <MyinformationView name={user.name} res_num={reservationInfo.ups.length + reservationInfo.pasts.length} Upcoming={reservationInfo.ups.length}/>
                    <MyreservationView ups={reservationInfo.ups} pasts={reservationInfo.pasts}/>
                  </div>
                }
              </div>)
              :
              (alert('You did not log in.') || history.push("/"))
              }         
          </div>
  )
}

export default MyPage
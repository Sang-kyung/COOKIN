import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import React, { useState, useEffect } from 'react';
import db from '../firebase';
import './MyPage.css';

// view
import MyinformationView from '../Components/Views/MyinformationView';
import MyreservationView from '../Components/Views/MyreservationView';
import CancelModalView from '../Components/Views/CancelModalView';
import HomePageButton from '../Components/Buttons/HomePageButton';

const MyPage = () => {
  const history = useHistory();
  const user = useSelector(state => state.user);

  const [reservationInfo, onLoad] = useState({});
  const [show, onLoadUpdate] = useState(false);
  const [cancel, setCancel] = useState(false);

  useEffect(() => {
    user.isloggedIn && fetchReservationInfo();
  }, []);

  const handleCancel = () => {
    setCancel(true);
  }

  const onCloseModal = () => {
    setCancel(false);
  }

  const fetchReservationInfo = () => {
    db.collection('reservation_list')
    .doc(user.phone).get()
    .then((doc) => {
      let ups_list  = []
      let pasts_list = []
      if (doc.exists) {
        doc.data().reservations.map((item) => {
          item.date = new Date(item.date.toDate());
          var day = item.date.getDate();
          var now = new Date();
          if( day > now.getDate() ){
            ups_list.push(item); 
          }
          else if( day == now.getDate() ){
            var time = item.time.split(':', 1);
            time = time[0]
            if ( time > now.getHours() ){
              ups_list.push(item);
            }
            else{
              pasts_list.push(item);
            }
          }
          else {
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
                    <MyreservationView ups={reservationInfo.ups} pasts={reservationInfo.pasts} _cancel={handleCancel}/>
                    { cancel && <CancelModalView onCloseModal={onCloseModal}/> }
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
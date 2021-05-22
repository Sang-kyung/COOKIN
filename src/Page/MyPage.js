import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import React from 'react';

// view
import MyinformationView from '../Components/Views/MyinformationView';
import MyreservationView from '../Components/Views/MyreservationView';
import MainHeaderView from '../Components/Views/MainHeaderView';

import './MyPage.css';

const MyPage = () => {
  const history = useHistory();
  const res = useSelector(state => state.reservation.reservations);
  const isloggedIn = useSelector(state => state.user.isloggedIn);

  var Ups = new Array();
  var Pasts = new Array();
  const now = new Date();

  for( var i = 0; i < res.length; i++ ){
    var item = res[i];
    var date = new Date(item.date);
    date >= now ? (
      Ups.push(item)
    ) : (
      Pasts.push(item)
    )
  }

  var res_num = res.length;
  var Upcoming = Ups.length;

  console.log("res_num, Upcoming, Ups, Pasts");
  console.log(res_num, Upcoming, Ups, Pasts);

  return <div>
            {isloggedIn ? (
              <div className="myPageWrapper">
                <MyinformationView res_num={res_num} Upcoming={Upcoming}/>
                <MyreservationView Ups={Ups} Pasts={Pasts}/>
              </div>
            ) : (
              alert('You did not log in.') || history.push("/")
            )
            }
          </div>
}

export default MyPage
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import React, { useState } from 'react';

// view
import MyinformationView from '../Components/Views/MyinformationView';
import MyreservationView from '../Components/Views/MyreservationView';
import MainHeaderViewLeft from '../Components/Views/MainHeaderViewLeft';

var Ups = new Array();
var Pasts = new Array();

const upsandpasts = (_res, present) => {
  console.log('upsandpasts');
  console.log(_res, present);
  var date = new Date(_res.date);
  date >= present ? (
    Ups.push(_res)
  ) : (
    Pasts.push(_res)
  )
  return;
}

const UpsandPasts = (res) => {
  console.log('UpsandPasts');
  console.log(res);
  const now = new Date();
  res.map((item) => (upsandpasts(item, now)))
  return Ups, Pasts
}

const MyPage = () => {
  const history = useHistory();
  const res = useSelector(state => state.reservation.reservations);
  const isloggedIn = useSelector(state => state.user.isloggedIn);
  const dispatch = useDispatch();
  
  UpsandPasts(res);
  var Upcoming = Ups.length;

  return <div>
            {isloggedIn ? (
              <div>
                  <MainHeaderViewLeft />
                  <MyinformationView Upcoming={Upcoming}/>
                  {/* {condition ? */}
                  <MyreservationView Ups={Ups} Pasts={Pasts}/>
                  {/* :
                  <div>"No reservation"</div>
                } */}
                </div>
            ) : (
              alert('You did not log in.') || history.push("/")
            )
            }
          </div>
}

export default MyPage
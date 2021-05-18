export const ADD_RESERVATION = 'ADD_RESERVATION';
export const PLUSPAST = 'PLUSPAST';

export const reserve = (res) => ({
  type: ADD_RESERVATION,
  payload: res,
});

// export const past = (num) => ({ //mypage오픈할때 쭉 읽어서 Upcoming에서 뺀다.  //Up리스트에서 Past리스트로 이동..  or mypage state로 이미 나눠서 준다.
//   type: PLUSPAST,
//   payload: num,
// });

const initialState = {
  number : 2,
  upcoming : 1,
  reservationsUp: [
    {
      name: "Din Tai Fung",
      date: "2021-05-31",
      options: [
        {name: "Bok choy", amount: "100g"},
        {name: "Cilantro", amount: "50g"}
      ]
    },
  ],
  ReservationsPast: [
    {
      name: "La grillia",
      date: "2021-05-05",
      options: [
        {name: "Onions", amount: "300g"},
        {name: "Green onions", amount: "100g"}
      ]
    },
  ]
}

const reservation = (state = initialState, action) => {
  switch (action.type) {
    case ADD_RESERVATION: {
      return {
        ...state,
        reservationNum : state.number + 1,
        upcoming : state.upcoming + 1,
        resInfo: state.reservationsUp.concat(action.payload),   //push?
      }
    }
    default:
      return state;
  }
};

export default reservation;
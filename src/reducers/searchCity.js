
export const SET_FIRST_CITY = 'SET_FIRST_CITY'
//export const SET_SECOND_CITY = 'SET_SECOND_CITY'
//export const SET_THIRD_CITY = 'SET_THIRD_CITY'
//export const SET_FOURTH_CITY = 'SET_FOURTH_CITY'

export const DELETE_FIRST_CITY = 'DELETE_FIRST_CITY'
//export const DELETE_SECOND_CITY = 'DELETE_SECOND_CITY'
//export const DELETE_THIRD_CITY = 'DELETE_THIRD_CITY'
//export const DELETE_FOURTH_CITY = 'DELETE_FOURTH_CITY'

export const setFirstCity = (firstCity) => ({
  type: SET_FIRST_CITY,
  payload: firstCity
});

export const deleteFirstCity = () => ({
  type: DELETE_FIRST_CITY
});



const initialState = {
  firstCity: 'Gangnam',
	secondCity: null,
  thirdCity:  null,
  fourthCity: null,
}

const searchCity = (state = initialState, action) => {
  switch (action.type) {
    case SET_FIRST_CITY:{
      return {
        ...state,
        firstCity: action.payload
      }
    }

    case DELETE_FIRST_CITY:{
      return {
        ...state,
        firstCity: null
      }
    }

    default:
      return state;
  }
};

export default searchCity;
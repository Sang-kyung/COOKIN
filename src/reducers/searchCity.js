
export const SET_FIRST_CITY = 'SET_FIRST_CITY'
export const SET_SECOND_CITY = 'SET_SECOND_CITY'
export const SET_THIRD_CITY = 'SET_THIRD_CITY'
export const SET_FOURTH_CITY = 'SET_FOURTH_CITY'

export const DELETE_FIRST_CITY = 'DELETE_FIRST_CITY'
export const DELETE_SECOND_CITY = 'DELETE_SECOND_CITY'
export const DELETE_THIRD_CITY = 'DELETE_THIRD_CITY'
export const DELETE_FOURTH_CITY = 'DELETE_FOURTH_CITY'

export const setFirstCity = (firstCity) => ({
  type: SET_FIRST_CITY,
  payload: firstCity
});

export const deleteFirstCity = () => ({
  type: DELETE_FIRST_CITY
});

export const setSecondCity = (secondCity) => ({
  type: SET_SECOND_CITY,
  payload: secondCity
});

export const deleteSecondCity = () => ({
  type: DELETE_SECOND_CITY
});

export const setThirdCity = (thirdCity) => ({
  type: SET_THIRD_CITY,
  payload: thirdCity
});

export const deleteThirdCity = () => ({
  type: DELETE_THIRD_CITY
});

export const setFourthCity = (fourthCity) => ({
  type: SET_FOURTH_CITY,
  payload: fourthCity
});

export const deleteFourthCity = () => ({
  type: DELETE_FOURTH_CITY
});



const initialState = {
  firstCity: '-',
  firstCityCoord: [],
	secondCity: '-',
  secondCityCoord: [],
  thirdCity:  '-',
  thirdCityCoord: [],
  fourthCity: '-',
  fourthCityCoord: [],
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
        firstCity: '-'
      }
    }

    case SET_SECOND_CITY:{
      return {
        ...state,
        secondCity: action.payload
      }
    }

    case DELETE_SECOND_CITY:{
      return {
        ...state,
        secondCity: '-'
      }
    }

    case SET_THIRD_CITY:{
      return {
        ...state,
        thirdCity: action.payload
      }
    }

    case DELETE_THIRD_CITY:{
      return {
        ...state,
        thirdCity: '-'
      }
    }

    case SET_FOURTH_CITY:{
      return {
        ...state,
        fourthCity: action.payload
      }
    }

    case DELETE_FOURTH_CITY:{
      return {
        ...state,
        fourthCity: '-'
      }
    }

    default:
      return state;
  }
};

export default searchCity;
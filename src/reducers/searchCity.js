
export const SET_FIRST_CITY = 'SET_FIRST_CITY'
export const SET_SECOND_CITY = 'SET_SECOND_CITY'
export const SET_THIRD_CITY = 'SET_THIRD_CITY'
export const SET_FOURTH_CITY = 'SET_FOURTH_CITY'
export const SET_FIRST_COORD = 'SET_FIRST_COORD'
export const SET_SECOND_COORD = 'SET_SECOND_COORD'
export const SET_THIRD_COORD = 'SET_THIRD_COORD'
export const SET_FOURTH_COORD = 'SET_FOURTH_COORD'
export const SET_RECOMMENDED_PLACE = 'SET_RECOMMENDED_PLACE'


export const DELETE_FIRST_CITY = 'DELETE_FIRST_CITY'
export const DELETE_SECOND_CITY = 'DELETE_SECOND_CITY'
export const DELETE_THIRD_CITY = 'DELETE_THIRD_CITY'
export const DELETE_FOURTH_CITY = 'DELETE_FOURTH_CITY'
export const DELETE_RECOMMENDED_PLACE = 'DELETE_RECOMMENDED_PLACE'

export const setFirstCity = (firstCity) => ({
  type: SET_FIRST_CITY,
  payload: firstCity
});

export const setFirstCoord = (Coord) => ({
  type: SET_FIRST_COORD,
  payload: Coord
});

export const deleteFirstCity = () => ({
  type: DELETE_FIRST_CITY
});

export const setSecondCity = (secondCity) => ({
  type: SET_SECOND_CITY,
  payload: secondCity
});

export const setSecondCoord = (Coord) => ({
  type: SET_SECOND_COORD,
  payload: Coord
});

export const deleteSecondCity = () => ({
  type: DELETE_SECOND_CITY
});

export const setThirdCity = (thirdCity) => ({
  type: SET_THIRD_CITY,
  payload: thirdCity
});

export const setThirdCoord = (Coord) => ({
  type: SET_THIRD_COORD,
  payload: Coord
});

export const deleteThirdCity = () => ({
  type: DELETE_THIRD_CITY
});

export const setFourthCity = (fourthCity) => ({
  type: SET_FOURTH_CITY,
  payload: fourthCity
});

export const setFourthCoord = (Coord) => ({
  type: SET_FOURTH_COORD,
  payload: Coord
});

export const deleteFourthCity = () => ({
  type: DELETE_FOURTH_CITY
});

export const setRecommendedPlace = (thisPlace) => ({
  type: SET_RECOMMENDED_PLACE,
  payload: thisPlace
})

export const deleteRecommendedPlace = () => ({
  type: DELETE_RECOMMENDED_PLACE
})

const initialState = {
  firstCity: '-',
  firstCityCoord: '-',
	secondCity: '-',
  secondCityCoord: '-',
  thirdCity:  '-',
  thirdCityCoord: '-',
  fourthCity: '-',
  fourthCityCoord: '-',
  recommendedPlace: '-'
}

const searchCity = (state = initialState, action) => {
  switch (action.type) {
    case SET_FIRST_CITY:{
      return {
        ...state,
        firstCity: action.payload
      }
    }

    case SET_FIRST_COORD:{
      return {
        ...state,
        firstCityCoord: action.payload
      }
    }

    case DELETE_FIRST_CITY:{
      return {
        ...state,
        firstCity: '-',
        firstCityCoord : '-'
      }
    }

    case SET_SECOND_CITY:{
      return {
        ...state,
        secondCity: action.payload
      }
    }

    case SET_SECOND_COORD:{
      return {
        ...state,
        secondCityCoord: action.payload
      }
    }

    case DELETE_SECOND_CITY:{
      return {
        ...state,
        secondCity: '-',
        secondCityCoord: '-'
      }
    }

    case SET_THIRD_CITY:{
      return {
        ...state,
        thirdCity: action.payload
      }
    }

    case SET_THIRD_COORD:{
      return {
        ...state,
        thirdCityCoord: action.payload
      }
    }

    case DELETE_THIRD_CITY:{
      return {
        ...state,
        thirdCity: '-',
        thirdCityCoord: '-'
      }
    }

    case SET_FOURTH_CITY:{
      return {
        ...state,
        fourthCity: action.payload
      }
    }

    case SET_FOURTH_COORD:{
      return {
        ...state,
        fourthCityCoord: action.payload
      }
    }

    case DELETE_FOURTH_CITY:{
      return {
        ...state,
        fourthCity: '-',
        fourthCityCoord: '-'
      }
    }

    case SET_RECOMMENDED_PLACE:{
      return {
        ...state,
        recommendedPlace: action.payload
      }
    }

    case DELETE_RECOMMENDED_PLACE:{
      return {
        ...state,
        recommendedPlace: '-'
      }
    }

    default:
      return state;
  }

    
};

export default searchCity;
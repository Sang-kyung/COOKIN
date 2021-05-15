export const SET_JWT_TOKEN = 'SET_JWT_TOKEN'
export const INCREASE = 'INCREASE'
export const SET_CURRENT_CATEGORY_ID = 'SET_CURRENT_CATEGORY_ID';

export const setJwtToken = (jwtToken) => ({
  type: SET_JWT_TOKEN,
  payload: jwtToken,
});

export const setCurrentCategoryId = (id) => ({
  type: SET_CURRENT_CATEGORY_ID,
  payload: id
})

const initialState = {
  jwtToken: null,
	cnt: 0,
  currentCategoryId: 2, //default
  nickname: null,
}

const user = (state = initialState, action) => {
  switch (action.type) {
    case SET_JWT_TOKEN:{
      return {
        ...state,
        jwtToken: action.payload,
      }
    }

    case SET_CURRENT_CATEGORY_ID:{
      return {
        ...state,
        currentCategoryId: action.payload
      }
    }

		case INCREASE: {
			return {
				...state,
				cnt: state.cnt + 1
			}
		}
    default:
      return state;
  }
};

export default user;
export const SET_JWT_TOKEN = 'SET_JWT_TOKEN'
export const INCREASE = 'INCREASE'
export const SET_CURRENT_CATEGORY_ID = 'SET_CURRENT_CATEGORY_ID';
export const SET_USERINFO = 'SET_USERINFO';
export const SET_RESINFO = 'SET_RESINFO';

export const setresInfo = (resInfo) => ({
  type: SET_RESINFO,
  payload: resInfo,
});

export const setJwtToken = (jwtToken) => ({
  type: SET_JWT_TOKEN,
  payload: jwtToken,
});

export const setCurrentCategoryId = (id) => ({
  type: SET_CURRENT_CATEGORY_ID,
  payload: id
});

const initialState = {
  jwtToken: null,
	cnt: 0,
  currentCategoryId: 2, //default
  userInfo: {
    name: "Team MISS",
    Books: 4,
    Upcoming: 2,
  },
  resInfo: [
    {
      name: "Din Tai Fung",
      date: "2021-05-16",
      options: [
        {name: "Bok choy", amount: "200g"},
        {name: "Onions", amount: "300g"}
      ]
    },
    {
      name: "La grilia",
      date: "2021-05-13",
      options: [
        {name: "Cilantro", amount: "50g"},
        {name: "Green onions", amount: "100g"}
      ]
    },
    {
      name: "Din Tai Fung",
      date: "2021-05-31",
      options: [
        {name: "Bok choy", amount: "100g"}
      ]
    },
    {
      name: "Minami",
      date: "2021-05-17",
      options: [
        {name: "Green onions", amount: "100g"}
      ]
    }
  ]
}

const user = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERINFO: {
      return {
        ...state,
        userInfo: action.payload
      }
    }
    case SET_RESINFO: {
      return {
        ...state,
        resInfo: action.payload
      }
    }

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
      return {
        ...state
      }
  }
};

export default user;
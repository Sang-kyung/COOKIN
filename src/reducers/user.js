export const LOG_IN = 'LOG_IN';
export const LOG_OUT = 'LOG_OUT';
export const SIGN_UP = 'SIGN_UP';

export const signup = ({phone, name}) => ({
  type: SIGN_UP,
  payload: {phone, name},
})

export const login = ({phone, name}) => ({
  type: LOG_IN,
  payload: {phone, name},
})

export const logout = () => ({
  type: LOG_OUT,
})

const initialState = {
  isloggedIn : false,
  phone : "",
  name : "",
}

const user = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_UP: {
      return {
        ...state,
        isloggedIn : true,
        phone : action.payload.phone,
        name : action.payload.name,
      }
    }
    case LOG_IN: {
      return {
        ...state,
        isloggedIn : true,
        phone : action.payload.phone,
        name : action.payload.name,
      }
    }
    case LOG_OUT: {
      return {
        ...state,
        isloggedIn : false,
        phone : "",
        name : "",
      }
    }
    default:
      return state;
  }
};

export default user;
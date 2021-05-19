export const LOG_IN = 'LOG_IN';
export const LOG_OUT = 'LOG_OUT';
export const INCREASE = 'INCREASE';

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
    case LOG_IN: {
      return {
        ...state,
        isloggedIn : true,
        phone : action.payload.phone,
        name : action.payload.name,
      }
    }
    case LOG_OUT: {
      console.log("log out");
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
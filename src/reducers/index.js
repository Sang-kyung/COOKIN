import {combineReducers} from 'redux';
import user from './user';
import searchCity from './searchCity'

export const USER_LOGOUT = "USER_LOGOUT"
export const userLogOut = () => ({
  type: USER_LOGOUT,
});

const appReducer = combineReducers({
  user,
  searchCity,
  //여기에 추가될 reducer를 선언하기.
})

const rootReducer = (state, action) => {
  if (action.type === USER_LOGOUT) {
    state = undefined;
  }
  return appReducer(state, action);
};

export default rootReducer
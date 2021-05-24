export const RES_INFO = 'RES_INFO';
export const DELETE = 'DELETE';

export const reserve = ({phone, res}) => ({
  type: RES_INFO,
  payload: {phone, res},
});

export const del = () => ({
  type: DELETE,
})

const initialState = {
  phone : "",
  res: {},
}

const reservation = (state = initialState, action) => {
  switch (action.type) {
    case RES_INFO: {
      return {
        ...state,
        phone: action.payload.phone,
        res: action.payload.res,
      }
    }
    case DELETE: {
      return {
        ...state,
        phone: "",
        res: {},
      }
    }
    default:
      return state;
  }
};

export default reservation;
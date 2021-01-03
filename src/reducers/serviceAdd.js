import {CHANGE_SERVICE_FIELD, SELECT_SERVICE, SHOW_CANCEL} from '../actions/actionTypes'

const initialState = {
  name: '',
  price: '',
  showCancel: false, 
  id: null
};

export default function serviceAddReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_SERVICE_FIELD:
      const {name, value} = action.payload;
      return {...state, [name]: value};
      case SHOW_CANCEL: 
      return {...state, showCancel: action.payload}
      case SELECT_SERVICE:
        return {...state, id: action.payload}
    default:
      return state;
  }
}

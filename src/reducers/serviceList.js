import {nanoid} from 'nanoid';
import {ADD_SERVICE, REMOVE_SERVICE, UPDATE_SERVICE} from '../actions/actionTypes'

const initialState = [
  {id: nanoid(), name: 'Замена стекла', price: 21000},
  {id: nanoid(), name: 'Замена дисплея', price: 25000},
];

export default function serviceListReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_SERVICE:
      const {name, price} = action.payload;
      return [...state, {id: nanoid(), name, price: Number(price)}];
    case REMOVE_SERVICE:
      const {id} = action.payload;
      return state.filter(service => service.id !== id);
    case UPDATE_SERVICE:
      return state.map(service => {
        if(service.id === action.payload.id) {
          return {name: action.payload.name, price: action.payload.price, id: service.id}
        }
        return service
      })
    default:
      return state;
  }
}

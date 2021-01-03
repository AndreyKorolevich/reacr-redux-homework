import { ADD_SERVICE, UPDATE_SERVICE, REMOVE_SERVICE, CHANGE_SERVICE_FIELD,  SHOW_CANCEL, SELECT_SERVICE} from './actionTypes';

export function addService(name, price) {
  return {type: ADD_SERVICE, payload: {name, price}};
}

export function removeService(id) {
  return {type: REMOVE_SERVICE, payload: {id}};
}

export function updateService(id, name, price) {
  return {type: UPDATE_SERVICE, payload: {id, name, price}};
}

export function changeServiceField(name, value) {
  return {type: CHANGE_SERVICE_FIELD, payload: {name, value}}
}

export function showCancel(value) {
  return {type: SHOW_CANCEL, payload: value}
}

export function selectService(id) {
  return {type: SELECT_SERVICE, payload: id}
}

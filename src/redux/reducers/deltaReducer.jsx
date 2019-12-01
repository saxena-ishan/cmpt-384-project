import * as types from '../actions/actionTypes';
import initialState from './initialState';

// Perils of having a nested tree strucutre in the Redux State XD XD XD 
export default function deltaReducer(state = initialState, action) {
  switch (action.type) {
    
    case types.UPDATE_YEARS:
      return Object.assign({}, state, { years: action.years });
    case types.SET_SINGLE_MAX:
      return Object.assign({}, state, { years: action.max });
    case types.SET_TOTAL_MAX:
      return Object.assign({}, state, { years: action.max });
    default:
      return state;
  }
}


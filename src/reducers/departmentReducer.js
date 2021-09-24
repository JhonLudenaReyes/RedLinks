import {
  GET_LIST_DEPARTMENTS,
  SET_DEPARTMENT,
  CHANGE_VERIFICATION,
  EDIT_DEPARTMENT,
  SET_DEPARTMENTS,
} from "../actions/types.js";

const isEmpty = require("is-empty");

const initialState = {
  departments: [],
  verification: false,
  department: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_LIST_DEPARTMENTS:
      return {
        ...state,
        departments: action.payload,
      };
    case CHANGE_VERIFICATION:
      return {
        ...state,
        verification: action.payload,
      };
    case SET_DEPARTMENT:
      return {
        ...state,
        department: action.payload,
      };
    case EDIT_DEPARTMENT:
      return {
        ...state,
        department: action.payload,
        verification: !isEmpty(action.payload),
      };
    case SET_DEPARTMENTS:
      return {
        ...state,
        departments: action.payload,
      };
    default:
      return state;
  }
}

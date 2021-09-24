import axios from "axios";

import {
  GET_LIST_DEPARTMENTS,
  CHANGE_VERIFICATION,
  SET_DEPARTMENT,
  EDIT_DEPARTMENT,
  SET_DEPARTMENTS,
} from "./types.js";

export const getListDepartments = () => (dispatch) => {
  axios
    .get(`https://jsonplaceholder.typicode.com/posts/`)
    .then((res) =>
      dispatch({
        type: GET_LIST_DEPARTMENTS,
        payload: res.data,
      })
    )
    .catch((err) => console.log(err));
};

export const changeVerification = (data) => (dispatch) => {
  dispatch({
    type: CHANGE_VERIFICATION,
    payload: data,
  });
};

export const editDepartment = (data) => (dispatch) => {
      dispatch(
        {
          type: EDIT_DEPARTMENT,
          payload: data,
        },
        alert("Sus datos han sido actualizado con exito")
      )
};

export const setDepartment = (department) => (dispatch) => {
  dispatch({
    type: SET_DEPARTMENT,
    payload: department,
  });
};

export const setDepartments = (departments) => (dispatch) => {
  dispatch({
    type: SET_DEPARTMENTS,
    payload: departments,
  });
};

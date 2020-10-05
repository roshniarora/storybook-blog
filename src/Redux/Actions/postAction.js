import * as types from "../constant";

const addPost = (formData) => (dispatch) => {
  dispatch({ type: types.ADD_POST, payload: formData });
};

const search = (value) => {
  console.log(value, "acion");
  return { type: types.SEARCH, payload: value };
};

const searchEmpty = () => {
  console.log("trr");
  return { type: types.SEARCH_EMPTY };
};

export { addPost, search, searchEmpty };

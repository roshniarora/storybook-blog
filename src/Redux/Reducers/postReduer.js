import * as types from "../constant";

const initialState = {
  post: [],
  postSearch: [],
};

const AddPost = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_POST: {
      return { ...state, post: [...state.post, action.payload] };
    }
    case types.SEARCH: {
      const works = state.post.filter((val) =>
        val.title.includes(action.payload)
      );
      console.log(works);
      return { ...state, postSearch: works };
    }

    case types.SEARCH_EMPTY: {
      return { ...state, postSearch: [] };
    }

    default:
      return { ...state };
  }
};

export default AddPost;

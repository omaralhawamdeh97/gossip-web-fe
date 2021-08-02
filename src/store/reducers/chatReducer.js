import * as actionTypes from "../actions/actionsTypes";

const initialState = {
  chats: null,
  loading: true,
};

const chatReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_CHAT:
      const { newChat } = action.payload;
      return {
        ...state,
        // chats: [...state.chats, newChat],
      };

    case actionTypes.FETCH_CHAT:
      return {
        ...state,
        chats: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};

export default chatReducer;

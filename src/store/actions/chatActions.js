import * as actionTypes from "./actionsTypes";
import instance from "./instance";
// ACTIONS
export const addChat = (newChat) => {
  return async (dispatch) => {
    try {
      const token = localStorage.getItem("myToken");
      instance.defaults.headers.common.Authorization = `Bearer ${token}`;
      const res = await instance.post(`/chats`, newChat);
      dispatch({
        type: actionTypes.ADD_CHAT,
        payload: { newChat: res.data },
      });
    } catch (error) {
      if (error.chat.includes("401")) {
        dispatch({
          type: actionTypes.SET_USER,
          payload: null,
        });
      } else {
        console.log(error);
      }
    }
  };
};

export const fetchChats = () => {
  return async (dispatch) => {
    try {
      const res = await instance.get("/chats");
      console.log(res);
      dispatch({
        type: actionTypes.FETCH_CHAT,
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

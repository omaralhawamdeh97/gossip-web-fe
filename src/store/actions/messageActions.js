import * as actionTypes from "./actionsTypes";
import instance from "./instance";
// ACTIONS
export const addMessage = (newMessage) => {
  return async (dispatch) => {
    try {
      const token = localStorage.getItem("myToken");
      instance.defaults.headers.common.Authorization = `Bearer ${token}`;
      const res = await instance.post(`/messages`, newMessage);
      dispatch({
        type: actionTypes.ADD_MESSAGE,
        payload: { newMessage: res.data },
      });
    } catch (error) {
      if (error.message.includes("401")) {
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

export const fetchMessages = () => {
  return async (dispatch) => {
    try {
      const res = await instance.get("/messages");
      console.log(res);
      dispatch({
        type: actionTypes.FETCH_MESSAGE,
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

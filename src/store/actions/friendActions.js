import * as actionTypes from "./actionsTypes";
import instance from "./instance";

export const addFriend = (newFriend, setOpen) => {
  return async (dispatch) => {
    try {
      const token = localStorage.getItem("myToken");
      instance.defaults.headers.common.Authorization = `Bearer ${token}`;
      const res = await instance.post(`/friends`, newFriend);
      dispatch({
        type: actionTypes.UPDATE_USER,
        payload: null,
      });
      setOpen(false);
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

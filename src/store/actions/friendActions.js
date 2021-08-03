import * as actionTypes from "./actionsTypes";
import instance from "./instance";

//actions
export const addFriend = (newFriend, setOpen, setFriend) => {
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
      if (error.message.includes("404")) {
        setFriend("");
      } else {
        console.log(error);
      }
    }
  };
};

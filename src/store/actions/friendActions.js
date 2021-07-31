import * as actionTypes from "./actionsTypes";
import instance from "./instance";

export const fetchFriends = () => {
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

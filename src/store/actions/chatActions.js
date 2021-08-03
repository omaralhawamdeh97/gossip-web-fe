import * as actionTypes from "./actionsTypes";
import instance from "./instance";

// ACTIONS
export const addChat = (newChat, newArr, setOpenModalTwo) => {
  return async (dispatch) => {
    try {
      const res = await instance.post(`/chats`, newChat);
      newArr.forEach((elemnt) => (elemnt.chatId = res.data.id));
      console.log(newArr);
      await instance.post(`/conversations`, newArr);
      dispatch({
        type: actionTypes.ADD_CHAT,
        payload: { newChat: res.data },
      });
      setOpenModalTwo(false);
    } catch (error) {
      if (error.message.includes("Username")) {
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

export const fetchChats = (chatId) => {
  return async (dispatch) => {
    try {
      const res = await instance.get(`/chats/${chatId}`);

      dispatch({
        type: actionTypes.FETCH_CHAT,
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

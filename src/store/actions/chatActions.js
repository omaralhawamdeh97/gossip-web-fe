import * as actionTypes from "./actionsTypes";
import instance from "./instance";
// ACTIONS
export const addChat = (newChat, userId, friendId, history) => {
  return async (dispatch) => {
    try {
      const res = await instance.post(`/chats`, newChat);
      console.log("hello");
      console.log(res.data.id);
      await instance.post(`/conversations`, {
        chatId: res.data.id,
        userId: userId,
      });
      await instance.post(`/conversations`, {
        chatId: res.data.id,
        userId: friendId,
      });
      history.push("/chat");
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

import * as actionTypes from "./actionsTypes";
import instance from "./instance";

// ACTIONS
export const addChat = (newChat, newArr, setOpenModalTwo, setProfile) => {
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
      setProfile(false);
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

export const updateChatImage = (body, chatId) => {
  return async (dispatch) => {
    try {
      const formData = new FormData();
      for (const key in body) formData.append(key, body[key]);
      const token = localStorage.getItem("myToken");
      instance.defaults.headers.common.Authorization = `Bearer ${token}`;
      const res = await instance.put(`/chats/${chatId}/image`, formData);

      dispatch({
        type: actionTypes.UPDATE_USER,
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

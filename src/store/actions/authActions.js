import instance from "./instance";
import * as actionTypes from "./actionsTypes";
import decode from "jwt-decode";
// ACTIONS
export const signup = (user, history, setMess) => {
  return async (dispatch) => {
    try {
      const res = await instance.post("/signup", user);
      dispatch(setUser(res.data.token));
      history.push("/");
    } catch (error) {
      if (error.message.includes("500")) {
        setMess("");
      }
    }
  };
};
export const signin = (user, history, setMess) => {
  return async (dispatch) => {
    try {
      const res = await instance.post("/signin", user);
      dispatch(setUser(res.data.token));
      history.push("/");
    } catch (error) {
      if (error.message.includes("401")) {
        setMess("");
      }
    }
  };
};
export const signout = (history) => {
  localStorage.removeItem("myToken");
  history.push("/");
  return {
    type: actionTypes.SET_USER,
    payload: null,
  };
};
export const checkForToken = () => {
  const token = localStorage.getItem("myToken");
  if (token) {
    const currentTime = Date.now();
    const user = decode(token);
    if (user.exp > currentTime) {
      return setUser(token);
    }
  }
  return setUser();
};
const setUser = (token) => {
  if (token) {
    localStorage.setItem("myToken", token);
    instance.defaults.headers.common.Authorization = `Bearer ${token}`;
    return {
      type: actionTypes.SET_USER,
      payload: decode(token),
    };
  } else {
    localStorage.removeItem("myToken");
    delete instance.defaults.headers.common.Authorization;
    return {
      type: actionTypes.SET_USER,
      payload: null,
    };
  }
};
export const fetchUsers = () => {
  return async (dispatch) => {
    try {
      const res = await instance.get("/users");

      dispatch({
        type: actionTypes.FETCH_USERS,
        payload: res?.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const updateUser = (
  body,
  user,
  setPasswordError,
  setNameError,
  handleClose
) => {
  return async (dispatch) => {
    try {
      const token = localStorage.getItem("myToken");
      instance.defaults.headers.common.Authorization = `Bearer ${token}`;
      const res = await instance.put(`${user.id}`, body);
      dispatch({
        type: actionTypes.UPDATE_USER,
        payload: res.data,
      });
      handleClose();
    } catch (error) {
      if (error.message.includes("401")) {
        setPasswordError(true);
      } else if (error.message.includes("402")) {
        setNameError(true);
      } else {
        console.log(error);
      }
    }
  };
};

export const updateUserImage = (body, user) => {
  return async (dispatch) => {
    try {
      const formData = new FormData();
      for (const key in body) formData.append(key, body[key]);
      const token = localStorage.getItem("myToken");
      instance.defaults.headers.common.Authorization = `Bearer ${token}`;
      const res = await instance.put(`${user.id}/image`, formData);
      console.log(res, "res");
      dispatch({
        type: actionTypes.UPDATE_USER,
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const fetchFoundUser = (user) => {
  return async (dispatch) => {
    console.log(1);
    try {
      const res = await instance.get(`/users/${user.id}`);
      console.log(2);
      dispatch({
        type: actionTypes.FOUND_USER,
        payload: res?.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

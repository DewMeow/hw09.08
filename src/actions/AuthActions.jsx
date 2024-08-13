import axios from "axios";

export const register =
  ({ username, email, password }) =>
  async (dispatch) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const body = JSON.stringify({ username, email, password });

    try {
      const res = await axios.post(
        "https://fakeapi.platzi.com/en/rest/auth/register",
        body,
        config
      );
      dispatch({
        type: "REGISTER_SUCCESS",
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: "REGISTER_FAIL",
        payload: err.response.data.message,
      });
    }
  };

export const login = (email, password) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const body = JSON.stringify({ email, password });

  try {
    const res = await axios.post(
      "https://fakeapi.platzi.com/en/rest/auth/login",
      body,
      config
    );
    dispatch({
      type: "LOGIN_SUCCESS",
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: "LOGIN_FAIL",
      payload: err.response.data.message,
    });
  }
};

export const logout = () => (dispatch) => {
  dispatch({ type: "LOGOUT" });
};

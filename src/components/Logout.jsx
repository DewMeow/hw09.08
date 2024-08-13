import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../actions/AuthActions";

const Logout = () => {
  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(logout());
  };

  return <button onClick={onLogout}>Logout</button>;
};

export default Logout;

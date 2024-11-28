import React from "react";
import axios from "axios";
export const URLREGISTER = "http://localhost:8080/auth/register";
export const URLUSERS = "http://localhost:8080/auth/users";
export const URLBACKUP = "http://localhost:8080/backups";
export const URLROLES = "http://localhost:8080/roles";
export const URLUSER = (id) => {
  return `http://localhost:8080/users/${id}`;
};
export const axiosPostLogin = async (url, data, setGlobal, global) => {
  try {
    const response = await axios.post(url, data);
    console.log(response);
    setGlobal(response.data.token);
    console.log(global);
  } catch (error) {
    console.log(error);
  }
};
export const axiosGet = async (url, headers, setGlobal, setData) => {
  try {
    const response = await axios(url, { headers });
    setData(response.data);
    setGlobal(true);
  } catch (error) {
    console.log(error);
  }
};
export const axiosPost = async (
  url,
  data,
  headers,
  setGlobal,
  setCheck,
  setError
) => {
  try {
    setGlobal(true);
    const response = await axios.post(url, data, {
      headers,
    });
    console.log(response);
    setGlobal(false);
    setCheck(true);
  } catch (error) {
    setGlobal(false);
    setCheck(false);
    setError(error.response.data.message);
    console.log(error.response.data.message);
  }
};
export const postBackUp = async (url, headers, setGlobal, global) => {
  try {
    setGlobal(true);
    const response = await axios.post(url, {}, { headers });
    console.log("Succes Method");
    setGlobal(false);
  } catch (error) {
    console.log(error);
  }
};

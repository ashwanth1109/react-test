import { createStore, combineReducers } from "redux";

// ------------------------------------------------------------
// Test Reducer
// ------------------------------------------------------------
// const test = (state = "Hello React", action) =>
//     action.type === "TEST" ? action.value : state;

// ------------------------------------------------------------
// User List Reducer
// ------------------------------------------------------------
const userList = (state = [], action) =>
    action.type === "UPDATE_USER_LIST" ? action.users : state;

const selectedUser = (state = null, action) =>
    action.type === "UPDATE_USER" ? action.user : state;

// ------------------------------------------------------------
// Button Loading Reducer
// ------------------------------------------------------------
const buttonLoading = (state = false, action) =>
    action.type === "SET_BUTTON_LOADING" ? action.buttonLoading : state;

// ------------------------------------------------------------
// Export Store
// ------------------------------------------------------------
export default createStore(
    combineReducers({ userList, buttonLoading, selectedUser })
);

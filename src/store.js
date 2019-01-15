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
// Sort Parameter Reducer
// ------------------------------------------------------------
const sortParameter = (state = 3, action) =>
    action.type === "SORT_PARAMETER" ? action.sortParameter : state;

// ------------------------------------------------------------
// Menu State Reducer
// ------------------------------------------------------------
const menuState = (state = false, action) =>
    action.type === "MENU_STATE" ? action.menuState : state;

// ------------------------------------------------------------
// Export Store
// ------------------------------------------------------------
export default createStore(
    combineReducers({
        userList,
        buttonLoading,
        selectedUser,
        sortParameter,
        menuState
    })
);

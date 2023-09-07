import { combineReducers } from "redux"; // Import the combineReducers function from Redux
import userReducer from "./userReducer"; // Import the userReducer from the "userReducer" file
import counterReducer from "./counterReducer"; // Import the counterReducer from the "counterReducer" file

const rootReducer = combineReducers({ // Combine multiple reducers into a single rootReducer
    user: userReducer, // Assign the userReducer to the "user" key in the rootReducer
    counter: counterReducer, // Assign the counterReducer to the "counter" key in the rootReducer
});

export default rootReducer; // Export the rootReducer as the default export

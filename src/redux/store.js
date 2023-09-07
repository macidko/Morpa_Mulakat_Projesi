import { configureStore } from '@reduxjs/toolkit'; // Import the configureStore function from Redux Toolkit
import counterReducer from './reducers/counterReducer'; // Import the counterReducer from the "counterReducer" file
import userReducer from './reducers/userReducer'; // Import the userReducer from the "userReducer" file

// Configure the Redux store with reducers
const store = configureStore({
  reducer: {
    counter: counterReducer, // Assign the counterReducer to the "counter" slice of the store
    user: userReducer, // Assign the userReducer to the "user" slice of the store
  },
});

export default store; // Export the configured store as the default export

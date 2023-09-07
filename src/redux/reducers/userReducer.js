// Define the initial state with an empty username
const initialState = {
  username: "",
};

// Define the userReducer function to manage the user state
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_USERNAME":
      // Update the username in the state with the new username provided in the action
      return {
        ...state, // Create a copy of the current state
        username: action.username, // Update the username with the new value
      };
    default:
      return state; // Return the current state if the action type is not recognized
  }
};

// Define an action creator to set the username
export const setUsername = (username) => {
  return {
    type: "SET_USERNAME", // Specify the action type as "SET_USERNAME"
    username, // Provide the new username value
  };
};

export default userReducer; // Export the userReducer as the default export

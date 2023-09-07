import { createSlice } from '@reduxjs/toolkit'; // Import the createSlice function from Redux Toolkit

// Initial state with counter values for each group
const initialState = {
  counters: {
    group9: 0,
    group8: 0,
    group7: 0,
    group6: 0,
    group5: 0,
    group4: 0,
    group3: 0,
    group2: 0,
    group1: 0,
  },
};

// Create a counterSlice to manage the counters
const counterSlice = createSlice({
  name: 'counter', // Define the name of the slice
  initialState, // Set the initial state for the slice
  reducers: {
    // Increment a specific counter if it's less than 9
    increment: (state, action) => {
      if (state.counters[action.payload.name] < 9) {
        state.counters[action.payload.name] += 1;
      }
    },
    // Decrement a specific counter if it's greater than 0
    decrement: (state, action) => {
      if (state.counters[action.payload.name] > 0) {
        state.counters[action.payload.name] -= 1;
      }
    },
    // Set input values in the state based on the provided values object
    set_input_values: (state, action) => {
      const { values } = action.payload;
      Object.keys(values).forEach((inputName) => {
        state.counters[inputName] = values[inputName];
      });
    },
  },
});

// Export action creators and selector
export const { increment, decrement, set_input_values } = counterSlice.actions; // Export the action creators
export const selectCount = (state, name) => state.counter.counters[name]; // Export a selector to get the counter value
export default counterSlice.reducer; // Export the reducer as the default export

// Input.js
import React from "react";
import "./input.css"
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, selectCount } from '../../redux/reducers/counterReducer';

function Input({ id }) {
  // Select the count value from Redux store
  const count = useSelector((state) => selectCount(state, id));

  // Get the dispatch function to dispatch actions
  const dispatch = useDispatch();

  return (
    <div className="input">
      {/* Button to increment the value */}
      <button
        aria-label="Increment value"
        className="count-button"
        onClick={() => dispatch(increment({ name: id }))}
      >
        +
      </button>

      {/* Display the count */}
      <span className="count">{count}</span>

      {/* Button to decrement the value */}
      <button
        aria-label="Decrement value"
        className="count-button"
        onClick={() => dispatch(decrement({ name: id }))}
      >
        -
      </button>
    </div>
  );
}

export default Input;

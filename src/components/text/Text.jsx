import React from "react"; // Import the React library
import "./text.css"; // Import a CSS file
import { useSelector } from "react-redux"; // Import the useSelector function from react-redux
import { selectCount } from "../../redux/reducers/counterReducer"; // Import the selectCount function from the counterReducer

// Function to get text for the third position (ID 3)
function getTextForId3(count, idNumber, nextIdCount, digitValues) {
  if (count === 1 && nextIdCount === 0) {
    return digitValues.hundreds[idNumber]; // Return the value from digitValues.hundreds at index idNumber
  } else {
    return digitValues.ones[count] + digitValues.hundreds[idNumber]; // Return a combination of values from digitValues.ones and digitValues.hundreds
  }
}

// Function to get text for the fifth position (ID 5)
function getTextForId5(count, idNumber, prevIdCount, digitValues) {
  if (count === 1 && prevIdCount === 0) {
    return digitValues.hundreds[idNumber] + " bin"; // Return the value from digitValues.hundreds at index idNumber followed by " bin"
  } else if (count > 1 && prevIdCount === 0) {
    return digitValues.ones[count] + digitValues.hundreds[idNumber] + " bin"; // Return a combination of values from digitValues.ones, digitValues.hundreds, and " bin"
  } else if (count > 1 && prevIdCount > 0) {
    return digitValues.ones[count] + digitValues.hundreds[idNumber]; // Return a combination of values from digitValues.ones and digitValues.hundreds
  } else {
    return digitValues.hundreds[idNumber]; // Return the value from digitValues.hundreds at index idNumber
  }
}

// Function to get text for the eighth position (ID 8)
function getTextForId8(count, idNumber, prevIdCount, beforeThePreviousCount, digitValues) {
  if (count === 1 && prevIdCount === 0 && beforeThePreviousCount === 0) {
    return digitValues.hundreds[idNumber] + " milyon"; // Return the value from digitValues.hundreds at index idNumber followed by " milyon"
  } else if ((count === 1 && prevIdCount > 0) || (count === 1 && beforeThePreviousCount > 0)) {
    return digitValues.hundreds[idNumber]; // Return the value from digitValues.hundreds at index idNumber
  } else if ((count > 1 && prevIdCount > 0) || (count > 1 && beforeThePreviousCount > 0)) {
    return digitValues.ones[count] + digitValues.hundreds[idNumber]; // Return a combination of values from digitValues.ones and digitValues.hundreds
  } else {
    return digitValues.ones[count] + digitValues.hundreds[idNumber] + " milyon"; // Return a combination of values from digitValues.ones, digitValues.hundreds, and " milyon"
  }
}

// Function to get text based on the given ID and parameters
function getTextForId(id, count, idNumber, prevIdCount, nextIdCount, beforeThePreviousCount, digitValues) {
  switch (idNumber) {
    case 0:
      return digitValues.ones[count]; // Return the value from digitValues.ones at index count
    case 1:
      return digitValues.tens[count]; // Return the value from digitValues.tens at index count
    case 2:
      return count === 1 ? digitValues.hundreds[idNumber] : digitValues.ones[count] + digitValues.hundreds[idNumber]; // Check if count is 1, return digitValues.hundreds[idNumber], otherwise return a combination of values
    case 3:
      return getTextForId3(count, idNumber, nextIdCount, digitValues); // Call the getTextForId3 function
    case 4:
      return prevIdCount > 0 ? digitValues.tens[count] : digitValues.tens[count] + digitValues.hundreds[idNumber]; // Check if prevIdCount is greater than 0, return digitValues.tens[count], otherwise return a combination of values
    case 5:
      return getTextForId5(count, idNumber, prevIdCount, digitValues); // Call the getTextForId5 function
    case 6:
      return count === 0 ? digitValues.hundreds[idNumber] : digitValues.ones[count] + digitValues.hundreds[idNumber]; // Check if count is 0, return digitValues.hundreds[idNumber], otherwise return a combination of values
    case 7:
      return prevIdCount === 0 ? digitValues.tens[count] + digitValues.hundreds[idNumber] : digitValues.tens[count]; // Check if prevIdCount is 0, return a combination of values, otherwise return digitValues.tens[count]
    case 8:
      return getTextForId8(count, idNumber, prevIdCount, beforeThePreviousCount, digitValues); // Call the getTextForId8 function
    default:
      return ""; // Default case, return an empty string
  }
}

function Text({ id }) {
  const count = useSelector((state) => selectCount(state, id)); // Get count from Redux state using useSelector
  const idNumber = parseInt(id.charAt(id.length - 1)) - 1; // Extract the numerical part from the ID
  const prevId = `group${parseInt(id.charAt(id.length - 1)) - 1}`; // Calculate the previous ID
  const nextId = `group${parseInt(id.charAt(id.length - 1)) + 1}`; // Calculate the next ID
  const beforeThePrevious = `group${parseInt(id.charAt(id.length - 1) - 2)}`; // Calculate the ID before the previous one
  const prevIdCount = useSelector((state) => selectCount(state, prevId)); // Get the count for the previous ID from Redux state
  const nextIdCount = useSelector((state) => selectCount(state, nextId)); // Get the count for the next ID from Redux state
  const beforeThePreviousCount = useSelector((state) => selectCount(state, beforeThePrevious)); // Get the count for the ID before the previous one from Redux state

  if (count === 0) {
    return null; // If count is 0, return null
  }

  const digitValues = {
    ones: [
      "",
      " bir",
      " iki",
      " üç",
      " dört",
      " beş",
      " altı",
      " yedi",
      " sekiz",
      " dokuz",
    ],
    tens: [
      "",
      " on",
      " yirmi",
      " otuz",
      " kırk",
      " elli",
      " altmış",
      " yetmiş",
      " seksen",
      " doksan",
    ],
    hundreds: [
      "",
      "",
      " yüz",
      " bin",
      " bin",
      " yüz",
      " milyon",
      " milyon",
      " yüz",
    ],
  };
  // Initialize a variable to hold the generated count text
  let countText = getTextForId(id, count, idNumber, prevIdCount, nextIdCount, beforeThePreviousCount, digitValues);

  // Return the countText within a span element with an ID and class
  return (
    <span id={id} className="text">
      {countText}
    </span>
  );
}

// Export the Text component as the default export
export default Text;
import React from 'react'; // Import the React library
import ReactDOM from 'react-dom/client'; // Import ReactDOM from the client package
import App from './App.js'; // Import the App component from "App.js" file
import store from "../src/redux/store"; // Import the Redux store
import { Provider } from 'react-redux'; // Import the Provider component from react-redux

const root = ReactDOM.createRoot(document.getElementById('root')); // Create a React root at the HTML element with the ID 'root'
root.render(
    <Provider store={store}> {/* Provide the Redux store to the entire App */}
        <App /> {/* Render the App component */}
    </Provider>
);

import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setUsername } from "./redux/reducers/userReducer";
import { set_input_values } from "./redux/reducers/counterReducer";
import "normalize.css";
import "./index.css";
import LoginScreen from "./components/loginscreen/LoginScreen";
import Navbar from "../src/components/common/Navbar";
import TextMain from "./components/text/TextMain";
import InputMain from "./components/input/InputMain";
import Abacus from "./components/abacus/Abacus";
import CreateButton from "./components/createbutton/CreateButton";
import logo from "./assets/images/morpalogo_beyaz.png"

const App = () => {
  const dispatch = useDispatch();
  const username = useSelector((state) => state.user.username);

  // We use a flag to only move data from Local Storage to Redux store once
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    // Check the username in the Redux store when the app starts
    const storedUsername = username; // First, check in the Redux store

    if (!initialized) {
      // Only run once by checking the flag
      // If there's no username in the Redux store, check in Local Storage
      const localUsername = localStorage.getItem("username");
      if (localUsername) {
        // Update the username in the Redux store
        dispatch(setUsername(localUsername));

        // Get input values from Local Storage and put them in the Redux store
        const inputValues = {};
        Object.keys(localStorage).forEach((key) => {
          if (key.startsWith("group")) {
            inputValues[key] = parseInt(localStorage.getItem(key));
          }
        });
        // Update input values in the Redux store
        dispatch(set_input_values({ values: inputValues }));

        // Set the flag so it won't run again
        setInitialized(true);
      }
    }
  }, [dispatch, initialized, username]);

  const handleLogin = (newUsername) => {
    // Save the username in Local Storage
    localStorage.setItem("username", newUsername);
    // Update the username in the Redux store
    dispatch(setUsername(newUsername));
  };

  const handleLogout = () => {
    // Remove the username from Local Storage
    localStorage.removeItem("username");
    // Clear the username in the Redux store
    dispatch(setUsername(""));
  };

  return (
    <>
      {username ? (
        <>
          <Navbar username={"Hoş geldin, " + username} handleLogout={handleLogout} />
          <TextMain />
          <InputMain />
          <Abacus />
          <CreateButton />
        </>
      ) : (
        <LoginScreen onLogin={handleLogin} logo={logo} logoWidth={"100px"} logoHeight={"100px"}/>
      )}
    </>
  );
};

export default App;

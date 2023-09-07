import React, { useState } from "react";
import "./createbutton.css"
import { useDispatch, useSelector } from "react-redux";
import { selectCount } from '../../redux/reducers/counterReducer';
import { set_input_values } from '../../redux/reducers/counterReducer';

const CreateButton = () => {
    const [buttonText, setButtonText] = useState("Oluştur");

    const dispatch = useDispatch();

    // Get current values for each group from the Redux store
    const inputValues = {
        group1: useSelector((state) => selectCount(state, "group1")),
        group2: useSelector((state) => selectCount(state, "group2")),
        group3: useSelector((state) => selectCount(state, "group3")),
        group4: useSelector((state) => selectCount(state, "group4")),
        group5: useSelector((state) => selectCount(state, "group5")),
        group6: useSelector((state) => selectCount(state, "group6")),
        group7: useSelector((state) => selectCount(state, "group7")),
        group8: useSelector((state) => selectCount(state, "group8")),
        group9: useSelector((state) => selectCount(state, "group9")),
        // You can add other input values here.
    };

    const changeText = () => {
        setButtonText((prev) => prev === "Oluştur" ? "Oluşturuldu" : "Oluştur");
    }

    const handleCreate = () => {
        // Save input values to Local Storage
        Object.keys(inputValues).forEach((inputName) => {
            localStorage.setItem(inputName, inputValues[inputName]);
        });

        // Update input values in the Redux store
        dispatch(set_input_values({ values: inputValues }));

        changeText();

        setTimeout(() => {
            changeText();
        }, 2000);
    };

    return (
        <div className="create-button-cont">
            <button className="create-button" onClick={handleCreate}><span className="create-icon">
                <svg viewBox="0 0 24 24" id="check-circle"><path fill="#FFFFFF" d="M14.72,8.79l-4.29,4.3L8.78,11.44a1,1,0,1,0-1.41,1.41l2.35,2.36a1,1,0,0,0,.71.29,1,1,0,0,0,.7-.29l5-5a1,1,0,0,0,0-1.42A1,1,0,0,0,14.72,8.79ZM12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z"></path></svg></span> {buttonText}</button>
        </div>
    );
}

export default CreateButton;

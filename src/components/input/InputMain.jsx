import React from "react";
import Input from "./Input";

function InputMain() {
    return (
        <section className="input-cont">
            {/* Render Input components with different IDs */}
            <Input id="group9" />
            <Input id="group8" />
            <Input id="group7" />
            <Input id="group6" />
            <Input id="group5" />
            <Input id="group4" />
            <Input id="group3" />
            <Input id="group2" />
            <Input id="group1" />
        </section>
    );
}

export default InputMain;

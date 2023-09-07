import React from "react"; // Import the React library
import Text from "./Text"; // Import the Text component from another file
import "./text.css"; // Import a CSS file

function TextMain() { // Define the TextMain functional component
    return (
        <section className="text-cont"> {/* Create a section with a class name "text-cont" */}
            <Text id="group9" /> {/* Render the Text component with id "group9" */}
            <Text id="group8" /> {/* Render the Text component with id "group8" */}
            <Text id="group7" /> {/* Render the Text component with id "group7" */}
            <Text id="group6" /> {/* Render the Text component with id "group6" */}
            <Text id="group5" /> {/* Render the Text component with id "group5" */}
            <Text id="group4" /> {/* Render the Text component with id "group4" */}
            <Text id="group3" /> {/* Render the Text component with id "group3" */}
            <Text id="group2" /> {/* Render the Text component with id "group2" */}
            <Text id="group1" /> {/* Render the Text component with id "group1" */}
        </section>
    )
}

export default TextMain; // Export the TextMain component as the default export

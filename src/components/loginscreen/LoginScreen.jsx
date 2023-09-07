import "./loginscreen.css"; // Importing the CSS styles
import React, { useState } from "react"; // Importing React and useState from the React library

// Defining the LoginScreen component
const LoginScreen = ({ onLogin, logo, logoWidth, logoHeight }) => {
    // Using React state to manage the username input field
    const [username, setUsername] = useState("");

    // Event handler to update the username state when the input changes
    const handleInputChange = (e) => {
        setUsername(e.target.value); // Update the username state with the input value
        console.log(username); // Log the current username to the console (Note: This may not immediately reflect the updated state due to React's asynchronous nature)
    }

    // Event handler for the login button click
    const handleLogin = () => {
        // Check if the username is not empty (trimmed to remove whitespace)
        if (username.trim() !== "") {
            onLogin(username); // Call the onLogin function with the provided username as an argument
        }
    }

    // Rendering the LoginScreen component
    return (
        <>
            <div className="container"> {/* Container for the login screen */}
                <header className='logo-cont'> {/* Container for the logo */}
                    <img src={logo} alt="" className='logo' width={logoWidth} height={logoHeight} /> {/* Logo image */}
                </header>
                <main className='login-input-cont'> {/* Container for the input fields */}
                    <form action=""> {/* Form for username input */}
                        <input type="text" placeholder="Kullanıcı Adı" value={username} onChange={handleInputChange} /> {/* Username input field */}
                        <button className="submit-button" onClick={handleLogin}>Giriş Yap</button> {/* Login button */}
                    </form>
                </main>
            </div>
        </>
    );
}

export default LoginScreen; // Exporting the LoginScreen component

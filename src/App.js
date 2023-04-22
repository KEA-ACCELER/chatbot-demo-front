import React, { useState } from "react";
import UsernameForm from "./components/UsernameForm";
import ChatRoom from "./components/ChatRoom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
    const [username, setUsername] = useState("");

    function handleUsernameSubmit(newUsername) {
        setUsername(newUsername);
    }

    return (
        <div className="Background">
            <div className="App">
                {username === "" ? (
                    <UsernameForm onSubmit={handleUsernameSubmit} />
                ) : (
                    <ChatRoom username={username} />
                )}
            </div>
        </div>
    );
}

export default App;

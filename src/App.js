import React, { useState } from "react";
import UsernameForm from "./components/UsernameForm";
import ChatRoom from "./components/ChatRoom";

function App() {
  const [username, setUsername] = useState("");

  function handleUsernameSubmit(newUsername) {
    setUsername(newUsername);
  }

  if (username) {
    return <ChatRoom username={username} />;
  } else {
    return <UsernameForm onSubmit={handleUsernameSubmit} />;
  }
}

export default App;

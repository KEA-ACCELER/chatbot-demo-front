import React, { useState } from "react";
import "../App.css";

function UsernameForm(props) {
  const [username, setUsername] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    props.onSubmit(username);
  }

  function handleChange(event) {
    setUsername(event.target.value);
  }

  return (
    <div id="username-page">
      <div className="username-page-container">
        <h1 className="title">Type your username</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input type="text" id="name" placeholder="Username" value={username} onChange={handleChange} autoComplete="off" className="form-control" />
          </div>
          <div className="form-group">
            <button type="submit" className="accent">
              Start Chatting
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UsernameForm;

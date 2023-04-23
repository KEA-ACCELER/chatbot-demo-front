import React, { useState } from "react";

import Button from "react-bootstrap/Button";
import { connect } from "./Controller";

function UsernameForm(props) {
    const [username, setUsername] = useState("");

    function handleSubmit(event) {
        event.preventDefault();
        connect(username);
        props.onSubmit(username);
    }

    function handleChange(event) {
        setUsername(event.target.value);
    }

    return (
        <div className="username-page">
            <h1 className="title">Type your username</h1>

            <input
                type="text"
                id="name"
                placeholder="Username"
                value={username}
                onChange={handleChange}
                autoComplete="off"
                className="username-input"
            />

            <Button variant="outline-warning" onClick={handleSubmit}>
                Start Chatting
            </Button>
        </div>
    );
}

export default UsernameForm;

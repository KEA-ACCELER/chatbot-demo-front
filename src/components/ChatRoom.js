import React, { useRef, useState } from "react";
import { Button } from "react-bootstrap";
import { Message } from "./Message";
import axios from "axios";

function ChatRoom(props) {
    const [messages, setMessages] = useState([]);
    const [msgInput, setMsgInput] = useState("");
    const [botMessage, setBotMessage] = useState("");
    const sendMsgHandler = (msg) => {
        msg == "" ? alert() : myNewMsg(msg);
    };
    const myNewMsg = (msg) => {
        const newMsg = { mode: 0, msg: msg, id: key.current };
        key.current += 1;
        messages === []
            ? setMessages([newMsg])
            : setMessages([...messages, newMsg]);
        setMsgInput("");

        axios({
            method: "post",
            url: "http://server.vivi108.com/chatbot",
            data: {
                msg: msg,
            },
        }).then((res) => {
            console.log(res);
            const newResponse = { mode: 1, msg: res, id: key.current };
            key.current += 1;
            setMessages([...messages, newResponse]);
        });
    };
    const chat = [
        { mode: 0, msg: "hello", id: 0 },
        { mode: 1, msg: "yo", id: 1 },
        { mode: 0, msg: "hello", id: 2 },
        { mode: 1, msg: "yo", id: 3 },
        { mode: 0, msg: "hello", id: 4 },
    ];
    const key = useRef(0);
    return (
        <div className="chat-page">
            <div className="chat-header">
                <h2>{props.username}'s Chat Room</h2>
            </div>
            <div className="chat-wrapper">
                {chat.map((it) => (
                    <Message key={it.id} value={it.msg} mode={it.mode} />
                ))}
            </div>

            <div className="form-group">
                <div className="input-group clearfix">
                    <input
                        type="text"
                        value={msgInput}
                        onChange={(e) => setMsgInput(e.target.value)}
                        id="message"
                        placeholder="Type a message..."
                        autoComplete="off"
                        className="form-control"
                    />
                    <Button
                        onClick={() => sendMsgHandler(msgInput)}
                        variant="primary"
                        className="primary"
                    >
                        Send
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default ChatRoom;

import React from "react";
import { Button } from "react-bootstrap";
//

function ChatRoom(props) {
    return (
        <div className="chat-page">
            <div className="chat-header">
                <h2>{props.username}'s Chat Room</h2>
            </div>
            <div className="chat-wrapper"></div>
            <form id="messageForm" name="messageForm" nameForm="messageForm">
                <div className="form-group">
                    <div className="input-group clearfix">
                        <input
                            type="text"
                            id="message"
                            placeholder="Type a message..."
                            autoComplete="off"
                            className="form-control"
                        />
                        <Button
                            type="submit"
                            variant="primary"
                            className="primary"
                        >
                            Send
                        </Button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default ChatRoom;

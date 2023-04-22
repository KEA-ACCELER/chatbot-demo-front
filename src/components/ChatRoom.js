import React from "react";
//

function ChatRoom(props) {
  return (
    <div id="chat-page">
      <div className="chat-container">
        <div className="chat-header">
          <h2>{props.username}'s Chat Room</h2>
        </div>

        <ul id="messageArea"></ul>
        <form id="messageForm" name="messageForm" nameForm="messageForm">
          <div className="form-group">
            <div className="input-group clearfix">
              <input type="text" id="message" placeholder="Type a message..." autoComplete="off" className="form-control" />
              <button type="submit" className="primary">
                Send
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ChatRoom;

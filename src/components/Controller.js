import * as SockJS from "sockjs-client";
import Stomp from "stompjs";
// import * as StompJs from "@stomp/stompjs";
// var Stomp = require("@stomp/stompjs");

let stompClient = null;
let username = null;

export function connect(username1) {
    username = username1;
    if (username) {
        var socket = new SockJS("http://localhost:8080/ws");
        stompClient = Stomp.over(socket);
        stompClient.connect({}, onConnected, onError);
    }
}

function onConnected() {
    // Subscribe to the Public Topic
    stompClient.subscribe(
        "http://localhost:8080/topic/public",
        onMessageReceived
    );

    console.log("Connect to server");
    // Tell your username to the server
    stompClient.send(
        "http://localhost:8080/app/chat/addUser",
        {},
        JSON.stringify({ sender: username, type: "JOIN" })
    );
}

function onError(error) {
    console.log(error);
}

export function sendMessage(message) {
    var msg = message.trim();

    if (msg && stompClient) {
        var chatMessage = {
            sender: username,
            content: msg,
            type: "CHAT",
        };

        stompClient.send(
            "http://localhost:8080/app/chat/sendMessage",
            {},
            JSON.stringify(chatMessage)
        );
    }
}

function onMessageReceived(payload) {
    var message = JSON.parse(payload.body);
    console.log(message);
}

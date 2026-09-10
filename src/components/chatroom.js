import React, { useState, useEffect } from "react";
import "../components/Chatroom.css";

function ChatRoom() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  let socket;

  useEffect(() => {
    socket = new WebSocket("ws://localhost:8000/ws/chat/room1/");

    socket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      setMessages((prev) => [...prev, data.message]);
    };

    return () => socket.close();
  }, []);

  const sendMessage = () => {
    socket.send(JSON.stringify({ message: input }));
    setInput("");
  };

  return (
    <div>
      <h2>Live Chat</h2>
      <div>
        {messages.map((msg, index) => (
          <p key={index}>{msg}</p>
        ))}
      </div>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type message..."
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
}

export default ChatRoom;

import React, { useEffect } from "react";
import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const Messages = ({ message }) => {
  const [user] = useAuthState(auth);
  useEffect(() => {
    console.log(message.avatar);
  });
  return (
    <div className={`chat-bubble ${message.uid === user.uid ? "right" : ""}`}>
      <img
        className="chat-bubble__left"
        alt="user avatar"
        src={message.avatar}
      />
      <div className="chat-bubble__right">
        <p className="user-name">{message.name}</p>
        <p className="user-message">{message.text}</p>
      </div>
    </div>
  );
};

export default Messages;

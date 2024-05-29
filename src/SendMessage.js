import React, { useState } from "react";
import { auth, db } from "./firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import SendIcon from "@mui/icons-material/Send";
const SendMessage = ({ scroll }) => {
  const [message, setMessage] = useState("");
  const sendMessage = async (event) => {
    event.preventDefault();
    if (message.trim() == "") alert("Please enter a text to send");
    const { uid, displayName, photoURL } = auth.currentUser;
    await addDoc(collection(db, "message"), {
      text: message,
      name: displayName,
      avatar: photoURL,
      createdAt: serverTimestamp(),
      uid,
    });
    console.log(message, displayName, photoURL);
    setMessage("");
    scroll.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <form className="send-message" onSubmit={(event) => sendMessage(event)}>
      <label htmlFor="messageInput" hidden>
        Enter Message
      </label>
      <input
        id="messageInput"
        value={message}
        name="messageInput"
        type="text"
        className="form-input__input"
        placeholder="type message..."
        onChange={(e) => setMessage(e.target.value)}
      />
      <button type="submit">
        {" "}
        <SendIcon />
      </button>
    </form>
  );
};

export default SendMessage;

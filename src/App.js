import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Navbar";
import { useState } from "react";
import Chatbox from "./Chatbox";
import Welcome from "./Welcome";
import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";

function App() {
  const [user] = useAuthState(auth);
  return (
    <div className="App">
      <Navbar />
      {!user ? <Welcome /> : <Chatbox />}
    </div>
  );
}

export default App;

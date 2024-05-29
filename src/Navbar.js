import React, { useState } from "react";
import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";

const NavBar = () => {
  const [user] = useAuthState(auth);
  const imgUrl =
    "https://www.pngmart.com/files/16/Speech-Chat-Icon-Transparent-PNG.png";

  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider);
  };
  const signOut = () => {
    auth.signOut();
  };
  return (
    <nav className="nav-bar">
      <img src={imgUrl} style={{ height: "100%" }}></img>
      {user ? (
        <button onClick={signOut} className="sign-out" type="button">
          Sign Out
        </button>
      ) : (
        ""
      )}
    </nav>
  );
};
export default NavBar;

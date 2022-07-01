import "./App.css";
import React from "react";
import { auth } from "./firebase";
import { Routes, Route } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import Chat from "./components/sessions/Chat";
import Home from "./components/home/Home";
import Sessions from "./components/sessions/Sessions";
import Login from "./components/auth/Login";
import Bible from "./components/bible/Bible";
import Spinner from "react-spinkit";

function App() {
  const [user, loading] = useAuthState(auth);

  if (loading) {
    return (
      <div className="spinner">
        <Spinner name="double-bounce" color="gray" />
      </div>
    );
  }

  return (
    <div className="App">
      {!user ? (
        <Login />
      ) : (
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sessions" element={<Sessions />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/bible" element={<Bible />} />
          </Routes>
        </div>
      )}
    </div>
  );
}

export default App;

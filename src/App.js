import React from "react";
import "./App.css";
import Login from "./components/auth/Login";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Sessions from "./components/sessions/Sessions";

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path = "/login" element = { <Login /> } />
          <Route path = "/" element = { <Home /> } />
          <Route path = "/sessions" element = { <Sessions /> } />
        </Routes>
    </div>
  );
}

export default App;

import React from "react";
import "./App.css";
import Login from "./components/auth/Login";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path = "/login" element = { <Login /> } />
          <Route path = "/" element = { <Home /> } />
        </Routes>
    </div>
  );
}

export default App;

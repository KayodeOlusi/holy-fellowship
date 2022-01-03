import React from "react";
import "./App.css";
import Login from "./components/auth/Login";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Sessions from "./components/sessions/Sessions";
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './firebase'
import Spinner from 'react-spinkit'

function App() {
  const [user, loading] = useAuthState(auth);

  if(loading) {
	  return (
		  <div className="spinner">
			  <Spinner name="double-bounce" color="gray"/>
		  </div>
	  )
  }

  return (
    <div className="App">
        {
          !user ? (
              <Login />
          ) : (
			    <div>
				    <Routes>
					      <Route path = "/" element = { <Home /> } />
          			<Route path = "/sessions" element = { <Sessions /> } />
        	  </Routes>
			    </div>
          )
        }
    </div>
  );
}

export default App;

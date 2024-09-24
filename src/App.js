import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Home from './components/Home';

import { useState } from 'react';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import NoteState from './context/noteState';
import Login from './components/Login';
import SignUp from './components/SignUp';



function App() {
  const [mode, setMode] = useState('slategray');
  
  const toggleMode =()=>{
    if(mode==='slategray'){
      setMode('dark');
      document.body.style.backgroundColor ='rgb(7, 115, 115)';
    }else{
      setMode('slategray');
      document.body.style.backgroundColor ='slategray';
    }
  }

    return (
      <>
      <NoteState>
      <Router>
         <Navbar toggleMode={toggleMode}/>
         
         <div className="container justify-center">
         <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/login">
            <Login/>
          </Route>
          <Route exact path="/SignUp">
           <SignUp/>
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
        </div>
      </Router>
      </NoteState>
      </> 
      
    );
}

export default App;

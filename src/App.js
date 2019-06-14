import React from 'react';
import Main from './components/MainComponent';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import firebase from 'firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

function App() {
  return ( 
    <BrowserRouter>
      <div className="App">
       <Main/>
      </div>
    </BrowserRouter>
  );
}

export default App;

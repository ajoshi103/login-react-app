import React, { useState } from "react";
import logo from './logo.svg';
import './App.css';
import { Login } from "./components/Login";
import { Sign } from "./components/Sign";

function App() {
  const [currentForm, setCurrentForm] = useState('login');
 
  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  return (
    <div className="App">
      <header>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      {
        currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Sign onFormSwitch={toggleForm} />
      }
    </div>
  );
}

export default App;

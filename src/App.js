import React, { useState } from "react";

import "./App.css";
import { Login } from "./components/Login";
import { Sign } from "./components/Sign";

function App() {
  const [currentForm, setCurrentForm] = useState("login");

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  };

  return (
    <div className="App">
   
      {currentForm === "login" ? (
        <Login onFormSwitch={toggleForm} />
      ) : (
        <Sign onFormSwitch={toggleForm} />
      )}
    </div>
  );
}

export default App;

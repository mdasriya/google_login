// src/App.js
import React from "react";
import GoogleAuth from "./components/GoogleAuth";
import "./components/GoogleAuth.css"; // Import the CSS

function App() {
  return (
    <div className="App">
      <h1>Welcome to Google Auth </h1>
      <GoogleAuth />
    </div>
  );
}

export default App;

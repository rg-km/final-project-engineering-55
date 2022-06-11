import './App.css';
import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "./routes/Homepage";
import SignUpOption from "./routes/SignUpOption";
import LogInOption from './routes/LogInOption';
import CreateAccount from "./routes/assistant/CreateAccount";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/sing-up-option" element={<SignUpOption />} />
      <Route path="/login" element={<LogInOption />} />
      <Route path="/create-account" element={<CreateAccount />} />
    </Routes>
  );
}

export default App;

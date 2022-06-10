import './App.css';
import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "./routes/Homepage";
import SignInOption from "./routes/SignInOption";
import LogInOption from './routes/LogInOption';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/create-account" element={<SignInOption />} />
      <Route path="/login" element={<LogInOption />} />
    </Routes>
  );
}

export default App;

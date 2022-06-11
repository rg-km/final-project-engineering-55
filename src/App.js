import './App.css';
import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "./routes/Homepage";
import SignUpOption from "./routes/SignUpOption";
import LogInOption from './routes/LogInOption';
import AssistantCreateAccount from "./routes/assistant/AssistantCreateAccount";
import AssistantLogin from './routes/assistant/AssistantLogin';
import NotFound from './routes/NotFound';
import StudentLogin from './routes/student/StudentLogin';
import AssistantMain from './routes/assistant/AssistantMain';
import AssistantHome from './routes/assistant/AssistantHome';
import AssistantClasses from './routes/assistant/AssistantClasses';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/sign-up-option" element={<SignUpOption />} />
      <Route path="/sign-up-option/assistant" element={<AssistantCreateAccount />} />
      <Route path="/login" element={<LogInOption />}>
        <Route path="assistant">
          <Route index element={<AssistantLogin />} />
        </Route>
        <Route path="student">
          <Route index element={<StudentLogin />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
      <Route path="/assistant/main" element={<AssistantMain />}>
        <Route path="home">
          <Route index element={<AssistantHome/>} />
        </Route>
        <Route path="classes">
          <Route index element={<AssistantClasses/>} />
        </Route>
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;

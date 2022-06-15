import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "./routes/Homepage";
import SignUpOption from "./routes/SignUpOption";
import LogInOption from "./routes/LogInOption";
import AssistantCreateAccount from "./routes/assistant/AssistantCreateAccount";
import AssistantLogin from "./routes/assistant/AssistantLogin";
import NotFound from "./routes/NotFound";
import StudentLogin from "./routes/student/StudentLogin";
import AssistantMain from "./routes/assistant/AssistantMain";
import AssistantHome from "./routes/assistant/AssistantHome";
import AssistantClasses from "./routes/assistant/AssistantClasses";
import StudentCreateAccount from "./routes/student/StudentCreateAccount";
import AssistantClassMain from "./routes/assistant/AssistantClassMain";
import AssistantClassPosts from "./routes/assistant/AssistantClassPosts";
import AssistantClassAssignments from "./routes/assistant/assistant-class-assignment/AssistantClassAssignments";
import AssistantClassQuiz from "./routes/assistant/AssistantClassQuiz";
import AssistantClassMembers from "./routes/assistant/AssistantClassMembers";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/sign-up-option" element={<SignUpOption />} />
      <Route
        path="/sign-up-option/assistant"
        element={<AssistantCreateAccount />}
      />
      <Route
        path="/sign-up-option/student"
        element={<StudentCreateAccount />}
      />
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
          <Route index element={<AssistantHome />} />
        </Route>
        <Route path="classes">
          <Route index element={<AssistantClasses />} />
        </Route>
      </Route>
      <Route path="/assistant/main/classes" element={<AssistantClassMain />}>
        <Route path="posts">
          <Route index element={<AssistantClassPosts />} />
        </Route>
        <Route path="assignments">
          <Route index element={<AssistantClassAssignments />} />
        </Route>
        <Route path="quiz">
          <Route index element={<AssistantClassQuiz />} />
        </Route>
        <Route path="members">
          <Route index element={<AssistantClassMembers />} />
        </Route>
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;

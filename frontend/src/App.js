import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "./routes/Homepage";
import SignUpOption from "./routes/SignUpOption";
import LogInOption from "./routes/LogInOption";
import NotFound from "./routes/NotFound";

import AssistantCreateAccount from "./routes/assistant/AssistantCreateAccount";
import AssistantLogin from "./routes/assistant/AssistantLogin";
import AssistantMain from "./routes/assistant/AssistantMain";
import AssistantHome from "./routes/assistant/AssistantHome";
import AssistantClasses from "./routes/assistant/AssistantClasses";
import AssistantClassMain from "./routes/assistant/AssistantClassMain";
import AssistantClassPosts from "./routes/assistant/assistant-class-posts/AssistantClassPosts";
import AssistantClassAssignments from "./routes/assistant/assistant-class-assignment/AssistantClassAssignments";
import AssistantClassQuiz from "./routes/assistant/assistant-class-quiz/AssistantClassQuiz";
import AssistantClassMembers from "./routes/assistant/assistant-class-members/AssistantClassMembers";
import AddQuiz from "./routes/assistant/assistant-add-quiz/AddQuiz"

import StudentCreateAccount from "./routes/student/StudentCreateAccount";
import StudentLogin from "./routes/student/StudentLogin";
import StudentMain from "./routes/student/StudentMain";
import StudentHome from "./routes/student/StudentHome";
import StudentClasses from "./routes/student/StudentClasses";
import StudentClassMain from "./routes/student/StudentClassMain";
import StudentClassPosts from "./routes/student/student-class-posts/StudentClassPosts";
import StudentClassAssignments from "./routes/student/student-class-assignment/StudentClassAssignments";
import StudentClassQuiz from "./routes/student/student-class-quiz/StudentClassQuiz";
import StudentClassMembers from "./routes/student/student-class-members/StudentClassMembers";
import StudentQuiz from "./routes/student/student-quiz/StudentQuiz";
import StudentAssignments from "./routes/student/student-assignments/StudentAssignments";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/sign-up-option" element={<SignUpOption />} />
      <Route path="/login" element={<LogInOption />}>
        <Route path="assistant">
          <Route index element={<AssistantLogin />} />
        </Route>
        <Route path="student">
          <Route index element={<StudentLogin />} />
        </Route>
      </Route>

      {/* assistant pages */}
      <Route
        path="/sign-up-option/assistant"
        element={<AssistantCreateAccount />}
      />
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
      <Route
        path="/assistant/main/classes/quiz/id"
        element={<AddQuiz />}
      />

      {/* student pages */}
      <Route
        path="/sign-up-option/student"
        element={<StudentCreateAccount />}
      />
      <Route path="/student/main" element={<StudentMain />}>
        <Route path="home">
          <Route index element={<StudentHome />} />
        </Route>
        <Route path="classes">
          <Route index element={<StudentClasses />} />
        </Route>
      </Route>
      <Route path="/student/main/classes" element={<StudentClassMain />}>
        <Route path="posts">
          <Route index element={<StudentClassPosts />} />
        </Route>
        <Route path="assignments">
          <Route index element={<StudentClassAssignments />} />
        </Route>
        <Route path="quiz">
          <Route index element={<StudentClassQuiz />} />
        </Route>
        <Route path="members">
          <Route index element={<StudentClassMembers />} />
        </Route>
      </Route>
      <Route path="/student/main/classes/quiz/id" element={<StudentQuiz />} />
      <Route path="/student/main/classes/assignments/id" element={<StudentAssignments />} />

      {/* page not found */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;

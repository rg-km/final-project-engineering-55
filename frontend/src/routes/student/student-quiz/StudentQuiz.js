import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { quiz as quizData } from "./QuizData";
import { Container, Navbar } from "react-bootstrap";
import BackButton from "../../../components/BackButton";

const StudentQuiz = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [quiz, setQuiz] = useState(quizData);
    const [score, setScore] = useState({
      correct: 0,
      false: 0,
    });
  
    const { question, options } = quiz[currentIndex];
  
    const checkScore = () => {
      const questionAnswered = quiz.filter((item) => item.selected);
      const questionCorrect = questionAnswered.filter((item) =>
        item.options.find(
          (option) => option.correct && option.selected === option.correct
        )
      );
      setScore({
        correct: questionCorrect.length,
        false: quiz.length - questionCorrect.length,
      });
    };
  
    useEffect(() => {
      checkScore();
    }, [quiz]);
  
    const nextQuestion = () => {
      if (quiz.length - 1 === currentIndex) return;
      setCurrentIndex(currentIndex + 1);
    };
  
    const previousQuestion = () => {
      if (currentIndex === 0) return;
      setCurrentIndex(currentIndex - 1);
    };
  
    const selectOption = (indexSelected, indexOptionSelected) => {
      setQuiz(
        quiz.map((item, index) =>
          index === indexSelected
            ? {
                ...item,
                selected: true,
                options: options.map((item, index) =>
                  index === indexOptionSelected
                    ? { ...item, selected: true }
                    : { ...item, selected: false }
                ),
              }
            : item
        )
      );
    };
  
    return (
      <>
      <Navbar bg="light" className="shadow">
        <Container style={{width: "80%"}}>
          <BackButton />
          <span style={{fontWeight:"bold", fontSize:"40px"}}>
              <center>Kuis</center>
          </span>
          <span style={{fontWeight:"bold", fontSize:"40px"}}>
            Score: {score.correct} - {score.false}
          </span>
          </Container>
      </Navbar>
      <Container style={{width: "80%"}}>
        <div className="card mb-3 mt-5">
          <div
            className="card-body"
            style={{
              display: "flex",
              padding: 10,
              flexWrap: "wrap",
            }}
          >
            {quiz.map((item, index) => (
              <div
                key={index}
                className="border border-primary font-weight-bold"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: 40,
                  width: 40,
                  marginRight: 5,
                  marginBottom: 5,
                  borderRadius: 5,
                  cursor: "pointer",
                  backgroundColor:
                    index === currentIndex
                      ? "greenyellow "
                      : item?.selected
                      ? "grey"
                      : "transparent",
                }}
                onClick={() => setCurrentIndex(index)}
              >
                {index + 1}
              </div>
            ))}
          </div>
        </div>
        <div className="card">
          <div
            className="card-header bg-white font-weight-bold"
            style={{
              fontSize: 20,
            }}
          >
            {currentIndex + 1}. {question}
          </div>
          <div className="card-body">
            {options.map((item, index) => (
              <div
                style={{
                  display: "flex",
                  justifyItems: "center",
                  alignItems: "center",
                  fontSize: 18,
                }}
                key={index}
              >
                <div
                  style={{
                    height: 20,
                    width: 20,
                    borderRadius: 100,
                    backgroundColor: item?.selected ? "greenyellow" : "grey",
                    cursor: "pointer",
                    marginRight: 5,
                  }}
                  onClick={() => selectOption(currentIndex, index)}
                />
                {item.title}
              </div>
            ))}
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            paddingTop: 10,
          }}
        >
          <button
            className="btn btn-info col-sm-2"
            onClick={() => previousQuestion()}
            disabled={currentIndex === 0 ? true : false}
          >
            Previous
          </button>
          {quiz.length - 1 === currentIndex ? (
            <Link
              className="btn btn-success col-sm-2"
              to="/student/main/classes/quiz"
            >
              Finish
            </Link>
          ) : (
            <button
              className="btn btn-primary col-sm-2"
              onClick={() => nextQuestion()}
            >
              Next
            </button>
          )}
        </div>
      </Container>
      </>
    );
}

export default StudentQuiz

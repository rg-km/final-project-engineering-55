import { useState } from "react";
import { Container, Row, Col, Form, Card, FloatingLabel, Navbar, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import BackButton from "../../../components/BackButton";
import QuizFormModal from "./QuizFormModal";
import QuizList from "./QuizList";

const AddQuiz = () => {
    const [formModalType, setFormModalType] = useState("Tambah");
    const [quizId, setQuizId] = useState(0);

    const [quiz, setQuiz] = useState([
        // {
        //     id: 1,
        //     question: "Pertanyaan pertama",
        //     option1: "Opsi 1",
        //     option2: "Opsi 2",
        //     option3: "Opsi 3",
        //     option4: "Opsi 4",
        // },
    ]);
    quiz.sort((a,b) => a.id - b.id);

    return (
        <div>
         <Navbar
            style={{position:"fixed", width:"100%", top: 0, right: 0, zIndex: 9999}}
            bg="light" className="shadow">
            <Container>
            <BackButton />
            <span style={{fontWeight:"bold", fontSize:"40px"}}>
                <center>Buat Kuis</center>
            </span>
            <Link to="/assistant/main/classes/quiz" style={{textDecoration: 'none'}}>
                  <Button
                    className="assistant-class-quiz-button"
                    variant="success"
                  >
                    + Tugaskan
                  </Button>
                </Link>
            </Container>
        </Navbar>
        <Container 
            style={{marginTop: "110px"}}
            className="assistant-class-quiz-container">
        <Row className="justify-content-center">
            <Col xs={6} className="mx-3">
            <Card className="px-3 py-3 shadow-sm">
                <h5 className="mb-4 text-center">Detail Kuis</h5>
                <Form.Group>
                    <FloatingLabel
                    controlId="floatingInput"
                    label="Judul Kuis"
                    className="mb-2"
                    >
                    <Form.Control
                        type="input"
                        name="Judul Kuis"
                    />
                    </FloatingLabel>
                </Form.Group>
                <Form.Group>
                    <FloatingLabel
                    controlId="floatingInput"
                    label="Deskripsi"
                    className="mb-2"
                    >
                    <Form.Control
                        as="textarea"
                        rows={3}
                        name="Deskripsi"
                    />
                    </FloatingLabel>
                </Form.Group>
                <Form.Group>
                    <FloatingLabel
                    controlId="floatingInput"
                    label="Tenggat Waktu"
                    className="mb-2"
                    >
                    <Form.Control
                    type="input"
                    name="Tenggat"
                    />
                    </FloatingLabel>
                </Form.Group>
            </Card>
            <br/>
            {quiz.map((quizItem, index) => (
                <QuizList
                key={quizItem.id}
                id={quizItem.id}
                index={index}
                quizItem={quizItem}
                quizList={quiz}
                setQuiz={setQuiz}
                />
            ))}
            </Col>
            <Col>
            <QuizFormModal
                quizList={quiz}
                setQuizList={setQuiz}
                formModalType={formModalType}
                setFormModalType={setFormModalType}
                quizId={quizId}
                />
            </Col>
        </Row>
        </Container>
        </div>
    );
};

export default AddQuiz;

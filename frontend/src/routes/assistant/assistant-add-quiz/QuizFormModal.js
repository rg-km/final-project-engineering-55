import { useEffect, useState } from "react";
import { Button, Form, Card, FloatingLabel } from "react-bootstrap";

const QuizFormModal = (props) => {
  const {
    quizList,
    setQuizList,
    formModalType,
    setFormModalType,
  } = props;

  const [formValues, setFormValues] = useState({});

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (formModalType === "Tambah") {
      setQuizList([
        {
          id: quizList.length + 1,
          ...formValues,
        },
        ...quizList,
      ]);
    }
    setFormValues({});
    setFormModalType("Tambah");
  };

  useEffect(() => {
    if (formModalType === "Tambah") {
      setFormValues({});
    }
  }, [formModalType]);

  return (
    <Card className="my-2 px-4 mx-5 py-3 shadow"
      style={{position:"fixed", width:"35%", top: 100, right: 60 }}
    >
        <h5 className="mb-3 text-center">Buat Pertanyaan</h5>
        <Form.Group>
            <FloatingLabel
            controlId="floatingInput"
            label="Question"
            className="mb-2"
            >
            <Form.Control
                as="textarea"
                rows={3}
                name="question"
                placeholder="Masukkan Pertanyaan"
                onChange={handleInputChange}
                value={formValues.question ? formValues.question : ""}
            />
            </FloatingLabel>
        </Form.Group>
        <Form.Group>
            <FloatingLabel
            controlId="floatingInput"
            label="Answer 1"
            className="mb-2"
            >
            <Form.Control
              type="input"
              name="option1"
              placeholder="Masukkan jawaban 1"
              onChange={handleInputChange}
              value={formValues.option1 ? formValues.option1 : ""}
            />
            </FloatingLabel>
        </Form.Group>
        <Form.Group>
            <FloatingLabel
            controlId="floatingInput"
            label="Answer 2"
            className="mb-2"
            >
            <Form.Control
            type="input"
            name="option2"
            placeholder="Masukkan jawaban 2"
            onChange={handleInputChange}
            value={formValues.option2 ? formValues.option2 : ""}
            />
            </FloatingLabel>
        </Form.Group>
        <Form.Group>
            <FloatingLabel
            controlId="floatingInput"
            label="Answer 3"
            className="mb-2"
            >
            <Form.Control
              type="input"
              name="option3"
              placeholder="Masukkan jawaban 3"
              onChange={handleInputChange}
              value={formValues.option3 ? formValues.option3 : ""}
            />
            </FloatingLabel>
        </Form.Group>
        <Form.Group>
            <FloatingLabel
            controlId="floatingInput"
            label="Answer 4"
            className="mb-3"
            >
            <Form.Control
              type="input"
              name="option4"
              placeholder="Masukkan jawaban 4"
              onChange={handleInputChange}
              value={formValues.option4 ? formValues.option4 : ""}
            />
            </FloatingLabel>
        </Form.Group>
        <div class="col-md-12 text-center">
            <span class="d-grid gap-2">
            <Button variant="primary" onClick={handleSubmit}>
                Simpan
            </Button>
            </span>
        </div>
    </Card>
  );
};

export default QuizFormModal;

import { Button, Col, Row, Card } from "react-bootstrap";

const QuizListItems = ({
  id,
  kuisItem,
  setFormModalType,
  setShowFormModal,
  setKuisId,
}) => {
  const onClickEdit = () => {
    setFormModalType("Edit");
    setShowFormModal(true);
    setKuisId(id);
  };

  return (
    <Card
      className="px-3 py-2 "
      style={{
        display: "flex",
        justifyContent: "space-between",
        marginBottom: "10px",
        marginRight: "3px",
        marginLeft: "3px",
      }}
    >
      <Row className="justify-content-center">
        <Col xl={13} md={10} className="d-inline p-1 m-1">
          <h5>{kuisItem.judul}</h5>
          <div>
            <p>{kuisItem.deskripsi} </p>
          </div>
          <div>Tenggat waktu: {kuisItem.tenggat}</div>
        </Col>
        <Col className="d-inline p-1 m-1">
          <Button variant="primary" onClick={onClickEdit}>
            Edit
          </Button>
        </Col>
      </Row>
    </Card>
  );
};

export default QuizListItems;

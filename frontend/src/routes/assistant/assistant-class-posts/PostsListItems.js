import React from "react";
import { VscAccount } from "react-icons/vsc";
import { Card, Row, Col, Button, ListGroup } from "react-bootstrap";
import { BiEditAlt } from "react-icons/bi";

const PostsListItems = ({
  id,
  postItem,
  setFormModalType,
  setShowFormModal,
  setPostId,
}) => {
  const onClickEdit = () => {
    setFormModalType("Edit");
    setShowFormModal(true);
    setPostId(id);
  };

  return (
    <div>
      <Card className="assistant-class-post-items">
        <ListGroup variant="flush">
          <ListGroup.Item>
            <Row>
              <Col xs={1}>
                <VscAccount size={40} className="mx-2" />
              </Col>
              <Col xs={9}>
                <h6>Nama Asisten</h6>
                <h6
                  style={{
                    fontSize: "15px",
                    fontWeight: "normal",
                  }}
                >
                  Diposting pada 12:12
                </h6>
              </Col>
              <Col xs={2}>
                <Button
                  className="assistant-class-post-edit"
                  variant="outline-dark"
                  onClick={onClickEdit}
                >
                  <BiEditAlt /> Edit
                </Button>
              </Col>
            </Row>
          </ListGroup.Item>
          <ListGroup.Item>
            <Row>
              <Col xs={1}></Col>
              <Col>
                <h6>{postItem.description}</h6>
              </Col>
            </Row>
            <Row>
              <Col xs={1}></Col>
              <Col>
                <h6 style={{ marginBottom: "2px" }}>{postItem.file}</h6>
              </Col>
            </Row>
          </ListGroup.Item>
        </ListGroup>
      </Card>
    </div>
  );
};

export default PostsListItems;

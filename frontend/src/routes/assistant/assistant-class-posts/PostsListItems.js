import React from "react";
import { VscAccount } from "react-icons/vsc";
import { Card, Row, Col, Button, ListGroup } from "react-bootstrap";
import { BiEditAlt } from "react-icons/bi";
import { AiOutlineDelete } from "react-icons/ai";

const PostsListItems = ({
  id,
  postItem,
  postsList,
  setFormModalType,
  setShowFormModal,
  setPostId,
  setPostsList,
}) => {
  const onClickEdit = () => {
    setFormModalType("Edit");
    setShowFormModal(true);
    setPostId(id);
  };
  const handleRemoveItem = (id) => {
    setPostsList(postsList.filter(item => item.id !== id));
  };

  return (
    <div>
      <Card className="assistant-class-post-items shadow-sm">
        <ListGroup variant="flush">
          <ListGroup.Item>
            <Row>
              <Col xs={1}>
                <VscAccount size={40} className="mx-2" />
              </Col>
              <Col xs={8}>
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
              <Col>
                <span className='action-class-button'>
                  <Button
                    variant="outline-dark"
                    onClick={onClickEdit}
                  >
                  <BiEditAlt/> Edit
                  </Button>
                  &nbsp;
                  <Button
                    variant="outline-dark"
                    onClick={handleRemoveItem.bind(this, id)}
                  >
                    <AiOutlineDelete/> Hapus
                  </Button>
                </span>
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

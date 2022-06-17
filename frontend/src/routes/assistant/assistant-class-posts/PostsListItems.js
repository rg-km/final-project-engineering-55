import React from 'react'
import { VscAccount } from 'react-icons/vsc';
import { Card, Row, Col, Button, ListGroup } from 'react-bootstrap';
import { BiEditAlt } from 'react-icons/bi';

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
            <Card className='assistant-class-post-items shadow-sm'>
                <ListGroup variant="flush">
                    <ListGroup.Item>
                        <Row>
                            <Col xs={1}>
                                <VscAccount size={40} className="mx-2"/>
                            </Col>
                            <Col xs={9}>
                            <h4>Nama Asisten</h4>
                            <h6>Diposting pada 12:12</h6>
                            </Col>
                            <Col xs={2}>
                            <Button
                                className='assistant-class-post-edit'
                                variant="outline-dark"
                                onClick={onClickEdit}
                                >
                                <BiEditAlt/> Edit
                            </Button>
                            </Col>
                        </Row>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Row>
                            <Col xs={1}>
                            </Col>
                            <Col>
                            <h3>{postItem.description}</h3>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={1}>
                            </Col>
                            <Col>
                            <h3>{postItem.file}</h3>
                            </Col>
                        </Row>
                    </ListGroup.Item>
                </ListGroup>
            </Card>
        </div>
    )
}

export default PostsListItems

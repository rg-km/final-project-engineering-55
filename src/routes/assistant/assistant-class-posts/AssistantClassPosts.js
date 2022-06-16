import React, { useState } from 'react'
import { Container, Card, Row, Col, Button } from 'react-bootstrap';
import { BiEditAlt } from 'react-icons/bi';
import PostsFormModal from './PostsFormModal';
import './AssistantClassPosts.css';
import PostsListItems from './PostsListItems';

const AssistantClassPosts = () => {
  const [showFormModal, setShowFormModal] = useState(false);
  const [formModalType, setFormModalType] = useState("Tambah");
  const [postId, setPostId] = useState(0);

  const onClickAdd = () => {
    setFormModalType("Tambah");
    setShowFormModal(true);
  };
  
  const [posts, setPosts] = useState([
    // {
    //   id: 1,
    //   materi: "Materi 1",
    //   file: "File 1",
    // },
    // {
    //   id: 1,
    //   materi: "Materi 2",
    //   file: "File 2",
    // },
    // {
    //   id: 1,
    //   materi: "Materi 3",
    //   file: "File 3",
    // },
  ])
  
  return (
    <div>
      <Container className='assistant-class-post-container'>
        <Row>
          <Col xs={9} className="assistant-class-post-wrapper">
            <Card className='assistant-class-post-title shadow-sm'>
              <Row>
                <Col>
                <h3>Front End</h3>
                <h5>
                  Web Programming
                </h5>
                </Col>
                <Col>
                  <span>
                  <Button className='edit-class-button' variant="outline-dark">
                    <BiEditAlt/> Edit
                  </Button>
                  </span>
                </Col>
              </Row>
            </Card>
            <Button
              className='assistant-class-post-items shadow-sm'
              variant="outline-dark"
              onClick={onClickAdd}
            >
              <span className="add-post-caption">Mulai diskusi, unggah materi dan lainnya</span>
              <span className="add-post-icon">+</span>
            </Button>
            <PostsFormModal
              postId={postId}
              postsList={posts}
              setPostsList={setPosts}
              showFormModal={showFormModal}
              setShowFormModal={setShowFormModal}
              formModalType={formModalType}
              setFormModalType={setFormModalType}
            />
            {posts.map((post, index) => (
              <PostsListItems 
                key={index}
                id={post.id}
                postItem={post}
                setFormModalType={setFormModalType}
                setShowFormModal={setShowFormModal}
                setPostId={setPostId}
              />
            ))}
          </Col>
          <Col>
          <center>
            <h1>Jadwal</h1>
            <h4>Senin 13:30</h4>
          </center>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default AssistantClassPosts

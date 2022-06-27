import React from 'react'
import { Container, Card, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './StudentClasses.css'

const StudentClasses = () => {

  const classes = [
    {
      kelas: "Front End",
      jurusan: "Web Programming",
    },
    {
      kelas: "Back End",
      jurusan: "Web Programming",
    },
    {
      kelas: "Dev Ops",
      jurusan: "Web Programming",
    },
  ]
  
  return (
    <div>
      <Container className='student-classes-wrapper'>
        <h1 className='student-classes-title'>Kelas</h1>
        <Row>
          <Col xs={9} className="student-classes-content">
          {classes.map((item, index) => (
            <Link to="/student/main/classes/posts" style={{textDecoration: 'none'}}>
              <Card key={index} className='student-classes-card classes-background shadow-sm'>
                <span className='classes-items'>
                  <h3>{item.kelas}</h3>
                  <h5>
                  {item.jurusan}
                  </h5>
                </span>
              </Card>
            </Link>
          ))}
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default StudentClasses
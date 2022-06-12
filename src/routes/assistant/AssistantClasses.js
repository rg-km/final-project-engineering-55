import React from 'react'
import { Button, Card, CardGroup, Placeholder } from 'react-bootstrap';

const AssistantClasses = () => {
  return (
    <div><h1>Kelas {' '}
        <Button variant="outline-dark">+ Tambah Kelas</Button>
        </h1>
        <div className="d-flex justify-content-evenly">
          <Card style={{ width: '25rem' }}>
          <Card style={{ height: '10rem' }}>
            <Card.Body>
              <Card.Title>Front End</Card.Title>
              <Card.Text>
                Web Programming
              </Card.Text>
              <Button variant="primary">Masuk Kelas</Button>
            </Card.Body>
          </Card>
          </Card>

          <Card style={{ width: '25rem' }}>
          <Card style={{ height: '10rem' }}>
            <Card.Body>
              <Card.Title>Back End</Card.Title>
              <Card.Text>
                Web Programming
              </Card.Text>
              <Button variant="primary">Masuk Kelas</Button>
            </Card.Body>
          </Card>
          </Card>
        </div>
    </div>
  );
}

export default AssistantClasses
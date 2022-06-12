import React from 'react'
import { Button, Card, CardGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const AssistantClasses = () => {
  return (
    <div>
      <h1>Kelas</h1>
      <CardGroup>
        <Link to="/assistant/main/classes/posts" style={{textDecoration: 'none'}}>
        <Card>
          <Card style={{ width: '25rem' }}>
          <Card style={{ height: '10rem' }}>
            <Card.Body>
              <Card.Title>Front End</Card.Title>
              <Card.Text>
                Web Programming.
              </Card.Text>
              <Button variant="primary">Masuk Kelas</Button>
            </Card.Body>
        </Card>
        </Card>
        </Card>
        </Link>
        <Link to="/assistant/main/classes/posts" style={{textDecoration: 'none'}}>
        <Card>
          <Card style={{ width: '25rem' }}>
          <Card style={{ height: '10rem' }}>
            <Card.Body>
              <Card.Title>Back End</Card.Title>
              <Card.Text>
                Web Programming.
              </Card.Text>
              <Button variant="primary">Masuk Kelas</Button>
            </Card.Body>
        </Card>
        </Card>
        </Card>
        </Link>
      </CardGroup>
    </div>
  )
}

export default AssistantClasses
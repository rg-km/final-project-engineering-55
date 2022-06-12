import React from 'react'
import { Button, Card, CardGroup } from 'react-bootstrap';

const AssistantClasses = () => {
  return (
    <div>
      <h1>Kelas</h1>
      <CardGroup>
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
      </CardGroup>
    </div>
  )
}

export default AssistantClasses
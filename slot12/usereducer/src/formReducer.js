import React, { useReducer } from 'react';
import { Container, Form, Row, Col, Card } from 'react-bootstrap';

function formReducer(state, action) {
  switch (action.type) {
    case "SET_NAME":
      return { ...state, name: action.value };
    case "SET_AGE":
      return { ...state, age: action.value };
    default:
      return state;
  }
}

function ChangeNameAge() {
  const [state, dispatch] = useReducer(formReducer, { name: '', age: '' });

  return (
    <Container className="mt-4">
      <Card className="p-4">
        <h3 className="mb-4">Change Name & Age</h3>
        <Form>
          <Form.Group as={Row} className="mb-3" controlId="formName">
            <Form.Label column sm={2}>Name:</Form.Label>
            <Col sm={10}>
              <Form.Control
                type="text"
                placeholder="Enter name"
                value={state.name}
                onChange={(e) => dispatch({ type: 'SET_NAME', value: e.target.value })}
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3" controlId="formAge">
            <Form.Label column sm={2}>Age:</Form.Label>
            <Col sm={10}>
              <Form.Control
                type="text"
                placeholder="Enter age"
                value={state.age}
                onChange={(e) => dispatch({ type: 'SET_AGE', value: e.target.value })}
              />
            </Col>
          </Form.Group>
        </Form>

        <div className="mt-4">
          <h5>Name: {state.name}</h5>
          <h5>Age: {state.age}</h5>
        </div>
      </Card>
    </Container>
  );
}

export default ChangeNameAge;

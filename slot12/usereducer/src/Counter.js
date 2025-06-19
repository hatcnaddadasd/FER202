import React, { useReducer } from "react";
import { Container, Button, Card, ButtonGroup } from "react-bootstrap";

function counterReducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    case "RESET":
      return { count: 0 };
    default:
      return state;
  }
}

function Counter() {
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });

  return (
    <Container className="mt-4">
      <Card className="p-4 text-center">
        <h3>Counter: {state.count}</h3>
        <ButtonGroup className="mt-3">
          <Button variant="success" onClick={() => dispatch({ type: "INCREMENT" })}>+</Button>
          <Button variant="danger" onClick={() => dispatch({ type: "DECREMENT" })}>-</Button>
          <Button variant="secondary" onClick={() => dispatch({ type: "RESET" })}>Reset</Button>
        </ButtonGroup>
      </Card>
    </Container>
  );
}

export default Counter;

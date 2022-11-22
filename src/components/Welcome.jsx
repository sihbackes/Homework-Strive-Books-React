import { Container, Jumbotron } from "react-bootstrap";

const Welcome = () => {
  return (
    <Jumbotron fluid>
      <Container>
        <h1>Strive Books</h1>
        <p>Only the best books!</p>
      </Container>
    </Jumbotron>
  );
};

export default Welcome;

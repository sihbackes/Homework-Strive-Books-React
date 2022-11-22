import horror from "../data/horror.json";
import { Container, Card, Row, Col } from "react-bootstrap";

const LatestRelease = () => {
  return (
    <Container>
      <h1>Horror</h1>
      <Row sm={2} md={3} lg={4}>
        {horror.map((book) => (
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={book.img} />
              <Card.Body>
                <Card.Title>{book.title}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};
export default LatestRelease;

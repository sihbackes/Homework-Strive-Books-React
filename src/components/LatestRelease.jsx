import horror from "../data/horror.json";
import { Container, Card, Row, Col } from "react-bootstrap";

const LatestRelease = () => {
  return (
    <Container>
      <h1>Horror</h1>
      <Row sm={2} md={3} lg={4}>
        {horror.map((book) => (
          <Col key={book.asin}>
            <Card style={{ margin: ".5rem" }}>
              <Card.Img variant="top" className="image" src={book.img} />
              <Card.Body>
                <Card.Title className="truncate">{book.title}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};
export default LatestRelease;

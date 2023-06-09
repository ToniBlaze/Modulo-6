import { Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default function SinglePost({ post, i }) {
  return (
    <Col className="my-5" xs={11}>
      <Card className="d-flex flex-row">
        <Col xs={4}>
          <Card.Img variant="left" src="holder.js/100px180" />
        </Col>
        <Col xs={8}>
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Col>
      </Card>
    </Col>
  );
}

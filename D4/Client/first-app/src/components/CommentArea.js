import { useEffect, useState } from "react";
import { Row, Col, Button, Container } from "react-bootstrap";
import axios from "axios";

let API = "http://localhost:3000/posts/";

export default function CommentArea({ id }) {
  const [comments, setComments] = useState([]);
  let postId = id

  const data = Object.values(comments);

  // Chiamata per Dati dei COMMENTI del POST
  useEffect(() => {
    axios
      .get(`http://localhost:3000/posts/${id}/comments`)
      .then((res) => {
        console.log(res.data);
        setComments(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div>
      <hr></hr>
      <p className="text-black fs-4 fw-semibold mb-0">Recensioni:</p>
      {data.map((item, index) => (
        <SingleComment item={item} key={index} postId={postId} />
      ))}
    </div>
  );
}

function SingleComment({ item, key, postId }) {
  console.log(postId, item._id);
  return (
    <Container className="my-4 p-1" key={key}>
      <Row className="border-custom py-3 comments-border">
        <Col xs={9} className="d-flex align-items-center">
          <Col>
            Autore: <b className="text-secondary">{item.author}</b>
          </Col>
          <Col>
            Commento: <b className="text-secondary">"{item.content}"</b>
          </Col>
        </Col>
        <Col
          className="d-flex align-items-center justify-content-center"
          xs={3}>
          <Button className="btn btn-danger">
            Elimina
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

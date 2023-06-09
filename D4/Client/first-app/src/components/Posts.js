import React from "react";
import { Container, Row } from "react-bootstrap";
import SinglePost from "./SinglePost";

export default function Posts({ data }) {
  console.log(data);
    
  return (
    <Container>
      <Row>
        {data.map((post, i) => (
          <SinglePost post={post} key={i} />
        ))}
      </Row>
    </Container>
  );
}

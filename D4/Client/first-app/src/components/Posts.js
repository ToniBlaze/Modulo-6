import React from "react";
import { Container, Row } from "react-bootstrap";
import SinglePost from "./SinglePost";

export default function Posts({ data }) {
  console.log(data);
  const dataArray = Object.values(data);

  return (
    <Container>
      <Row>
        {dataArray.map((post) => (
          <SinglePost post={post} key={post._id} />
        ))}
      </Row>
    </Container>
  );
}

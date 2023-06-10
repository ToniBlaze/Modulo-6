import React from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
// import { useEffect, useState } from "react";




//PAGINA (ROUTE) PRINCIPALE DEL LIBRO
export default function PostDetails() {
  const navigate = useNavigate();

  //Torna ad Home
  const backToHome = () => {
    navigate("/");
    window.scrollTo(0, 0);
  };

  //Prendi "ID" da paramentro della ROUTE
  let { id } = useParams();


  return (
    <Container fluid>
      <Row>
        <Col className="my-5">
          <Row>
            <div>
              {id}
            </div>
          </Row>
          <Button className="px-4 py-2 my-4 btn-secondary" onClick={backToHome}>
            Back to Home
          </Button>
          <Row>
            <Col xs={12}>
              {/* Qua ci andra la commentArea */}
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

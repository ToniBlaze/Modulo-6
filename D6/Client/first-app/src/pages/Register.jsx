import React from "react";
import RegisterForm from "../components/RegisterForm";
import { Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();

  //Torna ad Home
  const backToHome = () => {
    navigate("/");
    window.scrollTo(0, 0);
  };

  return (
    <Container className="my-5 w-25">
      <Button className="px-3 py-2 my-4 btn-secondary" onClick={backToHome}>
        Back to Home
      </Button>
      <RegisterForm />
    </Container>
  );
}

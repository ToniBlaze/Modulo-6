import axios from "axios";
import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function NewPost() {
  const [obj, setObj] = useState({});
  const navigate = useNavigate();

  //Torna ad Home
  const backToHome = () => {
    navigate("/");
    window.scrollTo(0, 0);
  };

  // PRENDI I DATI DEL FORM
  const handlerChange = (e) => {
    //verifica i value in tutti gli input e restituisce il valore
    let { name, value } = e.target;
    setObj({
      ...obj,
      [name]: value,
    });

    console.log(e.target.name);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();

    axios.post("http://localhost:3000/posts", obj).then((res) => {
      console.log(res);
      navigate("/");
    });
  };

  return (
    <Container>
      <Button className="px-3 py-2 my-4 btn-secondary" onClick={backToHome}>
        Back to Home
      </Button>
      <h1 className="mt-2 mb-5">Aggiungi il tuo Post</h1>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label className="mt-4 mb-2">Chi è l'autore?</Form.Label>
          <Form.Control
            className="text-center"
            onChange={handlerChange}
            type="text"
            name="author.name"
            placeholder="Autore del post..."
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label className="mt-4 mb-2">Tempo di lettura?</Form.Label>
          <Form.Control
            className="text-center"
            onChange={handlerChange}
            type="text"
            name="readTime.value"
            placeholder="inserisci un numero"
          />
          <Form.Control
            className="text-center"
            onChange={handlerChange}
            type="text"
            name="readTime.unit"
            placeholder="secondi, minuti..."
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label className="mt-4 mb-2">Che argomento tratta?</Form.Label>
          <Form.Control
            className="text-center"
            onChange={handlerChange}
            type="text"
            name="category"
            placeholder="Categoria del post..."
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label className="mt-4 mb-2">
            Quale è il titolo del Post?
          </Form.Label>
          <Form.Control
            className="text-center"
            onChange={handlerChange}
            type="text"
            name="titolo"
            placeholder="Titolo del post..."
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label className="mt-4 mb-2">
            Scrivi il contenuto del tuo post:
          </Form.Label>
          <Form.Control
            className="text-center"
            onChange={handlerChange}
            type="text"
            name="content"
            placeholder="Contenuto del post..."
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label className="mt-4 mb-2">Carica una immagine:</Form.Label>
          <Form.Control
            className="text-center"
            onChange={handlerChange}
            type="text"
            name="cover"
            placeholder="metti URL immagine..."
          />
        </Form.Group>
        <Button
          className="mt-4"
          onClick={handleSubmit}
          variant="primary"
          type="button">
          Invia
        </Button>
      </Form>
    </Container>
  );
}

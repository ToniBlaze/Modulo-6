import axios from "axios";
import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";


export default function NewPost() {
  const [obj, setObj] = useState({});
  const [selectedFile, setSelectedFile] = useState(null);
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

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();

    const data = new FormData();
    data.append("uploadFile", selectedFile);

    axios
    .post("http://localhost:3000/upload", data)
    .then((res) => {
      console.log(res.data);
    })
    .catch((error) => {
      console.log(error);
    });

    axios
      .post("http://localhost:3000/posts", obj)
      .then((res) => {
        console.log(res.data);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
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
            onChange={handleFileChange}
            type="file"
            name="uploadFile" 
            placeholder="Carica file..."
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

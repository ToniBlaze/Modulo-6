import axios from 'axios'
import React, { useState } from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import { useNavigate, Navigate } from 'react-router-dom'


export default function NewPost() {
    const [obj, setObj] = useState({})
    const navigate = useNavigate()

       //Torna ad Home
   const backToHome = () => {
    navigate("/");
    window.scrollTo(0, 0);
  };


    const handlerChange = (e)=>{
        

        let {name, value} = e.target;
        setObj({
            ...obj,
            [name]:value

        })

    }

    const handleSubmit =(e)=>{
        e.preventDefault()
        axios.post("http://localhost:3000/posts", obj)
        .then(response => Navigate("/"))
    }


    return (
        <Container>
              <Button className="px-4 py-2 my-4 btn-secondary" onClick={backToHome}>
  Back to Home
</Button>
            <h1>New Post</h1>
            <Form>
                <Form.Group className="mb-3">
                    <Form.Label>category</Form.Label>
                    <Form.Control onChange={handlerChange}   type="text" name="category" placeholder="" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>title</Form.Label>
                    <Form.Control onChange={handlerChange}  type="text" name="titolo" placeholder="" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>content</Form.Label>
                    <Form.Control onChange={handlerChange}  type="text" name="content" placeholder="" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>cover</Form.Label>
                    <Form.Control onChange={handlerChange}   type="text" name="cover" placeholder="" />
                </Form.Group>
                <Button onClick={handleSubmit} variant="primary" type="button">
                    Submit
                </Button>
            </Form>
        </Container>
    )
}




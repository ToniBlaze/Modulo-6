import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";


export default function MyNav() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
    <Container>
      <Navbar.Brand className="me-4" href="/">Posts</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Link className='nav-link' to="/">Home</Link>
          <Link className='nav-link' to="/about">About</Link>
          <Link className='nav-link px-4' to="/newpost">New Post</Link>
          <Link className='nav-link float-ed ' to="/register">Sign In</Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
}

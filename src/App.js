import './App.css';
import Intro from './Intro/Intro';
import Experience from './Experience/Experience';
import About from './About/About';
import Passion from './Passion/Passion';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar'
import { Container } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <Navbar variant="light" expand="lg" fixed='top'>
  <Container>
    <Navbar.Brand href="#intro">
      Nghia Hoang
      </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#intro">Home</Nav.Link>
        <Nav.Link href="#exp">Projects</Nav.Link>
        <Nav.Link href="#about">About Me</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
      <Intro/>
      <Experience/>
      <About/>
      <Passion/>
    </div>
  );
}

export default App;

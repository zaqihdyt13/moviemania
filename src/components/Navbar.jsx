import { Button, Container, Image, Nav, Navbar } from "react-bootstrap";
import logo from "../images/logo.png"

const NavbarComp = () => {
  return (
    <Navbar bg="dark" data-bs-theme="dark"  sticky="top" className="w-100 px-md-5 px-sm-4 px-2">
      <Container fluid>
        <Navbar.Brand href="/">
            <Image src={logo} alt="logo" className="logo" />
        </Navbar.Brand>
        <Nav className="ms-auto d-sm-flex d-none">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/categories">Categories</Nav.Link>
          <Button href="/login" variant="warning" className="text-dark fw-semibold ms-3">Login</Button>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavbarComp;

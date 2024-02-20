import { Button, Container, Image, Nav, Navbar } from "react-bootstrap";
import logo from "../images/logo.png";
import { useEffect, useState } from "react";

const NavbarComp = () => {
  const [isLoggedIn, setIsLoggedIn] = useState("");
  const [isScrolled, setIsScrolled] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 25);
    // setIsScrolled(window.scrollY > 665);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isScrolled]);

  return (
    <Navbar
      // bg="dark"
      // data-bs-theme="dark"
      fixed="top"
      // className="w-100 px-md-5 px-sm-4 px-2"
      className={`${
        isScrolled ? "bg-warning" : "bg-transparent"
      } w-100 px-md-5 px-sm-4 px-2 transition-all duration-300`}
    >
      <Container fluid>
        <Navbar.Brand href="/">
          <Image src={logo} alt="logo" className="logo" />
        </Navbar.Brand>
        <Nav className="ms-auto d-sm-flex d-none">
          <Nav.Link
            href="/"
            className={`${
              isScrolled ? "text-dark" : "text-warning"
            } nav-link fw-semibold`}
          >
            Home
          </Nav.Link>
          <Nav.Link
            href="/categories"
            className={`${
              isScrolled ? "text-dark" : "text-warning"
            } nav-link fw-semibold`}
          >
            Categories
          </Nav.Link>
          {isLoggedIn ? (
            <Button
              onClick={() => handleLogout()}
              className={`${
                isScrolled
                  ? "bg-dark text-warning"
                  : "bg-warning text-dark"
              } nav-btn fw-semibold ms-3 border-0`}
            >
              Logout
            </Button>
          ) : (
            <Button
              href="/login"
              onClick={() => handleLogout()}
              className={`${
                isScrolled
                  ? "bg-dark text-warning"
                  : "bg-warning text-dark"
              } nav-btn fw-semibold ms-3 border-0`}
            >
              Login
            </Button>
          )}
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavbarComp;

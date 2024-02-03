import { Button, Container, Image } from "react-bootstrap";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";
import { VscDebugBreakpointData } from "react-icons/vsc";

const Footer = () => {
  return (
    <Container
      fluid
      // style={{ height: "150px" }}
      className="bg-dark px-md-4 px-1 py-5 d-flex flex-md-row flex-column justify-content-around align-items-center mt-4 gap-lg-5 gap-sm-4 gap-2"
    >
      <Link to={"/"} className="d-flex h-100 align-items-center text-decoration-none">
        <Image
          src={logo}
          alt="logo"
          style={{ width: "40px" }}
          className="logo"
        />
        <h2 className="text-warning fs-4 fw-bold fst-italic">
          M
          <span className="text-decoration-underline text-light fst-normal">
            ovieMania
          </span>
        </h2>
      </Link>

      <span className="text-warning"><VscDebugBreakpointData/></span>

      <div className="w-md-25 w-75">
        <h4 className="text-white text-md-start text-center fs-6"><span className="text-warning">A</span>bout</h4>
        <p style={{ color: "rgba(255, 255, 255, 0.4)" }} className="text-md-start text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
          tempora minus sit, error qui, aut quia cupiditate debitis.
        </p>
      </div>

      <span className="text-warning"><VscDebugBreakpointData/></span>

      <div className="d-flex flex-column">
        <h4 className="text-white fs-6 text-md-start text-center">Pa<span className="text-warning">g</span>es</h4>
        <Link
          to={"/"}
          className="footer-link text-md-start text-center"
        >
          Home
        </Link>
        <Link
          to={"/categories"}
          className="footer-link text-md-start text-center"
        >
          Categories
        </Link>
      </div>

      <span className="text-warning"><VscDebugBreakpointData/></span>

      <div className="d-flex flex-column justify-content-center align-items-center">
        <Button
          href="/login"
          variant="warning"
          className="text-dark fw-semibold ms-md-3 ms-0"
        >
          Login
        </Button>
      </div>
    </Container>
  );
};

export default Footer;

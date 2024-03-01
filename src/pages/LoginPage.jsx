import { Button, Container, Form, Image } from "react-bootstrap";
import login from "../images/login.jpg";
import { FaArrowLeft } from "react-icons/fa";
import GoogleOAuth from "../components/authentication/GoogleOAuth";

const LoginPage = () => {
  return (
    <div className="w-100 vh-100 d-flex justify-content-center align-items-center bg-warning overflow-hidden">
      <Button
        href="/"
        variant="dark"
        id="button"
        className="btn-back position-absolute top-0 start-0 d-flex align-items-center gap-2 fs-4 fw-bold text-warning px-4"
      >
        <FaArrowLeft className="fs-4" />
      </Button>
      <Container
        fluid
        className="h-100 d-flex flex-column justify-content-center align-items-center"
      >
        <Form
          id="form"
          className="bg-warning px-md-5 px-sm-3 px-2 py-sm-4 py-2 d-flex flex-column justify-content-center rounded-3 shadow-lg"
        >
          {/* <h1 className="mb-md-5 mb-3 text-warning text-decoration-underline fw-bold">
            L<span className="text-dark fst-italic fw-normal">ogin</span>
          </h1>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>
              <span className="text-warning fw-bold">E</span>mail address
            </Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>
              <span className="text-warning fw-bold">P</span>assword
            </Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="warning" type="submit" className="fw-semibold">
            Submit
          </Button> */}
          <GoogleOAuth />
        </Form>
      </Container>
      <Container className="w-100 h-100 position-absolute d-flex justify-content-center align-items-center overflow-hidden">
        <Image src={login} id="image" className=" rounded-5 shadow-lg" />
      </Container>
    </div>
  );
};

export default LoginPage;

// AIzaSyCCokhAFMFrti36EfLyvzafEROEnl9Me_0 (google api key)

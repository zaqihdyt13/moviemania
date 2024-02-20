import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { Button, Container } from "react-bootstrap";
import PropTypes from "prop-types";

const Pagination = (props) => {
  return (
    <Container
      fluid
      className="bg-dark d-flex justify-content-between align-items-center px-5 py-2 mt-4 mb-3"
    >
      <Button
        variant="warning"
        onClick={() => props.handlePagination(props.page - 1)}
        style={{ width: "100px" }}
        className="btn-prev border border-2 d-sm-block d-none"
      >
        Preview
      </Button>
      <Button
        variant="warning"
        onClick={() => props.handlePagination(props.page - 1)}
        style={{ width: "40px", height: "40px" }}
        className="btn-prev border border-2 d-sm-none d-flex justify-content-center align-items-center"
      >
        <IoIosArrowBack />
      </Button>
      <span className="fw-bold text-white">
        {props.page} of {props.totalPages}
      </span>
      <Button
        variant="warning"
        onClick={() => props.handlePagination(props.page + 1)}
        style={{ width: "100px" }}
        className="btn-next border border-2 d-sm-block d-none"
      >
        Next
      </Button>
      <Button
        variant="warning"
        onClick={() => props.handlePagination(props.page + 1)}
        style={{ width: "40px", height: "40px" }}
        className="btn-next border border-2 d-sm-none d-flex justify-content-center align-items-center"
      >
        <IoIosArrowForward />
      </Button>
    </Container>
  );
};

Pagination.propTypes = {
  handlePagination: PropTypes.func,
  page: PropTypes.number,
  totalPages: PropTypes.number,
};

export default Pagination;

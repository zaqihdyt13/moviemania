import { Button, Container } from "react-bootstrap";
import { FaRegStar } from "react-icons/fa";
import PropTypes from "prop-types";

const FirstMovie = (props) => {
  return (
    <Container fluid className="bg-primary p-0">
      <div
        style={{
          backgroundImage: `url(${props.backdropPath})`,
        }}
        className="movie-poster"
      >
        <div className="movie-poster-filter d-flex flex-column justify-content-start align=items-center px-sm-5 px-2">
          <h1 className="movie-title text-light fw-bold text-center ms-sm-auto rounded-3">
            {props.title}
          </h1>
          <h2 className="text-light mt-5">{props.firstMovie.title}</h2>
          <h4 className="text-light fs-6 d-flex align-items-center gap-1">
            <FaRegStar className="fs-5 mb-1 text-warning" />{" "}
            {props.firstMovie.vote_average} / 10
          </h4>
          <Button
            href={`/detail/${props.firstMovie.id}`}
            variant="warning"
            style={{ width: "fit-content" }}
            className="fw-semibold"
          >
            See more details
          </Button>
        </div>
      </div>
    </Container>
  );
};

FirstMovie.propTypes = {
  firstMovie: PropTypes.string,
  backdropPath: PropTypes.string,
};

export default FirstMovie;

import { Col, Container, Image, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { AiOutlineStar } from "react-icons/ai";

const MovieList = (props) => {
  return (
    <Container fluid className="d-flex justify-content-center">
      <Row className="py-md-3 d-flex justify-content-center gap-2">
        {props.movies.map((movie) => {
          return (
            <Col
              key={movie.id}
              className="movie-wrapper p-0 mb-4 d-flex justify-content-center col-auto"
            >
              <Link to={`/detail/${movie.id}`}>
                <Image
                  src={`https://image.tmdb.org/t/p/w342/${movie.poster_path}`}
                  rounded
                  // style={{ width: "273px" }}
                  className="movie-images"
                />
                <div className="movie-hover w-100 h-100 text-white position-absolute top-0 start-0 py-4 px-3">
                  <h2 className="fs-5 fw-bold mb-3">{movie.title}</h2>
                  <h4 className="fs-6">Release: {movie.release_date}</h4>
                  <h4 className="fw-bold fs-6 mt-2 d-flex align-items-center gap-1">
                    <AiOutlineStar className="text-warning" />
                    <span>{movie.vote_average} / 10</span>
                  </h4>
                </div>
              </Link>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

MovieList.propTypes = {
  movies: PropTypes.array,
};

export default MovieList;

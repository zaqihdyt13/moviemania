import { Container, Row, Col, Image } from "react-bootstrap";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { AiOutlineStar } from "react-icons/ai";

const PopularMovie = (props) => {
  return (
    <Container fluid className="d-flex flex-column align-items-center px-md-5">
      <div className="d-flex flex-wrap align-items-center justify-content-between w-100 mt-4 mb-md-0 mb-4">
        <h1 className="d-inline text-white fs-3 bg-dark py-1 px-3 rounded-3">
          Po<span className="text-warning fst-italic fw-bold">p</span>ular{" "}
          <span className="text-warning fst-italic fw-bold">M</span>ovies
        </h1>
        <Link to={"/popular"} className="ms-auto">
          All popular movies
        </Link>
      </div>
      <Row className="py-md-3 d-flex justify-content-center gap-2">
        {props.popularMovies.map((popularMovie) => {
          return (
            <Col
              key={popularMovie.id}
              className="movie-wrapper p-0 mb-4 d-flex justify-content-center col-auto"
            >
              <Link to={`/detail/${popularMovie.id}`}>
                <Image
                  src={`https://image.tmdb.org/t/p/w342/${popularMovie.poster_path}`}
                  rounded
                  // style={{ width: "273px" }}
                  className="movie-images"
                />
                <div className="movie-hover w-100 h-100 text-white position-absolute top-0 start-0 py-4 px-3">
                  <h2 className="fs-5 fw-bold mb-3">{popularMovie.title}</h2>
                  <h4 className="fs-6">Release: {popularMovie.release_date}</h4>
                  <h4 className="fw-bold fs-6 mt-2 d-flex align-items-center gap-1">
                    <AiOutlineStar className="text-warning" />
                    <span>{popularMovie.vote_average} / 10</span>
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

PopularMovie.propTypes = {
  popularMovies: PropTypes.array,
};

export default PopularMovie;

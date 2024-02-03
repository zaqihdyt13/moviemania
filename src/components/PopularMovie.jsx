import { Container, Row, Col, Image } from "react-bootstrap";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const PopularMovie = (props) => {
  return (
    <Container fluid className="d-flex flex-column align-items-center px-md-5">
      <div className="d-flex flex-wrap align-items-center justify-content-between w-100 mt-4 mb-md-0 mb-4" >
        <h1 className="d-inline text-white fs-3 bg-dark py-1 px-3 rounded-3">
          Po<span className="text-warning fst-italic fw-bold">p</span>ular{" "}
          <span className="text-warning fst-italic fw-bold">M</span>ovies
        </h1>
        <Link to={"/popular"} className="ms-auto">
          All popular movies
        </Link>
      </div>
      <Row className="py-md-3 d-flex justify-content-center gap-2">
        {props.popularMovies.map((popularMovie) => (
          <Col
            key={popularMovie.id}
            className="p-0 mb-4 d-flex justify-content-center col-auto"
          >
            <Link to={`/detail/${popularMovie.id}`}>
              <Image
                src={`https://image.tmdb.org/t/p/w342/${popularMovie.poster_path}`}
                rounded
                // style={{ width: "273px" }}
                className="movie-images"
              />
            </Link>
          </Col>
        ))}
      </Row>
    </Container>
    // <Container fluid className="mt-4 d-flex flex-column mx-auto px-md-5">
    // <div className="d-flex flex-wrap align-items-center justify-content-between">
    //   <h1 className="d-inline text-white fs-3 bg-dark py-1 px-3 rounded-3">
    //     Po<span className="text-warning fst-italic fw-bold">p</span>ular{" "}
    //     <span className="text-warning fst-italic fw-bold">M</span>ovies
    //   </h1>
    //   <Link to={"/popular"} className="ms-auto">All popular movies</Link>
    // </div>
    //   <Row className="mt-4 justify-content-start mx-auto px-3">
    //     {props.popularMovies.map((popularMovie) => (
    //       <Col key={popularMovie.id} className="mb-4 col-6 col-md-3">
    //         <Link to={`/detail/${popularMovie.id}`}>
    //           <Image
    //             src={`https://image.tmdb.org/t/p/w200/${popularMovie.poster_path}`}
    //             rounded
    //             style={{ width: "100%" }}
    //           />
    //           {/* <Image src="https://placehold.co/260x400" rounded /> */}
    //         </Link>
    //       </Col>
    //     ))}
    //   </Row>
    // </Container>
  );
};

PopularMovie.propTypes = {
  popularMovies: PropTypes.array,
};

export default PopularMovie;

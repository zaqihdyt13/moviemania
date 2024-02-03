import axios from "axios";
import { useEffect, useState } from "react";
import NavbarComp from "../components/Navbar";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import { FaRegStar } from "react-icons/fa";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const apiKey = "bd0af39a72aa4f0031d784df2908bbb0";

const TopRatedMoviePage = () => {
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [firstTopRatedMovie, setFirstTopRatedMovie] = useState("");

  useEffect(() => {
    const getTopRatedMovie = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&page=${page}`
        );
        setTotalPages(response.data.total_pages);
        setTopRatedMovies(response.data.results.slice(1, 17));
        setFirstTopRatedMovie(response.data.results[0]);
        console.log(response.data);
      } catch (err) {
        console.error("Error fetching Popular Movie Page: ", err);
      }
    };

    getTopRatedMovie();
  }, [page]);

  const handlePagination = async (newPage) => {
    if (newPage > 0 && newPage < totalPages) {
      setPage(newPage);
    }
  };

  const backdropPath = `https://image.tmdb.org/t/p/w1280/${firstTopRatedMovie.backdrop_path}`;
  return (
    <div>
      <NavbarComp />

      <Container fluid className="bg-primary p-0">
        <div
          style={{
            backgroundImage: `url(${backdropPath})`,
          }}
          className="movie-poster"
        >
          <div className="movie-poster-filter d-flex flex-column justify-content-start align=items-center px-sm-5 px-2">
            <h1 className="movie-title text-light fw-bold text-center ms-sm-auto mt-3 rounded-3">
              TO<span className="text-warning">P</span> RATED{" "}
              <span className="text-warning">M</span>OVIES
            </h1>
            <h2 className="text-light mt-5">{firstTopRatedMovie.title}</h2>
            <h4 className="text-light fs-6 d-flex align-items-center gap-1">
              <FaRegStar className="fs-5 mb-1 text-warning" />{" "}
              {firstTopRatedMovie.vote_average} / 10
            </h4>
            <Button
              href={`/detail/${firstTopRatedMovie.id}`}
              variant="warning"
              style={{ width: "fit-content" }}
              className="fw-semibold"
            >
              See more details
            </Button>
          </div>
        </div>
      </Container>

      <Container
        fluid
        className="bg-dark d-flex justify-content-between align-items-center px-5 py-2 mt-4"
      >
        <Button
          variant="warning"
          onClick={() => handlePagination(page - 1)}
          style={{ width: "100px" }}
          className="btn-prev border border-2 d-sm-block d-none"
        >
          Preview
        </Button>
        <Button
          variant="warning"
          onClick={() => handlePagination(page - 1)}
          style={{ width: "40px", height: "40px" }}
          className="btn-prev border border-2 d-sm-none d-flex justify-content-center align-items-center"
        >
          <IoIosArrowBack />
        </Button>
        <span className="fw-bold text-white">
          {page} of {totalPages}
        </span>
        <Button
          variant="warning"
          onClick={() => handlePagination(page + 1)}
          style={{ width: "100px" }}
          className="btn-next border border-2 d-sm-block d-none"
        >
          Next
        </Button>
        <Button
          variant="warning"
          onClick={() => handlePagination(page + 1)}
          style={{ width: "40px", height: "40px" }}
          className="btn-next border border-2 d-sm-none d-flex justify-content-center align-items-center"
        >
          <IoIosArrowForward />
        </Button>
      </Container>

      <Container fluid className="d-flex justify-content-center">
        <Row className="p-md-5 p-3 justify-content-cennter">
          {topRatedMovies.map((topRatedMovie) => (
            <Col
              key={topRatedMovie.id}
              className="justify-content-center p-0 d-flex mb-4"
            >
              <Link to={`/detail/${topRatedMovie.id}`}>
                <Image
                  src={`https://image.tmdb.org/t/p/w342/${topRatedMovie.poster_path}`}
                  rounded
                  // style={{ width: "273px" }}
                  className="movie-images"
                />
              </Link>
            </Col>
          ))}
        </Row>
      </Container>

      <Footer />
    </div>
  );
};

export default TopRatedMoviePage;

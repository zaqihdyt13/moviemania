import { Tab, Tabs, Image, Button } from "react-bootstrap";
import NavbarComp from "../components/Navbar";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const apiKey = "bd0af39a72aa4f0031d784df2908bbb0";

const CategoriesMoviePage = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [key, setKey] = useState("popular");

  useEffect(() => {
    const getPopularMovie = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`
        );
        setPopularMovies(response.data.results);
      } catch (err) {
        console.error("Error fetching Popular Movies: ", err);
      }
    };

    getPopularMovie();
  }, []);

  useEffect(() => {
    const getTopRatedMovie = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}`
        );
        setTopRatedMovies(response.data.results);
      } catch (err) {
        console.error("Error fetching Popular Movies: ", err);
      }
    };

    getTopRatedMovie();
  }, []);

  useEffect(() => {
    const getTrendingMovie = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/trending/movie/day?api_key=${apiKey}`
        );
        setTrendingMovies(response.data.results);
      } catch (err) {
        console.error("Error fetching Popular Movies: ", err);
      }
    };

    getTrendingMovie();
  }, []);

  return (
    <div>
      <NavbarComp />

      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="mb-3 bg-warning border px-sm-5 pt-3 d-flex justify-content-sm-start justify-content-center"
        // defaultActiveKey="popular"
        // id="uncontrolled-tab-example"
        // className="mb-3"
      >
        <Tab eventKey="popular" title="Popular">
          <div className="d-flex flex-column justify-content-center align-items-center gap-1">
            <div
              // style={{ width: "50%" }}
              className="categories-content ms-md-5 ms-0 mb-5 mt-3 px-3 d-flex flex-column"
            >
              <h1 className="mb-4">
                Po<span className="text-warning fw-bold fst-italic">p</span>
                ular <span className="text-warning fw-bold fst-italic">M</span>
                ovies
              </h1>
              <p className="category-descript">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reprehenderit libero quaerat eius aperiam similique cumque
                deserunt ullam a ea nostrum suscipit quod velit aliquid culpa
                pariatur aspernatur impedit alias quisquam, numquam expedita!
                Libero a facere in sint vitae dolore accusantium excepturi.
                Voluptatum quibusdam ad neque?
              </p>
              <Button
                href="/popular"
                variant="warning"
                className="fw-semibold ms-sm-auto"
              >
                See More Popular Movies
              </Button>
            </div>
            <div className="d-flex flex-wrap justify-content-center gap-1">
              {popularMovies.map((popularMovie) => (
                <Link to={`/detail/${popularMovie.id}`} key={popularMovie.id}>
                  <Image
                    src={`https://image.tmdb.org/t/p/w200/${popularMovie.poster_path}`}
                    className="category-images"
                  />
                </Link>
              ))}
            </div>
          </div>
        </Tab>
        <Tab eventKey="toprated" title="Top Rated">
          <div className="d-flex flex-column justify-content-center align-items-center gap-1">
            <div
              className="categories-content ms-md-5 ms-0 mb-5 mt-3 px-3 d-flex flex-column"
            >
              <h1 className="mb-4">
                To<span className="text-warning fw-bold fst-italic">p</span>
                rated <span className="text-warning fw-bold fst-italic">M</span>
                ovies
              </h1>
              <p className="category-descript">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reprehenderit libero quaerat eius aperiam similique cumque
                deserunt ullam a ea nostrum suscipit quod velit aliquid culpa
                pariatur aspernatur impedit alias quisquam, numquam expedita!
                Libero a facere in sint vitae dolore accusantium excepturi.
                Voluptatum quibusdam ad neque?
              </p>
              <Button
                href="/toprated"
                variant="warning"
                className="fw-semibold ms-sm-auto"
              >
                See More Top Rated Movies
              </Button>
            </div>
            <div className="d-flex flex-wrap justify-content-center gap-1">
              {topRatedMovies.map((topRatedMovie) => (
                <Link to={`/detail/${topRatedMovie.id}`} key={topRatedMovie.id}>
                  <Image
                    src={`https://image.tmdb.org/t/p/w200/${topRatedMovie.poster_path}`}
                    className="category-images"
                  />
                </Link>
              ))}
            </div>
          </div>
        </Tab>
        <Tab eventKey="trending" title="Trending">
          <div className="d-flex flex-column justify-content-center align-items-center gap-1">
            <div
              className="categories-content ms-md-5 ms-0 mb-5 mt-3 px-3 d-flex flex-column"
            >
              <h1 className="mb-4">
                Tren<span className="text-warning fw-bold fst-italic">d</span>
                ing <span className="text-warning fw-bold fst-italic">M</span>
                ovies
              </h1>
              <p className="category-descript">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reprehenderit libero quaerat eius aperiam similique cumque
                deserunt ullam a ea nostrum suscipit quod velit aliquid culpa
                pariatur aspernatur impedit alias quisquam, numquam expedita!
                Libero a facere in sint vitae dolore accusantium excepturi.
                Voluptatum quibusdam ad neque?
              </p>
            </div>
            <div className="d-flex flex-wrap justify-content-center gap-1">
              {trendingMovies.map((trendingMovie) => (
                <Link to={`/detail/${trendingMovie.id}`} key={trendingMovie.id}>
                  <Image
                    src={`https://image.tmdb.org/t/p/w200/${trendingMovie.poster_path}`}
                    className="category-images"
                  />
                </Link>
              ))}
            </div>
          </div>
        </Tab>
      </Tabs>

      <Footer />
    </div>
  );
};

export default CategoriesMoviePage;

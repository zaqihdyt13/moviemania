import NavbarComp from "../components/Navbar";
import { useEffect, useState } from "react";
import axios from "axios";
import Footer from "../components/Footer";
import Pagination from "../components/movie/Pagination";
import FirstMovie from "../components/movie/FirstMovie";
import MovieList from "../components/movie/MovieList";

const apiKey = "bd0af39a72aa4f0031d784df2908bbb0";

const PopularMoviePage = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [firstMovie, setFirstMovie] = useState("");

  useEffect(() => {
    const getPopularMovie = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&page=${page}`
        );
        // console.log("popular page", response.data)
        setTotalPages(response.data.total_pages);
        setMovies(response.data.results.slice(1, 19));
        setFirstMovie(response.data.results[0]);
        console.log(response.data);
      } catch (err) {
        console.error("Error fetching Popular Movie Page: ", err);
      }
    };

    getPopularMovie();
  }, [page]);

  const handlePagination = async (newPage) => {
    if (newPage > 0 && newPage < totalPages) {
      setPage(newPage);
    }
  };

  const backdropPath = `https://image.tmdb.org/t/p/w1280/${firstMovie.backdrop_path}`;

  return (
    <div>
      <NavbarComp />
      <FirstMovie
        firstMovie={firstMovie}
        backdropPath={backdropPath}
        title={"POPULAR MOVIES"}
      />
      <Pagination
        handlePagination={handlePagination}
        page={page}
        totalPages={totalPages}
      />
      <MovieList movies={movies} />
      <Footer />
    </div>
  );
};

export default PopularMoviePage;

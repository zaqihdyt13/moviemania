import axios from "axios";
import { useEffect, useState } from "react";
import NavbarComp from "../components/Navbar";
import Footer from "../components/Footer";
import Pagination from "../components/movie/Pagination";
import MovieList from "../components/movie/MovieList";
import FirstMovie from "../components/movie/FirstMovie";

const apiKey = "bd0af39a72aa4f0031d784df2908bbb0";

const TopRatedMoviePage = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [firstMovie, setFirstMovie] = useState("");

  useEffect(() => {
    const getTopRatedMovie = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&page=${page}`
        );
        setTotalPages(response.data.total_pages);
        setMovies(response.data.results.slice(1, 17));
        setFirstMovie(response.data.results[0]);
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

  const backdropPath = `https://image.tmdb.org/t/p/w1280/${firstMovie.backdrop_path}`;
  return (
    <div>
      <NavbarComp />
      <FirstMovie
        firstMovie={firstMovie}
        backdropPath={backdropPath}
        title={"TOP RATED MOVIES"}
      />
      <Pagination
        handlePagination={handlePagination}
        page={page}
        totalPages={totalPages}
      />
      <MovieList movies={movies} backdropPath={backdropPath} />
      <Footer />
    </div>
  );
};

export default TopRatedMoviePage;

import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Image } from "react-bootstrap";
import { useParams } from "react-router-dom";
import NavbarComp from "../components/Navbar";
import YouTube from "react-youtube";

const apiKey = "bd0af39a72aa4f0031d784df2908bbb0";

const DetailPage = () => {
  const [detailMovies, setDetailMovie] = useState([]);
  const [movieVideos, setMovieVideos] = useState("");
  const { id } = useParams("");

  useEffect(() => {
    const getDetailMovie = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`
        );
        console.log(response.data);
        setDetailMovie(response.data);
      } catch (err) {
        console.log("Error fetching detail movies: ", err);
      }
    };

    getDetailMovie();
  }, [id]);

  useEffect(() => {
    const getMovieVideo = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${apiKey}`
        );
        console.log(response.data);
        setMovieVideos(response.data.results);
      } catch (err) {
        console.error("Error fetching Movie Video: ", err);
      }
    };

    getMovieVideo();
  }, [id]);

  const backdropPath = `https://image.tmdb.org/t/p/w1280/${detailMovies.backdrop_path}`;

  return (
    <div className="w-100 min-vh-100">
      <NavbarComp />
      <div
        style={{ backgroundImage: `url(${backdropPath})` }}
        className="bg-detail w-100 h-100"
      >
        <div className="bg-filter-detail d-flex justify-content-between align-items-start py-5 px-sm-5 px-3">
          <div className="w-100 h-100 d-flex flex-column justify-content-start mt-4">
            <h1 className="text-light fs-1">{detailMovies.original_title}</h1>
            <h2 className="text-light fs-4 mb-3">
              <span className="text-warning">Title:</span> {detailMovies.title}
            </h2>
            <h3 className="text-warning fs-5">
              {detailMovies.vote_average}{" "}
              <span className="text-light">/ 10</span>
            </h3>

            <div className="d-none">tes</div>

            <div className="movie-genres d-flex flex-wrap align-items-center mt-3 px-2 py-1">
              <span className="me-2 mb-1">Genres:</span>
              {detailMovies.genres?.map((genre) => (
                <span
                  key={genre.id}
                  className="border border-light px-3 pt-2 pb-1"
                >
                  <h3 className="text-light fs-6">{genre.name}</h3>
                </span>
              ))}
            </div>
            <p className="movie-overview text-light fs-6 w-md-50 mt-3">
              {detailMovies.overview}
            </p>

            <Button
              href={`https://www.youtube.com/watch?v=${movieVideos[1]?.key}`}
              variant="success"
              style={{ width: "140px" }}
              className="fw-bold"
            >
              Watching Now
            </Button>

            <div className="mt-5">
              <h3 className="text-light fs-4 text-decoration-underline">
                Watch <span className="text-warning">Trailer</span>
              </h3>
              {movieVideos && (
                <YouTube
                  videoId={movieVideos[0]?.key}
                  opts={{ width: "320", height: "215" }}
                />
              )}
            </div>
          </div>
          <div
            style={{ width: "300px", backgroundColor: "rgba(0, 0, 0, 0.3)" }}
            className="d-lg-flex d-none flex-column py-4 gap-2 px-2 rounded-2"
          >
            <Image
              rounded
              src={`https://image.tmdb.org/t/p/w200/${detailMovies.poster_path}`}
              className="mx-auto"
            ></Image>
            <div className="d-flex flex-wrap justify-content-center w-50 p-0 mx-auto w-auto">
              {detailMovies.production_companies?.map((company) => (
                <span key={company.id}>
                  <h3 className="fs-6 text-light text-center">
                    {company.name}{" "}
                    <span className="text-warning">
                      ({company.origin_country})
                    </span>
                  </h3>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;

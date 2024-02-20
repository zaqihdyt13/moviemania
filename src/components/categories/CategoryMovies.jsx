import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { AiOutlineStar } from "react-icons/ai";

const CategoryMovies = (props) => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center gap-1">
      <div className="categories-content ms-md-5 ms-0 mb-5 mt-3 px-3 d-flex flex-column">
        <h1 className="mb-4">{props.title}</h1>
        <p className="category-descript">{props.descript}</p>
        <Button
          href={props.link}
          variant="warning"
          className="fw-semibold ms-sm-auto"
        >
          See More {props.title}
        </Button>
      </div>
      <div className="d-flex flex-wrap justify-content-center gap-1">
        {props.movies.map((movie) => (
          <Link to={`/detail/${movie.id}`} key={movie.id} className="movie-wrapper">
            <Image
              src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
              className="category-images"
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
        ))}
      </div>
    </div>
  );
};

export default CategoryMovies;

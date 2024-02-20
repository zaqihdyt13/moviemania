import { Tab, Tabs } from "react-bootstrap";
import NavbarComp from "../components/Navbar";
import { useEffect, useState } from "react";
import axios from "axios";
import Footer from "../components/Footer";
import CategoryMovies from "../components/categories/CategoryMovies";

const apiKey = "bd0af39a72aa4f0031d784df2908bbb0";

const categoryDescript = [
  {
    descript:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit libero quaerat eius aperiam similique cumque deserunt ullam a ea nostrum suscipit quod velit aliquid culpa pariatur aspernatur impedit alias quisquam, numquam expedita! Libero a facere in sint vitae dolore accusantium excepturi. Voluptatum quibusdam ad neque?",
  },
  {
    descript:
      "Lorem ipsum dolor sit amet consectetur. aperiam similique cumque deserunt ullam a ea nostrum suscipit quod velit aliquid culpa pariatur aspernatur impedit alias quisquam, numquam expedita! Libero a facere in sint vitae dolore accusantium excepturi. Voluptatum quibusdam ad neque?",
  },
  {
    descript:
      "Lorem ipsum dolor eius. cumque deserunt ullam a ea nostrum suscipit quod velit aliquid culpa pariatur aspernatur impedit alias quisquam, numquam expedita! Libero a facere in sint vitae dolore accusantium excepturi. Voluptatum quibusdam ad neque?",
  },
];

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
      <div className="categories-page bg-dark">tes</div>
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="mb-3 bg-warning border px-sm-5 pt-3 d-flex justify-content-sm-start justify-content-center"
      >
        <Tab eventKey="popular" title="Popular">
          <CategoryMovies
            title={"Popular Movies"}
            descript={categoryDescript[0].descript}
            movies={popularMovies}
            link={"/popular"}
          />
        </Tab>
        <Tab eventKey="toprated" title="Top Rated">
          <CategoryMovies
            title={"Top Rated Movies"}
            descript={categoryDescript[1].descript}
            movies={topRatedMovies}
            link={"/toprated"}
          />
        </Tab>
        <Tab eventKey="trending" title="Trending">
          <CategoryMovies
            title={"Trending Movies"}
            descript={categoryDescript[2].descript}
            movies={trendingMovies}
          />
        </Tab>
      </Tabs>
      <Footer />
    </div>
  );
};

export default CategoriesMoviePage;

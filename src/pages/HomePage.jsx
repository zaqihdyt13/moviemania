import { useEffect, useState } from "react";
import Hero from "../components/Hero";
import NavbarComp from "../components/Navbar";
import PopularMovie from "../components/PopularMovie";
import UpcomingMovie from "../components/UpcomingMovie";
import axios from "axios";
import Footer from "../components/Footer";
import BannerLogin from "../components/BannerLogin";

const apiKey = "bd0af39a72aa4f0031d784df2908bbb0";

const HomePage = () => {
  const [popularMoviesNew, setPopularMoviesNew] = useState([]);
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState("");

  useEffect(() => {
    const getPopularMovie = async () => {
      try {
        const token = localStorage.getItem("token");
        // const response = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`)
        const response = await axios.get(
          `https://shy-cloud-3319.fly.dev/api/v1/movie/popular`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log("popularmovie home: ", response.data.data);
        setPopularMoviesNew(response.data.data.slice(0, 12));
        // setPopularMovies(response.data.results.slice(0, 12))
      } catch (err) {
        console.error("Error fetching Popular Movie: ", err);
      }
    };

    getPopularMovie();

    const getUpcomingMovie = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}`
        );
        console.log(response.data);
        setUpcomingMovies(response.data.results.slice(0, 10));
      } catch (err) {
        console.error("Error fetching Upcoming Movie: ", err);
      }
    };

    getUpcomingMovie();
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  return (
    <div className="w-100">
      <NavbarComp />
      <Hero />
      {isLoggedIn ? (
        <PopularMovie popularMovies={popularMoviesNew} />
      ) : (
        <BannerLogin/>
      )}
      <UpcomingMovie upcomingMovies={upcomingMovies} />
      <Footer />
    </div>
  );
};

export default HomePage;

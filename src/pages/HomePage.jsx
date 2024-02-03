import { useEffect, useState } from "react";
import Hero from "../components/Hero";
import NavbarComp from "../components/Navbar";
import PopularMovie from "../components/PopularMovie";
import UpcomingMovie from "../components/UpcomingMovie";
import axios from "axios";
import Footer from "../components/Footer";

const apiKey = "bd0af39a72aa4f0031d784df2908bbb0"

const HomePage = () => {
  const [popularMovies, setPopularMovies] = useState([])
  const [upcomingMovies, setUpcomingMovies] = useState([])

  useEffect(() => {
    const getPopularMovie = async() => {
      try {
        const response = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`)
        console.log(response.data)
        setPopularMovies(response.data.results.slice(0, 12))
      } catch(err) {
        console.error("Error fetching Popular Movie: ", err)
      }
    }

    getPopularMovie();

    const getUpcomingMovie = async() => {
      try {
        const response = await axios.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}`)
        console.log(response.data)
        setUpcomingMovies(response.data.results.slice(0, 10))
      } catch(err) {
        console.error("Error fetching Upcoming Movie: ", err)
      }
    }

    getUpcomingMovie();
  }, [])

  return (
    <div className="w-100">
      <NavbarComp />
      <Hero/>
      <PopularMovie popularMovies={popularMovies}/>
      <UpcomingMovie upcomingMovies={upcomingMovies}/>
      <Footer/>
    </div>
  );
};

export default HomePage;

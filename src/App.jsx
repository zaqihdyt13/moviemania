import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import PopularMoviePage from "./pages/PopularMoviePage";
import CategoriesMoviePage from "./pages/CategoriesMoviePage";
import TopRatedMoviePage from "./pages/TopRatedMoviePage";
import DetailPage from "./pages/DetailPage";
import { GoogleOAuthProvider } from "@react-oauth/google";

function App() {
  return (
    // <GoogleOAuthProvider clientId={"484090008271-nf386h1vi3uumqqicbkk4m5h6bphp41m.apps.googleusercontent.com"}>
    <GoogleOAuthProvider clientId={"192086567519-1vojmgi2id0r070i37bl85b6i4u29ii8.apps.googleusercontent.com"}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/popular" element={<PopularMoviePage />} />
          <Route path="/toprated" element={<TopRatedMoviePage />} />
          <Route path="/categories" element={<CategoriesMoviePage />} />
          <Route path="/detail/:id" element={<DetailPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </GoogleOAuthProvider>
  );
}

export default App;

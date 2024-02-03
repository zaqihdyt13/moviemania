import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import PopularMoviePage from './pages/PopularMoviePage';
import CategoriesMoviePage from './pages/CategoriesMoviePage';
import TopRatedMoviePage from './pages/TopRatedMoviePage';
import DetailPage from './pages/DetailPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/popular' element={<PopularMoviePage/>}/>
        <Route path='/toprated' element={<TopRatedMoviePage/>}/>
        <Route path='/categories' element={<CategoriesMoviePage/>}/>
        <Route path='/detail/:id' element={<DetailPage/>}/>
        <Route path='/login' element={<LoginPage/>}/>
      </Routes>
    </BrowserRouter>      
  );
}

export default App;

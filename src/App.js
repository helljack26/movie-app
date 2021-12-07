import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FilmDetails from './components/FilmDetails';
import FilmList from './components/FilmList';
import FavoritesCharacters from './components/FavoritesCharacters';

const App = () =>
{
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FilmList />} />
        <Route path="/:id" element={<FilmDetails />} />
        <Route path="/watch-list" element={<FavoritesCharacters />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FilmDetailsPage from './components/FilmDetailsPage';
import FilmListPage from './components/FilmListPage';
import FilmsWatchPage from './components/FilmsWatchPage';

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/movie-app" element={<FilmListPage />} />
        <Route path="/:id" element={<FilmDetailsPage />} />
        <Route path="/watch-list" element={<FilmsWatchPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

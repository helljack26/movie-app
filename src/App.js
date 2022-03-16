import { HashRouter, Routes, Route } from 'react-router-dom';
import FilmDetailsPage from './components/FilmDetailsPage';
import FilmListPage from './components/FilmListPage';
import FilmsWatchPage from './components/FilmsWatchPage';

const App = () => {

  return (
    <HashRouter>
      <Routes>
        <Route exact path="/" element={<FilmListPage />} />
        <Route path="/:id" element={<FilmDetailsPage />} />
        <Route path="/watch-list" element={<FilmsWatchPage />} />
      </Routes>
    </HashRouter>
  );
};

export default App;

import { useState, useEffect } from 'react';
import Header from '../Header';
import FilmListCard from '../FilmListCard';
import LoadingPage from '../LoadingPage';
import style from './FilmListPage.module.css'

const FilmListPage = () =>
{
  const [film, setFilms] = useState( [] );
  const [loading, setLoading] = useState( false );

  useEffect( () =>
  {
    const requestFilm = async () =>
    {
      setLoading( true )
      const response = await fetch(
        `https://api.themoviedb.org/3/trending/movie/day?api_key=4d0c68776909a3f926088d7ddf14c097`,
      );
      const data = await response.json();
      console.log( data );
      setFilms( data.results );
      setLoading( false );
    };

    requestFilm();
  }, [] );

  return (
    <>
      {loading ? (
        <LoadingPage />
      ) : (
          <>
            <Header />
            <main>
              <div className={style.popularHeader}><h2>Популярные<br />фильмы</h2></div>
              {film.map( ( { title, name, poster_path, genre_ids, id } ) =>
              {
                return (
                  <FilmListCard
                    key={id}
                    id={id}
                    name={title !== undefined ? title : name}
                    image={poster_path}
                    genre={genre_ids}
                  />
                );
              } )}
            </main>
          </>
        )}
    </>
  );
};

export default FilmListPage;

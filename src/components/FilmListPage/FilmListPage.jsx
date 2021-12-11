import { useState, useEffect } from 'react';
import Header from '../Header';
import FilmListCard from '../FilmListCard';
import style from './FilmListPage.module.css'

const FilmListPage = () =>
{
  const [film, setFilms] = useState( [] );
  const [loading, setLoading] = useState( false );

  useEffect( () =>
  {
    const requestFilm = async () =>
    {
      setLoading( true );
      const response = await fetch(
        `https://api.themoviedb.org/3/trending/movie/day?api_key=4d0c68776909a3f926088d7ddf14c097&language=ru`,
      );
      const data = await response.json();
      setLoading( false );
      console.log( data );
      setFilms( data.results );
    };

    requestFilm();
  }, [] );

  return (
    <>
      {loading ? (
        <div>...Loading</div>
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

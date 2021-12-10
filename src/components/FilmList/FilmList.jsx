import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import FilmCard from '../FilmCard';
import QueryInput from '../QueryInput';
import style from './FilmList.module.css'

const FilmList = () =>
{
  const [film, setFilms] = useState( [] );
  const [gender, setGender] = useState( '' );
  const [loading, setLoading] = useState( false );

  useEffect( () =>
  {
    const requestFilm = async () =>
    {
      const params = gender ? `?gender=${gender}` : '';
      setLoading( true );
      const response = await fetch(
        `https://api.themoviedb.org/3/trending/all/day?api_key=4d0c68776909a3f926088d7ddf14c097&language=ru`,
      );
      const data = await response.json();
      setLoading( false );
      console.log( data );
      setFilms( data.results );
    };

    requestFilm();
  }, [gender] );

  return (
    <>
      {loading ? (
        <div>...Loading</div>
      ) : (
          <>
            <header className={style.header}>
              <Link to="/favorites-characters">Watch list</Link>
              <h1>Movie api</h1>
              <QueryInput onChange={( value ) => setGender( value )} />
            </header>
            <main>
              {film.map( ( { title, name, poster_path, genre_ids, id } ) =>
              {
                return (
                  <FilmCard
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

export default FilmList;

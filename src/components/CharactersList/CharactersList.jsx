import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CharacterCard from '../CharacterCard';
import QueryInput from '../QueryInput';

const CharactersList = () =>
{
  const [film, setFilms] = useState( [] );
  const [gender, setGender] = useState( '' );
  const [loading, setLoading] = useState( false );

  useEffect( () =>
  {
    const requestCharacters = async () =>
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

    requestCharacters();
  }, [gender] );

  return (
    <>
      {loading ? (
        <div>...Loading</div>
      ) : (
          <>
            <Link to="/favorites-characters">Go to favorites</Link>
            <div>Movie api</div>
            <QueryInput onChange={( value ) => setGender( value )} />
            {film.map( ( { title, poster_path, id } ) =>
            {
              return (
                <CharacterCard
                  key={id}
                  id={id}
                  name={title}
                  image={poster_path}
                />
              );
            } )}
          </>
        )}
    </>
  );
};

export default CharactersList;

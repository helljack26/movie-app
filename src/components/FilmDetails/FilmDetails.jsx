import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const FilmDetails = () =>
{
  const { id } = useParams();
  const [details, setDetails] = useState( null );

  useEffect( () =>
  {
    const getCharacter = async () =>
    {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=4d0c68776909a3f926088d7ddf14c097&language=ru/`,
      );
      const data = await response.json();
      setDetails( data );
    };
    getCharacter();
  }, [id] );

  return (
    <>
      {details ? (
        <div>
          Character details...
          <pre>{JSON.stringify( details )}</pre>
        </div>
      ) : (
          <div>Loading...</div>
        )}
    </>
  );
};

export default FilmDetails;

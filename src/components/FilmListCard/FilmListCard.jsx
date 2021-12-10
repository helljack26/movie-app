import { Link } from 'react-router-dom';
import style from './FilmListCard.module.css';
import { genresTranslate } from './helperTranslate.js';

const FilmListCard = ( { name, image, genre, id } ) =>
{
  // Translate api code genres to russian definition 
  const genreArr = genresTranslate( genre );
  return (
    // Card block
    <Link to={`/${id}`} className={style.FilmListCard}>
      {/* Poster */}
      <img src={`https://image.tmdb.org/t/p/w500/${image}`} alt={`Постер к фильму ${name}`} />
      {/* Description block */}
      <div className={style.filmDescription}>
        {/* Film name */}
        <h3>{name}</h3>
        {/* Genres list */}
        Жанр: {genreArr}</div>
    </Link>
  );
};

export default FilmListCard;


import { Link } from 'react-router-dom';
import style from './FilmCard.module.css';
import { genresTranslate } from './helperTranslate.js';
const FilmCard = ( { name, image, genre, id } ) =>
{
  const genreArr = genresTranslate( genre )
  console.log( genreArr );
  return (
    <Link to={`/${id}`} className={style.filmCard}>
      <img src={`https://image.tmdb.org/t/p/w500/${image}`} alt="film poster" />
      <div className={style.filmDescription}>
      <h3>{name}</h3>
        Жанр: {genreArr}</div>
    </Link>
  );
};

export default FilmCard;


import { Link } from 'react-router-dom';
import style from './FilmCard.module.css';
const FilmCard = ( { name, image, genre, id } ) =>
{
  const arr = genre.map( ( genre, id ) => id !== genre.length - 1 ? <span className={style.genre} key={id}>{genresConvert( genre )}, </span> : <span className={style.genre} key={id}>{genresConvert( genre )}.</span> )
  return (
    <Link to={`/${id}`} className={style.filmCard}>
      <h3>{name}</h3>
      <img src={`https://image.tmdb.org/t/p/w500/${image}`} alt="film poster" />
      <div>Жанр: {arr}</div>
    </Link>
  );
};

export default FilmCard;

// Convert api code genres to russian definition
function genresConvert( genre )
{
  let genreContent
  switch ( genre )
  {
    case 28:
      genreContent = 'Екшн';
      break;
    case 12:
      genreContent = 'Приключения';
      break;
    case 16:
      genreContent = 'Мультики';
      break;
    case 35:
      genreContent = 'Комедия';
      break;
    case 80:
      genreContent = 'Криминал';
      break;
    case 99:
      genreContent = 'Документальный';
      break;
    case 18:
      genreContent = 'Драма';
      break;
    case 10751:
      genreContent = 'Семейный';
      break;
    case 14:
      genreContent = 'Фентези';
      break;
    case 36:
      genreContent = 'Исторический';
      break;
    case 27:
      genreContent = 'Ужасы';
      break;
    case 10402:
      genreContent = 'Мюзикл';
      break;
    case 9648:
      genreContent = 'Мистика';
      break;
    case 10749:
      genreContent = 'Романтический';
      break;
    case 878:
      genreContent = 'Научная фантастика';
      break;
    case 10770:
      genreContent = 'Телепередача';
      break;
    case 53:
      genreContent = 'Триллер';
      break;
    case 10752:
      genreContent = 'Военный';
      break;
    case 37:
      genreContent = 'Вестерн';
      break;
    case 10759:
      genreContent = 'Екшн и приключения';
      break;
    default:
      return
  }
  return genreContent;
}
import { Link } from 'react-router-dom';
import { translateGenre } from '../Helpers/translateGenre.js';
import style from './FilmListCard.module.css';
import AddToWatchListButton from '../AddToWatchListButton';

const FilmListCard = ({ name, image, genre, id, buttonType }) => {
    const genreArr = genre.length !== 0 ? <p>Genre: {translateGenre(genre)}</p> : null;
    return image !== null ? (
        <div className={style.cardBlock}>
            <Link to={`/${id}`}
                className={style.filmListCard}
            >
                <img src={`https://image.tmdb.org/t/p/w500/${image}`} alt={`Постер к фильму ${name}`} />
                <div className={style.filmDescription}>
                    <p className={style.filmName}>{name}</p>
                    <div className={style.genre} >{genreArr}</div>
                </div>
            </Link>
            <AddToWatchListButton name={name} image={image} genre={genre} id={id} buttonType={buttonType} />
        </div>
    ) : null
};

export default FilmListCard;

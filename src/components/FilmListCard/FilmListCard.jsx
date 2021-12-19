import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import style from './FilmListCard.module.css';
import { translateGenre } from '../Helpers/translateGenre.js';
import { updatePageTitle, getFilmDetailsFromApi } from '../../store/filmApi/types';
const FilmListCard = ({ name, image, genre, id }) => {
    const dispatch = useDispatch();
    // Translate api code genres to definition 
    const genreArr = genre.length !== 0 ? <p>Genre: {translateGenre(genre)}</p> : null;
    // If havent poster return nothing
    return image !== null ? (
        <>
            <div className={style.cardBlock}
                onClick={() => dispatch(getFilmDetailsFromApi(id))}>
                <Link to={`/${id}`} className={style.filmListCard}>
                    <img src={`https://image.tmdb.org/t/p/w500/${image}`} alt={`Постер к фильму ${name}`} />
                    <div className={style.filmDescription}>
                        <p className={style.filmName}>{name}</p>
                        <div className={style.genre} >{genreArr}</div>
                    </div>
                </Link>
                <button type='button' className={style.addIconBtn}
                    onClick={() => dispatch(updatePageTitle(''))}
                >
                    <img src="./img/plus.svg" alt="add to watch list" className={style.addIcon} />
                </button>
            </div>
        </>
    ) : null
};

export default FilmListCard;

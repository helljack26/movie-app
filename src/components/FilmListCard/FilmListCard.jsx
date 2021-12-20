import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import style from './FilmListCard.module.css';
import { translateGenre } from '../Helpers/translateGenre.js';
import { getFilmDetailsFromApi, addingToWatchList } from '../../store/filmApi/types';

const FilmListCard = ({ name, image, genre, id }) => {
    const dispatch = useDispatch();

    const genreArr = genre.length !== 0 ? <p>Genre: {translateGenre(genre)}</p> : null;
    const buttonArr = {
        inWatch: {
            url: './img/check-circle.svg',
            class: 'inWatch'
        },
        notInWatch: {
            url: './img/plus.svg',
            class: 'notInWatch'
        }
    }
    return image !== null ? (
        <>
            <div className={style.cardBlock}>
                <Link to={`/${id}`} className={style.filmListCard}
                    onClick={() => dispatch(getFilmDetailsFromApi(id))}>
                    <img src={`https://image.tmdb.org/t/p/w500/${image}`} alt={`Постер к фильму ${name}`} />
                    <div className={style.filmDescription}>
                        <p className={style.filmName}>{name}</p>
                        <div className={style.genre} >{genreArr}</div>
                    </div>
                </Link>
                <button type='button' className={style.addIconBtn}
                    onClick={() => dispatch(addingToWatchList(name, image, genre, id))}>
                    <img src={buttonArr.notInWatch.url} alt="add to watch list" className={style.addIcon} />
                </button>
            </div>
        </>
    ) : null
};

export default FilmListCard;

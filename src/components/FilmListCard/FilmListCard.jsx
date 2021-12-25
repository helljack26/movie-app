import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import style from './FilmListCard.module.css';
import { translateGenre } from '../Helpers/translateGenre.js';
import { updatePageTitle } from '../../store/filmApi/types';
const FilmListCard = ( { name, image, genre, id } ) =>
{
    const dispatch = useDispatch();
    // Translate api code genres to russian definition 
    const genreArr = genre.length !== 0 ? <p>Genre: {translateGenre( genre )}</p> : null;
    // If havent poster return nothing
    return image !== null ? (
        <>
            <div className={style.cardBlock} onClick={() => dispatch( updatePageTitle( 'card' ) )}>
                <Link to={`/${id}`} className={style.filmListCard}>
                    {/* Poster */}
                    <img src={`https://image.tmdb.org/t/p/w500/${image}`} alt={`Постер к фильму ${name}`} />
                    {/* Description block */}
                    <div className={style.filmDescription}>
                        {/* Film name */}
                        <p className={style.filmName}>{name}</p>
                        {/* Genres list */}
                        <div className={style.genre} >{genreArr}</div>
                    </div>
                </Link>
                <button type='button' className={style.addIconBtn}><img src="./img/plus.svg" alt="add to watch list" className={style.addIcon} /></button>
            </div>
        </>
    ) : null
};

export default FilmListCard;

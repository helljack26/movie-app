import { useSelector } from 'react-redux';
import FilmListCard from '../FilmListCard';
import style from './FilmList.module.css';
const FilmList = ( { filmList } ) =>
{
    console.log( filmList );
    const filmTitle = useSelector( state => state.filmApi.filmPage )
    return (
        filmList ? <>
            <div className={style.popularHeader}>
                <h2>{filmTitle}</h2>
            </div>
            <main>
                {filmList.map( ( { title, name, poster_path, genre_ids, id } ) =>
                {
                    return (
                        <FilmListCard key={id} id={id} name={title !== undefined ? title : name} image={poster_path} genre={genre_ids} />
                    );
                } )}
            </main>
        </> : null
    )
}

export default FilmList;
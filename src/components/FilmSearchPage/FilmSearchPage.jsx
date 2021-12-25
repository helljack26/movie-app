import FilmListCard from '../FilmListCard';
import style from './FilmSearchPage.module.css';
import { useSelector } from 'react-redux';
import { useLocation } from "react-router-dom";

const FilmSearchPage = ( { filmList } ) =>
{
    let location = useLocation();
    console.log( location );
    const searchFilm = useSelector( state => state.filmApi.searchFilm )
    return (
        filmList ? <>
            <main>
                <div className={style.popularHeader}>
                    <h2>Search<br />films</h2>
                </div>
                {searchFilm.map( ( { title, name, poster_path, genre_ids, id } ) =>
                {
                    return (
                        <FilmListCard key={id} id={id} name={title !== undefined ? title : name} image={poster_path} genre={genre_ids} />
                    );
                } )}
            </main>
        </> : null
    )
}

export default FilmSearchPage;
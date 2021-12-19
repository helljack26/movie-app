import FilmListCard from '../FilmListCard';
import { useSelector } from 'react-redux';

const FilmSearchPage = ({ filmList }) => {
    const searchFilm = useSelector(state => state.filmApi.searchFilm)
    return (
        filmList ? <>
            <main>
                <div className={style.popularHeader}>
                    <h2>Search<br />films</h2>
                </div>
                {searchFilm.map(({ title, name, poster_path, genre_ids, id }) => {
                    return (
                        <FilmListCard key={id} id={id} name={title !== undefined ? title : name} image={poster_path} genre={genre_ids} />
                    );
                })}
            </main>
        </> : null
    )
}

export default FilmSearchPage;
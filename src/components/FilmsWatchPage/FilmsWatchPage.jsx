import { useSelector, useDispatch } from 'react-redux';
import Header from '../Header';
import FilmListCard from '../FilmListCard';
import style from '../FilmList/FilmList.module.css'
import { updatePageTitle } from '../../store/filmApi/types';

const FilmsWatchPage = () => {
  const dispatch = useDispatch();
  const filmTitle = useSelector(state => state.filmApi.filmPageTitle)
  const watchList = useSelector(state => state.filmApi.watchList)
  dispatch(updatePageTitle('Watch List'))
  return (
    watchList.length !== 0 ? <>
      <Header active={'watch'} />
      <div className={style.popularHeader}>
        <h2>{filmTitle}</h2>
      </div>
      <main>
        <div className={style.filmListBlock}>
          {watchList.map(({ name, poster_path, genre_ids, id, inWatch }) => {
            return (
              <FilmListCard key={id} id={id} name={name} image={poster_path} genre={genre_ids} buttonType={inWatch} />
            );
          })}
        </div>
      </main>
    </> :
      <>
        <Header active={'watch'} />
        <div className={style.popularHeader}>
          <h2>{filmTitle} is empty</h2>
        </div>
      </>
  )
}

export default FilmsWatchPage;

import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Header from '../Header';
import FilmWatchList from '../FilmWatchList';
import { updatePageTitle, setWatchList } from '../../store/filmApi/actions';

const FilmsWatchPage = () => {
  const dispatch = useDispatch();
  const watchList = useSelector(state => state.filmApi.watchList)
  useEffect(() => {
    dispatch(updatePageTitle('Watch List'))
    const localStorageWatchList = window.localStorage.getItem('watchList')
    const localStorageWatchListJson = JSON.parse(localStorageWatchList)
    dispatch(setWatchList(localStorageWatchListJson))
  }, [dispatch])

  return (
    <>
      <Header active={'watch'} />
      <FilmWatchList watchList={watchList} />
    </>
  )
}

export default FilmsWatchPage;

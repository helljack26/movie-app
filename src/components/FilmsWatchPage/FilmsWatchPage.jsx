import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Header from '../Header';
import FilmWatchList from '../FilmWatchList';
import { updatePageTitle, setWatchList } from '../../store/filmApi/types';

const FilmsWatchPage = () => {
  const dispatch = useDispatch();
  const watchList = useSelector(state => state.filmApi.watchList)
  useEffect(() => {
    dispatch(updatePageTitle('Watch List'))
  }, [dispatch])

  if (watchList.length === 0 && window.localStorage.getItem('watchList') === []) {
    const localStorageWatchList = window.localStorage.getItem('watchList')
    const localStorageWatchListJson = JSON.parse(localStorageWatchList)
    dispatch(setWatchList(localStorageWatchListJson))
  }
  return (
    <>
      <Header active={'watch'} />
      <FilmWatchList watchList={watchList} />
    </>
  )
}

export default FilmsWatchPage;

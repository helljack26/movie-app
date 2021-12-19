import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../Header';
import FilmList from '../FilmList';
import LoadingPage from '../LoadingPage';

import { getFilmListFromApi } from '../../store/filmApi/types';

const FilmListPage = () =>
{
    const filmList = useSelector( state => state.filmApi.filmList )

    const dispatch = useDispatch()
    useEffect( () =>
    {
        dispatch( getFilmListFromApi() )
    }, [dispatch] )

    const loading = useSelector( state => state.filmApi.loading )
    return (
        <>
            {loading ? (
                <LoadingPage />
            ) : (
                    <>
                        <Header active={'popular'} />
                        <FilmList filmList={filmList} />
                    </>
                )}
        </>
    );
};

export default FilmListPage;
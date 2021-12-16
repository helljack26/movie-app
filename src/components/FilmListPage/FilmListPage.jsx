import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
// Components
import Header from '../Header';
import FilmList from '../FilmList';
import LoadingPage from '../LoadingPage';

import { getPopularFilmList } from '../../store/filmApi/types';

const FilmListPage = () =>
{
    const [loading, setLoading] = useState( false );
    const dispatch = useDispatch()

    useEffect( () =>
    {
        const requestToApi = async () =>
        {
            setLoading( true )
            await dispatch( getPopularFilmList() )
            setLoading( false );
        }
        requestToApi()

    }, [dispatch] )

    return (
        <>
            {loading ? (
                <LoadingPage />
            ) : (
                    <>
                        <Header active={'popular'} />
                        <FilmList />
                    </>
                )}
        </>
    );
};

export default FilmListPage;

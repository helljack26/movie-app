import style from './QueryInput.module.css';
import { useDispatch } from 'react-redux';
import { updateSearchFilm, getFilmListFromApi } from '../../store/filmApi/types';
const QueryInput = () =>
{
  const dispatch = useDispatch();
  const handleKeyPress = ( event ) =>
  {
    if ( event.key === 'Enter' )
    {
      dispatch( getFilmListFromApi() )
    }
  }
  return (
    <div className={style.inputBlock}>
      <input className={style.input}
        placeholder='Search film'
        name="query"
        id="gender"
        onKeyPress={( event ) => handleKeyPress( event )}
        onInput={( event ) => dispatch( updateSearchFilm( event.target.value ) )}
      />
      <button type='button' className={style.searchBtn}
        onClick={() => dispatch( getFilmListFromApi() )}>
        <img src="./img/search.svg" alt="search icon" />
      </button>
    </div>
  );
};
export default QueryInput;

import style from './QueryInput.module.css';
import { useDispatch } from 'react-redux';
import { updateSearchFilm, getSearchList } from '../../store/filmApi/types';
const QueryInput = () =>
{
  const dispatch = useDispatch();
  const handleKeyPress = ( event ) =>
  {
    if ( event.key === 'Enter' )
    {
      dispatch( getSearchList( event.target.value ) )
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
        onClick={( event ) => dispatch( getSearchList( event.target.value ) )}>
        <img src="./img/search.svg" alt="search icon" />
      </button>
    </div>
  );
};
export default QueryInput;

import style from './QueryInput.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { updateSearchFilm, getFilmListFromApi } from '../../store/filmApi/actions';
const QueryInput = () => {
  const dispatch = useDispatch();
  const searchFilm = useSelector(state => state.filmApi.searchFilm)
  const handleKeyPress = (event) => {
    if (event.key === 'Enter' && event.target.value !== '') {
      dispatch(getFilmListFromApi())
    }
  }
  return (
    <div className={style.inputBlock}>
      <input className={style.input}
        placeholder='Search film'
        name="query"
        id="gender"
        onKeyPress={(event) => handleKeyPress(event)}
        onInput={(event) => dispatch(updateSearchFilm(event.target.value))}
      />
      <button className={style.searchBtn}
        onClick={() => searchFilm !== '' ? dispatch(getFilmListFromApi()) : null}>
        <img src="./img/search.svg" alt="search icon" />
      </button>
    </div>
  );
};
export default QueryInput;

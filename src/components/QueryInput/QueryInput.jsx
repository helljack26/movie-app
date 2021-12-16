import style from './QueryInput.module.css';
import { useDispatch } from 'react-redux';
import { updateSearchFilm, getSearchList } from '../../store/filmApi/types';
const QueryInput = () =>
{
  const dispatch = useDispatch();
  return (
    <input className={style.input}
      placeholder='Search film'
      name="query"
      id="gender"
      onInput={( event ) =>
      {
        return (
          dispatch( updateSearchFilm( event.target.value ) ),
          dispatch( getSearchList( event.target.value ) )

        )
      }}
    />
  );
};
export default QueryInput;

import style from './QueryInput.module.css'
const QueryInput = ( { onChange } ) =>
{
  return (
    <input className={style.input}
      placeholder='Поиск фильма'
      name="query"
      id="gender"
      onChange={( event ) => onChange( event.target.value )}
    />
  );
};
export default QueryInput;

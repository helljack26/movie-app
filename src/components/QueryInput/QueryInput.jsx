
const QueryInput = ( { onChange } ) =>
{
  return (
    <input
      name="query"
      id="gender"
      onChange={( event ) => onChange( event.target.value )}
    />
  );
};
export default QueryInput;

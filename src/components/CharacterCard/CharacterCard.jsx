import { Link } from 'react-router-dom';
const CharacterCard = ( { name, image, id } ) =>
{
  return (
    <Link to={`/character/${id}`}>
      <h3>{name}</h3>
      <img src={`https://image.tmdb.org/t/p/w500/${image}`} alt="film poster" />
    </Link>
  );
};

export default CharacterCard;

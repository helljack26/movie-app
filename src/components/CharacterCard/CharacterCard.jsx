import { Link } from 'react-router-dom';
const CharacterCard = ({ name, image, specie, gender, id }) => {
  return (
    <Link to={`/character/${id}`}>
      <h3>{name}</h3>
      <img src={image} alt="rick and morty character" />
      <div>Specie: {specie}</div>
      <div>Gender: {gender}</div>
    </Link>
  );
};

export default CharacterCard;

import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CharacterCard from '../CharacterCard';
import Select from '../SelectGender';

const CharactersList = () => {
  const [characters, setCharacters] = useState([]);
  const [gender, setGender] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const requestCharacters = async () => {
      const params = gender ? `?gender=${gender}` : '';

      setLoading(true);
      const response = await fetch(
        `https://rickandmortyapi.com/api/character/${params}`,
      );
      const data = await response.json();
      setLoading(false);
      setCharacters(data.results);
    };

    requestCharacters();
  }, [gender]);

  return (
    <>
      {loading ? (
        <div>...Loading</div>
      ) : (
        <>
          <Link to="/favorites-characters">Go to favorites</Link>
          <div>Hello rick & morty</div>
          <Select value={gender} onChange={(value) => setGender(value)} />
          {characters.map(({ name, image, species, id, gender }) => {
            return (
              <CharacterCard
                key={id}
                id={id}
                name={name}
                image={image}
                specie={species}
                gender={gender}
              />
            );
          })}
        </>
      )}
    </>
  );
};

export default CharactersList;

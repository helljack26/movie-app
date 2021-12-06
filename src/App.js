import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CharacterDetails from './components/CharacterDetails';
import CharacterList from './components/CharactersList';
import FavoritesCharacters from './components/FavoritesCharacters';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CharacterList />} />
        <Route path="/character/:id" element={<CharacterDetails />} />
        <Route path="/favorites-characters" element={<FavoritesCharacters />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

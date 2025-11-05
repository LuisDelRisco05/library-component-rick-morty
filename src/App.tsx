import { Tarjeta } from './components/tarjeta';
import { Box } from '@mui/material';

import './App.css'

function App() {
  return (
    <Box className="container-card-main" sx={{ display: 'flex', flexWrap: 'wrap', gap: 3 }}>
      <Tarjeta
        name="Morty Smith"
        species="Humano"
        status="Vivo"
        lastLocation="Story Train"
        firstEpisode="Never Ricking Morty"
        image="https://rickandmortyapi.com/api/character/avatar/2.jpeg"
      />

      <Tarjeta
        name="Rick Sanchez"
        image="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
        species="Humano"
        status="Vivo"
        lastLocation="Citadel of Ricks"
        firstEpisode="Pilot"
      />
      
      <Tarjeta
        name="Abadango"
        species="Cronenbergs"
        status="Muerto"
        lastLocation="Abadango"
        firstEpisode="Never Ricking Morty"
        image="https://rickandmortyapi.com/api/character/avatar/6.jpeg"
      />

      <Tarjeta
        name="Albert Einstein"
        image="https://rickandmortyapi.com/api/character/avatar/11.jpeg"
        species="Humano"
        status="Muerto"
        lastLocation="Earth"
        firstEpisode="Pilot"
      />
    </Box>
  );
}

export default App;
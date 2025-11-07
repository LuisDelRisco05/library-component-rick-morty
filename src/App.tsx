import { Tarjeta } from './components/tarjeta';
import { Box } from '@mui/material';

import './App.css'
import { ButtonComponent, SearchInput, TabsComponent } from './components/common';
import theme from './theme/theme';
import { useState } from 'react';

function App() {

  const [selectedTab, setSelectedTab] = useState("all");

  const tabs = [
    { label: "Todos", value: "all" },
    { label: "Vivos", value: "alive" },
    { label: "Muertos", value: "dead" },
    { label: "Desconocido", value: "unknown" },
  ];


  return (
    <Box className="container-card-main" sx={{ display: 'flex', flexWrap: 'wrap', gap: 3 }}>
      {/* Ejemplos */}
      
      <TabsComponent
        tabs={tabs}
        value={selectedTab}
        onChange={(value: string | number) => setSelectedTab(String(value))}
      />

      
      <Tarjeta
        id={1}
        name="Morty Smith"
        species="Humano"
        status="Alive"
        location="Story Train"
        gender="Male"
        image="https://rickandmortyapi.com/api/character/avatar/2.jpeg"
        variant='vertical-small'
      />

      <ButtonComponent 
        backgroundColor={(theme.palette.primary as any)[500]} 
        color={(theme.palette.primary as any)[900]}
        text="button" 
        onClick={() => alert('Button clicked!')}
      />

      <SearchInput
          onChange={(text) => console.log("🔍 Buscando:", text)}
      />

      <Tarjeta
        id={2}
        name="Rick Sanchez"
        image="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
        species="Humano"
        status="Alive"
        location="Citadel of Ricks"
        gender="Male"
        variant='horizontal-normal'
      />

    </Box>
  );
}

export default App;
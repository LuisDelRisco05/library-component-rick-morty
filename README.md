# Tarjeta — Librería de componente (Prueba técnica)

**Resumen**  
Esta librería contiene un único componente reutilizable llamado **`Tarjeta`** implementado en **React + TypeScript** y estilado con **Material UI (MUI)**.

---

## 🎯 Objetivo

- Implementar un componente `Tarjeta` fiel al diseño entregado en Figma.
- Empaquetar la librería para que sea consumible por otras aplicaciones.
- Incluir pruebas unitarias (Vitest / Testing Library).

---

## 🔧 Tecnologías principales

- React 19 (TypeScript)
- Vite (build dev)
- Material UI (MUI)
- Vitest + @testing-library/react

---
 Instalación local

# desde la raíz del proyecto de la librería
npm pack
# en tu app consumidora
npm install ../ruta/rick-morty-card-0.0.0.tgz

## Importar en una app

import { Tarjeta } from 'nombre-de-la-libreria';

<Tarjeta
  name="Rick Sanchez"
  species="Humano"
  status="Vivo"
  lastLocation="Earth (C-137)"
  firstEpisode="Pilot"
  image="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
/>

## Ejecutar tests:

npm run test



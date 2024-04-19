import React from 'react';
import ReactDOM from 'react-dom/client';
import Root from "./routes/Root";
import FrontPage from "./routes/FrontPage"
//import AboutPokemon from "./routes/AboutPokemon"
import { RouterProvider, createHashRouter } from "react-router-dom"
import './components/Pokemon.css' 
import './components/PokemonDetails.css'

import AboutPokemon from "./components/AboutPokemon";

const router = createHashRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "/",
                element: <FrontPage />,
            },
            {
                path: "/about",
                element: <AboutPokemon />,
            },
        ],
    },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
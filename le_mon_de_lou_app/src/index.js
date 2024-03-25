import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './App';
import Accueil from './pages/Accueil';
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import Accueil_pok from './pages/Pokemon/Accueil_pok';
import History from './pages/Pokemon/History';
import Accueil_gen from './pages/Genshin/Accueil_gen';
import Accueil_coach from './pages/Coach_Lou/Accueil_coach';
import Accueil_unt from './pages/Untraveled/Accueil_unt';
import Project_page, { loader as projectLoader, } from './pages/Coach_Lou/Project_page';
import Saison_page, { loader as saisonLoader, } from './pages/Coach_Lou/Saison_page';
import Tournament, { loader as tournamentLoader, } from './pages/Pokemon/Tournament';
import TournamentBattle, { loader as battleLoader, } from './pages/Pokemon/TournamentBattle';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "",
        element: <Accueil />,
      },
      {
        path: "pokemon",
        element: <Accueil_pok />,
      },
      {
        path: "pokemon/history",
        element: <History />,
      },
      {
        path: "pokemon/tournament/:tournamentId",
        element: <Tournament />,
        loader: tournamentLoader,
      },
      {
        path: "pokemon/tournament/:tournamentId/:tourId/:battleId",
        element: <TournamentBattle />,
        loader: battleLoader,
      },
      {
        path: "genshin",
        element: <Accueil_gen />
      },
      {
        path: "coach",
        element: <Accueil_coach />
      },
      {
        path: "coach/:projectId",
        element: <Project_page />,
        loader: projectLoader,
      },
      {
        path: "coach/:projectId/:saisonId",
        element: <Saison_page />,
        loader: saisonLoader,
      },
      {
        path: "untraveled",
        element: <Accueil_unt />
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

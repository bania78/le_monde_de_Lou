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
import Accueil_agot from './pages/Agot/Accueil_agot';
import Project_page, { loader as projectLoader, } from './pages/Coach_Lou/Project_page';
import Saison_page, { loader as saisonLoader, } from './pages/Coach_Lou/Saison_page';
import Tournament, { loader as tournamentLoader, } from './pages/Pokemon/Tournament';
import Perso, { loader as persoLoader, } from './pages/Pokemon/Perso';
import TournamentBattle, { loader as battleLoader, } from './pages/Pokemon/TournamentBattle';
import History_Page, { loader as historyLoader, } from './pages/Agot/History_page';
import Story, { loader as storyLoader, } from './pages/Pokemon/Story';

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
        path: "pokemon/story/:storyId",
        element: <Story />,
        loader: storyLoader,
      },
      {
        path: "pokemon/tournament/:tournamentId",
        element: <Tournament />,
        loader: tournamentLoader,
      },
      {
        path: "pokemon/perso/:persoId",
        element: <Perso />,
        loader: persoLoader,
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
      },
      {
        path: "ck3agot",
        element: <Accueil_agot />
      },
      {
        path: "ck3agot/:projectId",
        element: <History_Page />,
        loader: historyLoader,
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

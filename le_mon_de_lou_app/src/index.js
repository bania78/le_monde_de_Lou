import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import App from "./App";
import Accueil from "./pages/Accueil";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import Accueil_pok from "./pages/Pokemon/Accueil_pok";
import History from "./pages/Pokemon/History";
import Tournament, {
  loader as tournamentLoader,
} from "./pages/Pokemon/Tournament";
import Perso, { loader as persoLoader } from "./pages/Pokemon/Perso";
import TournamentBattle, {
  loader as battleLoader,
} from "./pages/Pokemon/TournamentBattle";
import Story, { loader as storyLoader } from "./pages/Pokemon/Story";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
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
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

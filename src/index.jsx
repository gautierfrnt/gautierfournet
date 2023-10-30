import React from "react";
import ReactDOM from "react-dom/client";
import App from './App.jsx'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MesProjets from "./pages/MesProjets.jsx";
import NoPage from "./pages/NoPage.jsx";
import PageContact from "./pages/PageContact.jsx";
import ProjetEDN from './pages/ProjetEDN.jsx';
import ProjetEnergcuma from './pages/ProjetEnergcuma.jsx';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/Mesprojets',
        element: <MesProjets />,
      },
      {
        path: '/Nopage',
        element: <NoPage />,
      },
      {
        path: '/PageContact',
        element: <PageContact />,
      },
      {
        path: '/ProjetEDN',
        element: <ProjetEDN />,
      },
      {
        path: '/ProjetEnergcuma',
        element: <ProjetEnergcuma />,
      },
    ]
  }
])


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

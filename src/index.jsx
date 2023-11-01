import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import App from './App.jsx';
import MesProjets from "./pages/MesProjets.jsx";
import NoPage from "./pages/NoPage.jsx";
import PageContact from "./pages/PageContact.jsx";
import ProjetEDN from './pages/ProjetEDN.jsx';
import ProjetEnergcuma from './pages/ProjetEnergcuma.jsx';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Mesprojets" element={<MesProjets />} />
        <Route path="/Nopage" element={<NoPage />} />
        <Route path="/PageContact" element={<PageContact />} />
        <Route path="/ProjetEDN" element={<ProjetEDN />} />
        <Route path="/ProjetEnergcuma" element={<ProjetEnergcuma />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

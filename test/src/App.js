import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Heroes from "./pages/Heroes";
import Ressource from "./pages/Ressource";
import Gem from "./pages/Gem";
import Weapon from "./pages/Weapon";
import Armor from "./pages/Armor";
import Jewelery from "./pages/Jewelery";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Heroes" element={<Heroes />} />
        <Route path="Ressources" element={<Ressource />} />
        <Route path="Gem" element={<Gem />} />
        <Route path="Weapon" element={<Weapon />} />
        <Route path="Armor" element={<Armor />} />
        <Route path="Jewelery" element={<Jewelery />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

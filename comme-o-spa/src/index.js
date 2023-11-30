import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./main.scss";
import Header from "./components/Header/header"
import Home from "./pages/Home/home"
import Tarifs from "./pages/Tarifs/tarifs"
import Massages from "./pages/Massages/massages"
import Mentions from "./pages/Mentions/mentions"

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/Tarifs" element={<Tarifs />} />
        <Route exact path="/Massages" element={<Massages />} />
        <Route exact path="/Mentions" element={<Mentions />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../components/layout";
import HomePage from "../views/homePage";
import ContactPage from "../views/contact";
import BriefcasePage from "../views/briefcase";
import TrajectoryPage from "../views/trajectory";
/* import './App.css'; */

function App() {
  return (
    <BrowserRouter>
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/briefcase" element={<BriefcasePage />} />
        <Route path="/trayectory" element={<TrajectoryPage />} />

      
      </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;

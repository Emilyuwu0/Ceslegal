import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../components/layout";
import HomePage from "../views/homePage";
import ContactPage from "../views/contact";
/* import './App.css'; */

function App() {
  return (
    <BrowserRouter>
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/parte2" element={<ContactPage />} />
      </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../components/layout";
import HomePage from "../views/homePage";

/* import './App.css'; */

function App() {
  return (
    <BrowserRouter>
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;

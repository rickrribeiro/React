import React from 'react';
import Home from './pages/home/Home'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Search from './pages/search/Search'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    //BEM
    <div className="app">
      <Router>
        <Header />
        <Routes>
          <Route element={<Search />} path="/search" />
          <Route element={<Home />} path="/" />
        </Routes>
        <Footer />
      </ Router>
    </div>
  );
}

export default App;

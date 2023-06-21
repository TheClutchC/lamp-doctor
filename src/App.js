import React from "react"
import "./App.css"
import { HashRouter, Routes, Route } from "react-router-dom"

import Header from "./components/Header"
import Footer from "./components/Footer"

import HomePage from "./pages/HomePage"
import AboutPage from "./pages/AboutPage"
import ServicesPage from "./pages/ServicesPage"
import ContactPage from "./pages/ContactPage"

// Base route "/" must be be the last one listed when using HashRouter below
// Must use HashRouter to deploy React Web App on GitHub Pages

function App() {
	return (

		<HashRouter>
      <header>
        <Header />
      </header>
      <Routes>
        <Route exact path='/about' element={<AboutPage />} />
        <Route exact path='/services' element={<ServicesPage />} />
        <Route exact path='/contact' element={<ContactPage />} />
        <Route exact path='/' element={<HomePage />} />
      </Routes>
      <footer>
        <Footer />
      </footer>
    </HashRouter>
	)
}

export default App
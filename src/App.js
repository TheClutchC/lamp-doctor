import React from "react"
import "./App.css"
import { HashRouter, Routes, Route } from "react-router-dom"

import Header from "./components/header/Header"
import Footer from "./components/footer/Footer"

import HomePage from "./pages/HomePage"

// Base route "/" must be be the last one listed when using HashRouter below

function App() {
	return (

		<HashRouter>
      <nav>
        <Header />
      </nav>
      <Routes>
        <Route exact path='/about' element={<AboutPage />} />
        <Route exact path='/events' element={<ServicesPage />} />
        <Route exact path='/connect' element={<ContactPage />} />
        <Route exact path='/' element={<HomePage />} />
      </Routes>
      <footer>
        <Footer />
      </footer>
    </HashRouter>
	)
}

export default App
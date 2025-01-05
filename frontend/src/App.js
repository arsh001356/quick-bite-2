import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Footer from './components/Footer'
import About from './components/About'
import BookTable from "./components/BookTable"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from './components/Menu'




function App() {
  return (
    <>
      <BrowserRouter>

        <Navbar />

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/menu" element={<Menu />} />
          {/* <Route exact path="/bookTable" element={<BookTable />} /> */}
        </Routes>
        <Footer />

      </BrowserRouter>

    </>
  )
}

export default App
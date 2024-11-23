import React from 'react'
import './App.scss'
import {  Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
// import Blog from './pages/Blog'
// import Contacts from './pages/Contacts'
import Header from './components/Header/Header'

const App = () => {
  return (
    <>
    <Header/>

    <Routes>
      <Route path='/' element={<Home/>} />
      {/* <Route path='/blog' element={<Blog/>} />
      <Route path='/contacts' element={<Contacts/>} /> */}
    </Routes>

    </>
    )
}

export default App
import React from 'react'
import './App.scss'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Blog from './pages/Blog'
import Contacts from './pages/Contacts'
import Header from './components/Header/Header'
import Sale from './pages/Sale'
import SingelPage from './pages/SingelPage'
import SingupPage from './pages/SingupPage'
import LoginPage from './pages/LoginPage'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <>
      <Header />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/sale' element={<Sale />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/contacts' element={<Contacts />} />
        <Route path='/product/:id' element={<SingelPage />} />
        <Route path='/signup' element={<SingupPage />} />
        <Route path='/login' element={<LoginPage />} />
        
      </Routes>

      <Footer/>

    </>
  )
}

export default App
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Home/Home'
import Contact from '../Contact/Contact'
import DonationHistory from '../Donation/DonationHistory'
import Donation from '../Donation/Donation'


const Container = () => {
  return (
    <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/donation_history' element={<DonationHistory />}></Route>
        <Route path='/donate_now' element={<Donation />}></Route>

    </Routes>
  )
}

export default Container
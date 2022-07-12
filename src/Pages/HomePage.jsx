import React, { useState } from 'react'
import Header from '../components/Header'
import Items from '../components/Items'
import Footer from '../components/Footer'

export default function HomePage() {
    const [order,setOrder] = useState([])
  return (
    <div className='App'>
        <Header />
        <Items />
        <Footer />
    </div>
  )
}

import React from 'react'
import { useParams } from 'react-router-dom'
import Navbar from './Navbar'

const Shery = () => {
    let {name} = useParams()
  return (
    <div>
        
        <h1>{name}</h1>
    </div>
  )
}

export default Shery
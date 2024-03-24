import React from 'react'
import { useParams } from 'react-router-dom'

const Shery = () => {
    let {name} = useParams()
  return (
    <div>{name}</div>
  )
}

export default Shery
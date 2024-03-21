import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import { useNavigate } from 'react-router-dom'

const Home = ({heros,users}) => {
    const navi =  useNavigate()
    const exploreCourse =()=>{
        navi('/course')
    }
  return (
    <div>
        <Navbar users={users}/>
        {
            heros.map((items)=>{
                if (items.type === "Home") {
                    return (
                     <Hero text={items.mainTxt} btn={items.btnTxt} exploreCourse={exploreCourse}/>
                    )
                }
                return null
            })
        }
    </div>
  )
}

export default Home
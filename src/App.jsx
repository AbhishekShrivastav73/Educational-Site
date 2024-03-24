// import React from 'react'
import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './Components/Login'
import Signup from './Components/Signup'
import Course from './Components/Course'
import Home from './Components/Home'
import Shery from './Components/Shery'
import Navbar from './Components/Navbar'
const App = () => {
  const [courses,Setcourse] = useState([
    {name : 'Sheryians Coding School', beginner : true, type : 'Full Stack Development',language : 'Hindi',img :'https://ik.imagekit.io/sheryians/courses_gif/Front-End_Domination__Create_Anything_with_Code-FRONTENDTHUBNAIL_Wf8WqcNJx.jpg'},
    {name : 'Chai aur Code', beginner : true, type : 'Full Stack Development', language : 'Hindi',img :'https://i.ytimg.com/vi/QIFhevCENrU/maxresdefault.jpg'},
    {name : 'Harkirat', beginner : false, type : 'Full Stack Development', language : 'English',img : 'https://substackcdn.com/image/youtube/w_728,c_limit/I_W5tlCmz6E'},
    {name : 'Apna College', beginner : false, type : 'Full Stack Development', language : 'Hindi',img :'https://th.bing.com/th/id/OIP.FoBe-qmh7POn36nfA6zq-wAAAA?rs=1&pid=ImgDetMain'},
    {name : 'Code with Harry', beginner : false, type : 'Full Stack Development', language : 'Hindi',img : 'https://networthchart.com/wp-content/uploads/2023/08/ezgif.com-gif-maker-2023-08-23T232201.948.webp'},
  ]);

  const [users,setUsers] = useState([])
  const getUsers=(data)=>{
      setUsers([...users, data]);
      console.log(users)
  }

  const [hero,setHero] = useState([
    {mainTxt : '-WEB DEV-',btnTxt : 'Explore Courses',type : "Home"},
    {mainTxt : '-COURSES-',btnTxt : 'Explore Top Playlist',type : 'course'},
    {mainTxt : '-NOTES-',btnTxt : 'Handwritten Notes',type : 'notes'},
  ])
 
  return (
    <>
    <Navbar/>

    <Routes>
      <Route path='/' element={<Login  />} />
      <Route path='/signup' element={<Signup  getUsers={getUsers} />} />
      <Route path='/course' element={<Course courses={courses} heros={hero} />} />
      <Route path='/course/:name' element={<Shery/>} />
      <Route path='/home' element={<Home users={users} heros={hero}/>} />
    </Routes>
    </>
  )
}

export default App
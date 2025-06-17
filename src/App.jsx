import { useState } from 'react'
import {Home} from './Home';
import { Hobbies } from './Hobbies';
import { Favorites } from './Favorites';
import { Resume } from './Resume';
import { Pets } from './pets';


import './App.css'
import { NavBar } from './NavBar'
import {Routes, Route} from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar></NavBar>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/hobbies" element={<Hobbies />}></Route>
          <Route path="/favorites" element ={<Favorites />}></Route>
          <Route path="/resume" element = {<Resume />}></Route>
          <Route path="/pets" element = {<Pets />}></Route>
          </Routes>
    </>
  )
}

export default App

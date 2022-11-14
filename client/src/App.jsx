import React from 'react'
import { useEffect } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'

import Storage from './components/Storage'
import axios from 'axios'

function App() {

  useEffect(()=>{
    axios('/user').then(res=>console.log(res.data))
  },[])


  return <div className="App">
    <Storage>
    <Routes>
            {/* <Route path="/" element={<Home />} /> */}
    </Routes>
<h1>hallo world</h1>
    </Storage>
  </div>
}

export default App

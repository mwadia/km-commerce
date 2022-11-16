import React, { useEffect } from 'react'
import { useState } from 'react'
import { createContext } from 'react'
import Axios from 'axios'
export const Store=createContext(0)
function Storage(props) {
const [user,setUser]=useState(null)
useEffect(()=>{
Axios.get('/user').then(res=>{
  if(res.data.data){
    setUser(res.data.data)
  }
})
},[])

  return (
    <div>
      <Store.Provider value={{setUser,user}}>
      {props.children}
      </Store.Provider>
      
    </div>
  )
}

export default Storage

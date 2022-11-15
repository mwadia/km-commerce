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
console.log(user);

  return (
    <div>
      <Store.Provider value={{setUser}}>
      {props.children}
      </Store.Provider>
      
    </div>
  )
}

export default Storage

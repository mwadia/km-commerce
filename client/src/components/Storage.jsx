import React from 'react'
import { useState } from 'react'
import { createContext } from 'react'
export const Store=createContext(0)
function Storage(props) {
const [casee,setCase]=useState(1)





  return (
    <div>
      <Store.Provider value={casee}>
      {props.children}
      </Store.Provider>
      
    </div>
  )
}

export default Storage

import React from 'react'
import MyButton from './MyButton'
import BtstrpButton from './BtstrpButton'

import './App.css'

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row border">
          <div className="col text-center">
            <p> First Task</p>
            <BtstrpButton 
                name="GREEN" 
                color="yellow" 
                backgroundColor="green" 
                title="Green"/>
            
            <BtstrpButton 
                name="RED"  
                color="blue" 
                backgroundColor="red" 
                title="Red"/>
          </div>
        </div>
        <div className="row border border-top-0">
          <div className="col text-center">
            <p> Extra Practice</p>
            <MyButton />
            <MyButton />       
          </div>
        </div>
      </div>
    </div>
  )
}

export default App

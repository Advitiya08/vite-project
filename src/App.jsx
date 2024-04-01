import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  function increase(value){
    setCount(count+1);
  
  }
  function decrease(value){
    setCount(count-1);
  
  }
  return (
    <>
      <div>
        <button onClick={(value)=>{
          increase(value)
        }}
        
        class="Increment">
          Increment
         
        </button>
       {count%2===0?(
         <p class="value">
         {count}
       </p>
       ):null}
       
        
        <button onClick={(value)=>{
            decrease(value)
}}
class="Decrement">
          Decrement 
          
        </button>

      </div>
    </>
  )
}

export default App

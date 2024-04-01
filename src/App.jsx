import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const increase=function (){
    setCount(count+1);
  
  }
  const decrease=function (){
    setCount(count-1);
  
  }
  const isCountEven=count%2===0;

  return (
    <>
      <div>
        <button onClick={increase}
        class="Increment">
          Increment
         
        </button>
       {isCountEven?(
         <p class="value">
         {count}
       </p>
       ):null}
       
        
        <button onClick={decrease}
          class="Decrement">
          Decrement 
          
        </button>

      </div>
    </>
  )
}

export default App

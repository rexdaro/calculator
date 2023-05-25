
import { useState } from 'react'

import './App.css'

function App() {
  
  const [resultado, setResultado] = useState(0)

  const sumar = () => {
    setResultado()
  }

  return (
    <>
      
      


      <h1>esto será una calculadora:</h1>


      <div className='numeros'>
        <button>0</button>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button>.</button>
      </div>
      

      <div className='operadores'>
        <button>+</button>
        <button>-</button>
        <button>x</button>
        <button>/</button>
        <button>√</button>
        <button>^</button>
        <button>=</button>
      </div>



      <div className='visualizacion'>
        <h2>{resultado}</h2>
      </div>
      
    </>
    
  )
}

export default App

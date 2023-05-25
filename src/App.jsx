
import { useState } from 'react'

import './App.css'

function App() {
  
  const [entrada, setResultado] = useState('')

  const escribe1 = () => {
    setResultado(entrada +'1')
  }

  const escribe2 = () => {
    setResultado(entrada +'2')
  }

  const escribe3 = () => {
    setResultado(entrada +'3')
  }








  
  const reseteo = () => {
    setResultado('')
  }

  const borrar = () => {
    setResultado(entrada.slice(0, -1))
  }

  return (
    <>
      <h1>esto será una calculadora:</h1>


      <div className='numeros'>
        <button>0</button>
        <button onClick={escribe1}>1</button>
        <button onClick={escribe2}>2</button>
        <button onClick={escribe3}>3</button>
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
        <button onClick={borrar}>borrar</button>
        <button onClick={reseteo}>reset</button>

      </div>



      <div className='visualizacion'>
        <h2>{entrada}</h2>
      </div>

      <div>
        <h4>resultado:</h4>
        <span>0</span>
      </div>
      
      
    </>
    
  )
}

export default App

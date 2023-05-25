
import { useState } from 'react'

import './App.css'

function App() {

  // constantes y useStates

  const [numero1, setNumero1] = useState(0)
  
  const [entrada, setEntrada] = useState('')

  const [historial, setHistorial] = useState('')



  // escribiendo numeros en pantalla

  const escribe0 = () => {
    setEntrada(entrada +'0')
    setHistorial(historial + '0')
  }

  const escribe1 = () => {
    setEntrada(entrada +'1')
    setHistorial(historial + '1')
    
  }

  const escribe2 = () => {
    setEntrada(entrada +'2')
    setHistorial(historial + '2')
  }

  const escribe3 = () => {
    setEntrada(entrada +'3')
    setHistorial(historial + '3')
  }

  const escribe4 = () => {
    setEntrada(entrada +'4')
    setHistorial(historial + '4')
  }

  const escribe5 = () => {
    setEntrada(entrada +'5')
    setHistorial(historial + '5')
  }

  const escribe6 = () => {
    setEntrada(entrada +'6')
    setHistorial(historial + '6')
  }
  const escribe7 = () => {
    setEntrada(entrada +'7')
    setHistorial(historial + '7')
  }

  const escribe8 = () => {
    setEntrada(entrada +'8')
    setHistorial(historial + '8')
  }

  const escribe9 = () => {
    setEntrada(entrada +'9')
    setHistorial(historial + '9')
  }

  const escribePunto = () => {
    setEntrada(entrada +',')
  }



  // funciones de los operadores

  const sumar = () => {
    if (entrada === '') {      
      setEntrada('+')  
      setHistorial (historial + '+')    
    }
    else{
      setNumero1(numero1 + parseInt(entrada))
      setEntrada('+')
      setHistorial (historial + '+')  
    }  
  }

  const restar = () => {
    if (entrada === '') {      
      setEntrada('-')
      setHistorial (historial + '-')  
    }
    else{
      setNumero1(numero1 - parseInt(entrada))
      setEntrada('-')
      setHistorial (historial + '-')  
    }
  }

  const igual = () => {
    setNumero1(numero1 + parseInt(entrada))
    setEntrada('')
   
    
  }





  const reseteo = () => {
    setEntrada('')
    setNumero1(0)
    setHistorial('')
  }

  const borrar = () => {
    setEntrada(entrada.slice(0, -1))
  }

  return (
    <>
      <h1>Esto es una calculadora:</h1>


      <h2>| {historial} |</h2>

      <div className='numeros'>
        <button onClick={escribe0}>0</button>
        <button onClick={escribe1}>1</button>
        <button onClick={escribe2}>2</button>
        <button onClick={escribe3}>3</button>
        <button onClick={escribe4}>4</button>
        <button onClick={escribe5}>5</button>
        <button onClick={escribe6}>6</button>
        <button onClick={escribe7}>7</button>
        <button onClick={escribe8}>8</button>
        <button onClick={escribe9}>9</button>
        <button onClick={escribePunto}>.</button>
      </div>
      

      <div className='operadores'>
        <button onClick={sumar}>+</button>
        <button onClick={restar}>-</button>
        <button>x</button>
        <button>/</button>
        <button>√</button>
        <button>^</button>
        <button onClick={igual}>=</button>
        <button onClick={borrar}>borrar</button>
        <button onClick={reseteo}>reset</button>

      </div>



      <div className='visualizacion'>
        
        <h2>entrada: {entrada}</h2>
      </div>

      <div>
        <h4>resultado:</h4>

        <span>numero1: {numero1}</span>
        
      </div>
      
      
    </>
    
  )
}

export default App

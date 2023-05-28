import { useState, useRef, useEffect } from 'react';
import './App.css';
import { evaluate } from "mathjs";
import imgReact from './assets/icons/react.svg'


function App() {
  const [resultado, setResultado] = useState('');
  const [entrada, setEntrada] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);
  


  const escribirNumero = (valor) => {
    setEntrada(entrada + valor); 
    inputRef.current.focus();   
    
  };

  const resetear = () => {
    setResultado('');   
    setEntrada('');
    inputRef.current.focus();
    limpiarInput('')
    
  };

  const igual = () => {    
    setResultado(evaluate(entrada))
    setEntrada('')
    inputRef.current.focus();
    limpiarInput('')
    
   
  }

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      igual();
      inputRef.current.focus();
      setEntrada('')
      limpiarInput('')
    }
  };

  const limpiarInput = () => {
    const inputElement = inputRef.current;
    if (inputElement) {
      inputElement.value = '';
    }
  };

  return (
    <>

      <img className='img_react' src={imgReact} alt="React" />
      

      <h1 className='titulo'>Calculadora</h1>


      <div className="calculadora">
        


        <input className='input'

          type="text"      
          value={entrada}
          onChange={(e) => setEntrada(e.target.value)}
          onKeyDown={handleKeyPress}
          ref={inputRef}
          readOnly={window.innerWidth < 600} // Configura readOnly en dispositivos móviles

        
        ></input>

        <h1 className='entrada'>entrada:{entrada}</h1>    


        <div className="resultado">        
            <p>{resultado}</p>
          </div>
          

        <div className="botones">



          <div className='linea_0_numeros'>
            <button onClick={() => escribirNumero('(')}>(</button>
            <button onClick={() => escribirNumero(')')}>)</button>
          


            
            <button onClick={() => escribirNumero('^')}>^</button>
            <button onClick={() => escribirNumero(`sqrt(`)}>√</button>    
          
        
      

            <div className="operadores">
              <button onClick={() => escribirNumero('+')} >+</button>
              <button onClick={() => escribirNumero('-')} >-</button>
              <button onClick={() => escribirNumero('*')}>X</button>   
              <button onClick={() => escribirNumero('/')}>/</button>
            </div>
          </div>


          <div className='linea_1_numeros'>
            <button onClick={() => escribirNumero('7')}>7</button>
            <button onClick={() => escribirNumero('8')}>8</button>
            <button onClick={() => escribirNumero('9')}>9</button>
          </div>

          <div className='linea_2_numeros'>
            <button onClick={() => escribirNumero('4')}>4</button>
            <button onClick={() => escribirNumero('5')}>5</button>
            <button onClick={() => escribirNumero('6')}>6</button>
          </div>

          <div className='linea_3_numeros'>
            <button onClick={() => escribirNumero('1')}>1</button>
            <button onClick={() => escribirNumero('2')}>2</button>
            <button onClick={() => escribirNumero('3')}>3</button>
          </div>

          <div className='linea_4_numeros'>
            <button onClick={() => escribirNumero('.')}>.</button>
            <button onClick={() => escribirNumero('0')}>0</button>         
            <button className='buttonRed' onClick={igual}>=</button>
          </div>  

          

          <button className='buttonRed' onClick={resetear}>
            Reset
          </button>
        </div>
      </div>

      <h5>Copyright © | ♥ Coded with  by Manuel Rivas | Front-End Developer.</h5>
    </>

  );
}

export default App;

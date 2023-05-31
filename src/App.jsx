import { useState, useRef, useEffect } from 'react';
import './App.css';
import { evaluate } from "mathjs";
import imgReact from './assets/icons/react.svg'


function App() {
  const [resultado, setResultado] = useState('');
  const [entrada, setEntrada] = useState('');
  const [historial, setHistorial] = useState([]);
  const inputRef = useRef(null);

  useEffect(() => {
    const storedHistorial = localStorage.getItem('historial');
    if (storedHistorial) {
      setHistorial(JSON.parse(storedHistorial));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('historial', JSON.stringify(historial));
  }, [historial]);

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

    agregarAlHistorial();   

    setEntrada('');
    inputRef.current.focus();
    limpiarInput('');    
   
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


  const agregarAlHistorial = () => {
    if (evaluate(entrada) === undefined) {
      return
    }
    else {
      setHistorial((prevHistorial) => [...prevHistorial, `${entrada} = ${evaluate(entrada)}`]);
    }
  };

  const limpiarHistorial = () => {
    setHistorial([]);
  }

  const colocarEnEntrada = (x) => {
    const expression = x.split('=')[0].trim();
    setEntrada(expression);
  };

  const borrar = () => {
    setEntrada(entrada.slice(0, entrada.length - 1));
  }

  return (
    <>

      <img className='img_react' src={imgReact} alt="React" />
      

      <h1 className='titulo'>Calculadora</h1>

      <a href='#historial'><button className='button_historial'>Historial</ button></a>

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
          <button className='buttonRed' onClick={borrar}>
            {'<---'}
          </button>
        </div>
      </div>

      <h5>Copyright © | ♥ Coded with  by Manuel Rivas | Front-End Developer.</h5>

      <div>
        <h3>Historial de operaciones realizadas:</h3>
        <ul>
        {historial.map((x, index) => (
          <li key={index}><button onClick={() => colocarEnEntrada(x)}>{x}</button></li>
        ))
        }
          <button id='historial'  className='button_historial' onClick={limpiarHistorial}>Limpiar historial</button>
        </ul>
      </div>
    </>

  );
}

export default App;

import { useState } from 'react';
import './App.css';


function App() {
  const [resultado, setResultado] = useState(0);
  const [entrada, setEntrada] = useState('');
  const [historial, setHistorial] = useState('');

  const actualizarEntrada = (valor) => {
    setEntrada(entrada + valor);
  };






  const sumar = () => { 
      setResultado(resultado + parseFloat(entrada));
      setHistorial(historial + entrada + ' + ');
      setEntrada('');
  };



  const restar = () => {
    setResultado(resultado - parseFloat(entrada));
    setHistorial(historial + entrada + ' - ');
    setEntrada('');
  };

  const igual = () => {

    if (entrada === ''){
      return
    }
    else{
      setResultado(resultado + parseFloat(entrada));
      setHistorial('');
      setEntrada('');
    }
  };

  const resetear = () => {
    setResultado(0);
    setHistorial('');
    setEntrada('');
  };

  return (
    <div className="calculadora">
      <h1>Calculadora</h1>


      <div className="historial">entrada:{entrada}</div>    
      
      <h1 className="historial">historial:{historial}{entrada}</h1>      

      <div className="botones">
      
      <button onClick={() => actualizarEntrada('0')}>0</button>
      <button onClick={() => actualizarEntrada('1')}>1</button>
      <button onClick={() => actualizarEntrada('2')}>2</button>
      <button onClick={() => actualizarEntrada('3')}>3</button>
      <button onClick={() => actualizarEntrada('4')}>4</button>
      <button onClick={() => actualizarEntrada('5')}>5</button>
      <button onClick={() => actualizarEntrada('6')}>6</button>
      <button onClick={() => actualizarEntrada('7')}>7</button>
      <button onClick={() => actualizarEntrada('8')}>8</button>
      <button onClick={() => actualizarEntrada('9')}>9</button>
      <button onClick={() => actualizarEntrada('.')}>.</button>
       
          
          <button onClick={igual}>=</button>
       
      </div>

      <div className="operadores">
        <button onClick={sumar}>+</button>
        <button onClick={restar}>-</button>
      </div>

      <div className="resultado">        
        <span>resultado:{resultado}</span>
      </div>

      <button className="reset" onClick={resetear}>
        Reset
      </button>
    </div>
  );
}

export default App;

import React, { useState, useRef } from 'react';

function Increment() {
  const [contador, setContador] = useState(0);
  const contadorRef = useRef(0);

  const incrementar = () => {
    setContador(contador + 1);
    contadorRef.current += 1;
    console.log('Valor de contadorRef:', contadorRef.current);
  };

  return (
    <div>
      <h1>Contador (estado): {contador}</h1>
      <h1>Contador (ref): {contadorRef.current}</h1>
      <button onClick={incrementar}>Incrementar</button>
    </div>
  );
}
export default Increment;
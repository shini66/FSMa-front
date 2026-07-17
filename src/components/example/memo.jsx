import { useState, useMemo } from "react";

function MemoTest(){
    const [contador, setContador] = useState(0);
    const [texto, setTexto] = useState(''); 

    const operation = (num) => {
        console.log("Ejecutando operación cara.....");
        for(let i = 0; i < 1000000000; i++){num += 1;};
        return num;
    }

    const resultMemo = useMemo(() => {return operation(contador);}, [contador]);

    return (
        <div>
            <h1>Contador: {contador}</h1>
            <button onClick={() => setContador(contador + 1)}>Incrementar</button>
            <p>Resultado de la operación costosa: {resultMemo}</p>
            <input type="text" value={texto} onChange={(e) => setTexto(e.target.value)} placeholder="Escribe algo..." />
            <p>Texto: {texto}</p>
        </div>
    );
}

export default MemoTest;
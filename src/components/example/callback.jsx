import React, { useCallback, useState } from "react";


const Button = React.memo(({onClick, children}) =>{
    console.log("render boton:", children);
    return <button onClick={onClick}>{children}</button>;
});

function ButtonCall(){
    const [contador, setContador] = useState(0);
    const [texto, setTexto] = useState('');

    const incrementar = useCallback(() => {
        setContador((c) => c + 1);
    }, []);

    return (
        <div>
        <h1>Contador: {contador}</h1>
        <Button onClick={incrementar}>Incrementar</Button>
        <input value={texto} onChange={(e) => setTexto(e.target.value)} placeholder="Escribe algo..." />
        </div>
    );
}

export default ButtonCall;
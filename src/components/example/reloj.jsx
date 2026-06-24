import { useState, useEffect } from "react";

function Reloj(){
    const [hora, setHora] = useState(new Date());

    useEffect(() => {
        const intervalo = setInterval(() => {
            setHora(new Date());
        }, 1000);

        return () => clearInterval(intervalo)
    }, []);

    return <p>La hora es: {hora.toLocaleTimeString()}</p>
}

export default Reloj;
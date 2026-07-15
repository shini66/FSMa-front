import { useState, useEffect } from "react";
import header from "../../helpers/title"

function Count(){
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `Has hecho clic ${'x'}${count} veces`;
    }, [count])

    return (
        <div>
            <p>{header(count, "Has hecho clic esta cantidad:")}</p>
            <button onClick={()=>setCount(count + 1)}>Incrementar</button>
        </div>
    )
}

export default Count;
import { useState } from "react";
import header from "../../helpers/title"

function addValue(){
    return 1 + 1;
}

function Count(){
    const [count, setCount] = useState(() => addValue());

    const increment = () => {
        setCount((prevCount) => prevCount + 1)
    }

    return (
        <div>
            <p>{header(count, "Has hecho clic esta cantidad:")}</p>
            <button onClick={increment}>Incrementar</button>
        </div>
    )
}

export default Count;
import { useState } from "react";
import header from "../../helpers/title"

function Count(){
    const [count, setCount] = useState(0);

    const incrementar = () => {
        setCount(count + 1);
    }

    return (
        <div>
            <p>{header(count, "Has hecho clic esta cantidad:")}</p>
            <button onClick={incrementar}>Incrementar</button>
        </div>
    )
}

export default Count;
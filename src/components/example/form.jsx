import { useState } from "react";

function Count(){
    const [name, setName] = useState('');
    const [msg, setMsg] = useState('');

    const sendMsg = (e) => {
        e.preventDefault();
        console.log("nombre:", name, " mensaje:", msg);
        setName('');
        setMsg('');
    }

    return (
        <div>
            <form onSubmit={sendMsg}>
                <input value={name} onChange={(e) => setName(e.target.value)}></input>
                <br />
                <textarea value={msg} onChange={(e) => setMsg(e.target.value)}></textarea>
                <br />
                <button type="submit">Enviar</button>
            </form>
        </div>
    )
}

export default Count;
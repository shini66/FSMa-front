import { useRef, useState } from "react";
import { CSSTransition } from "react-transition-group";
import '../../style/index.css';

function Animate(){
    const [show, setShow] = useState(false);
    const msgRef = useRef(null);

    return (
        <div>
            <button onClick={() => setShow(!show)}>
                {show ? 'Ocultar' : 'Mostrar'} Mensaje
            </button>
            <CSSTransition
                nodeRef={msgRef}
                in={show}
                timeout={300}
                classNames="fade"
                unmountOnExit
            >
                <div ref={msgRef} className="mensaje">
                ¡Este es un mensaje animado!
                </div>
            </CSSTransition>
        </div>
    );
}

export default Animate;
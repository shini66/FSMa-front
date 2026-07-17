import { useRef } from 'react';

function RefTest(){
    const inputRef = useRef(null);

    const focusInput = () => {
        inputRef.current.focus();
    }

    return (
        <div>
            <input ref={inputRef} type="text" placeholder="Escribe algo..." />
            <button onClick={focusInput}>Enfocar Input</button>
        </div>
    );
}

export default RefTest;
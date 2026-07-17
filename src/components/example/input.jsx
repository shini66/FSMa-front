import { useId } from "react";

function InputTemp({label, tipo='text'}){
    const id = useId();

    return (
        <div>
            <label htmlFor={id}>{label}</label>
            <input id={id} type={tipo} placeholder={label}/>
        </div>
    );
}

export default InputTemp;
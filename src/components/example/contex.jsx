import { createContext, useContext } from "react";


const TemaContext = createContext('claro');

function ButtonTemp(){
    const tema = useContext(TemaContext);
    return <button className={tema}>Tema actual: {tema}</button>;
}

function Panel() {
  return (<div><ButtonTemp /></div>);
}

export {TemaContext};
export default Panel;
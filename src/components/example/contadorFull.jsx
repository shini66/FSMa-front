import { useReducer } from 'react';

const stateInit = {count: 0};

function reducer(state, action){
    switch(action.type){
        case '+':
            return {count: state.count + 1};
        case '-':
            return {count: state.count - 1};
        case 'res':
            return {count: 0};
        default:
            return state;
    }
}

function CountFull(){
    const [state, dispatch] = useReducer(reducer, stateInit);

    return (<div>
        <h1>Contador: {state.count}</h1>
        <button onClick={() => dispatch({ type: '+' })}>Incrementar</button>
        <button onClick={() => dispatch({ type: '-' })}>Decrementar</button>
        <button onClick={() => dispatch({ type: 'res' })}>Resetear</button>
    </div>)
}

export default CountFull;
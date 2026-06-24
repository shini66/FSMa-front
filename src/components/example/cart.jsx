import { useState } from "react";
import header from "../../helpers/title"



function Cart(){
    const [productName, setProductName] = useState('');
    const [cart, setCart] = useState([{ type: 'Existen', nombre: 'Teclado' }, { type: 'Existen', nombre: 'Auricular' }]);

    const addProduct = (product) => {
        setCart((prevCart) => [...prevCart, product])
    }

    return (
        <div>
            <h4>{header(cart, 'Cantidad de elemento:')}</h4>
            <ul>
                {cart.map((producto, index) => (
                    <li key={index}>Estado: {producto.type} - Nombre: {producto.nombre}</li>
                ))}
            </ul>
            <input value={productName} onChange={(e) => setProductName(e.target.value)}></input>
            <button onClick={() => addProduct({ type: 'Nuevo', nombre: productName })}>
                Agregar Producto
            </button>
        </div>
    )
}

export default Cart;
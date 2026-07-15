import { useState } from "react";
import header from "../../helpers/title"

function totalCartPrice(cart){
    return cart.reduce((total, cart) => total + cart.precio, 0);
}

function Cart(){
    const [productName, setProductName] = useState('');
    const [productPrice, setProductPrice] = useState('');
    const [cart, setCart] = useState([]);

    const addProduct = (product) => {
        setCart((prevCart) => [...prevCart, product])
        setProductName(''); setProductPrice('');
    }

    return (
        <div>
            <h4>{header(cart, 'Cantidad de elemento:')}</h4>
            <ul>
                {cart.map((producto, index) => (
                    <li key={index}>Estado: {producto.type} - Nombre: {producto.nombre}/Precio: {producto.precio}</li>
                ))}
            </ul>
            <h4>{header(totalCartPrice(cart), 'Total de Caja:')}</h4>
            <input value={productName} onChange={(e) => setProductName(e.target.value)}></input>
            <input value={productPrice} onChange={(e) => setProductPrice(e.target.value)}></input>
            <button onClick={() => addProduct({ type: 'Nuevo', nombre: productName, precio: Number(productPrice) })}>
                Agregar Producto
            </button>
        </div>
    )
}

export default Cart;
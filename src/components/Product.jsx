function Product({name, precio, disposability, onAddToCart}) {
    return (
        <div style={{ border: '1px solid #ccc', padding: '12px', margin: '8px' }}>
            <h3>{name}</h3>
            <p>Precio: ${precio}</p>
            <p>Estado: {disposability ? '✅ Disponible' : '❌ Sin stock'}</p>
            <button onClick={onAddToCart} disabled={!disposability}>Agregar Carrito</button>
        </div>
    );
}

export default Product;
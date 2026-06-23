function Product({name, price, disposability}) {
    return (
        <div style={{ border: '1px solid #ccc', padding: '12px', margin: '8px' }}>
            <h3>{name}</h3>
            <p>Precio: ${price}</p>
            <p>Estado: {disposability ? '✅ Disponible' : '❌ Sin stock'}</p>
        </div>
    );
}

export default Product;
function CartUser({name, age, address: {city, country}}){
    return (
        <div style={{ border: '1px solid #4f8ef7', padding: '12px', margin: '8px', borderRadius: '8px' }}>
            <h3>{name}</h3>
            <p>Edad: {age}</p>
            <p>📍 {city}, {country}</p>
        </div>
    );
}

export default CartUser;
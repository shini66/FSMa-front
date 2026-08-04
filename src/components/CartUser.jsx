function CartUser({name, email, phone, company, website}){

    return (
        <div style={{ border: '1px solid #4f8ef7', padding: '12px', margin: '8px', borderRadius: '8px' }}>
            <h3>{name}</h3>
            <p>Correo: {email}</p>
            <p>Teléfono: {phone}</p>
            <p>Compañía: {company.name}</p>
            {website && (
                <a href={website} target="_blank" rel='noopener noreferrer'>Mi Pagina web</a>
            )}
        </div>
    );
}

export default CartUser;
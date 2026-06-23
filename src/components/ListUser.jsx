import CartUser from "./CartUser";

function ListUser({listUsers}){
    return (    
        <>
            <h2>Lista de Usuarios</h2>
            {listUsers.map((user) => (
                <CartUser key={user.id} name={user.name} age={user.age} address={user.address} />
            ))}
        </>
    )
}

export default ListUser;
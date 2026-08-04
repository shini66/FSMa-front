import CartUser from "./CartUser";
import { useState, useEffect } from "react";
import axios from "axios";

function ListUser(){

    const [users, setUsers] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadUsers = async () => {
            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/users', {
                    headers: {
                        Authorization: 'Bearer token_ejemplo_123456'
                    }
                });
                setUsers(response.data);
            } catch (err) {
                setError(err.message);
            }
        }

        loadUsers();
    }, []);

    if(error){
        return `Ocurrió un error: ${error}`
    }

    if(!users.length){
        return `Cargando datos....`
    }
    
    return (    
        <div>
            <h2>Lista de Usuarios</h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {users.map((user) => (
                    <CartUser
                        key={user.id}
                        name={user.name}
                        email={user.email}
                        phone={user.phone}
                        company={user.company}
                        website={user.website}
                    />
                ))}
            </div>
        </div>
    )
}

export default ListUser;